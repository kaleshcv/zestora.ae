#!/usr/bin/env bash
#
# ZESTORA — deploy script (run ON the server, at /root/zestora/zestora.ae)
#
# Run this AFTER `git pull`. It installs dependencies, rebuilds the client
# into client/dist (which nginx serves directly), restarts the API under
# PM2, and verifies the live site actually answers.
#
#   cd /root/zestora/zestora.ae
#   git pull
#   ./deploy.sh
#
# Architecture on this server:
#   nginx :443  ── static ──> /root/zestora/zestora.ae/client/dist
#               ── /api/  ──> 127.0.0.1:5001  (PM2 app "zestora-server")
#
# Flags:
#   --skip-install   reuse existing node_modules (faster; source-only changes)
#   --no-restart     rebuild static assets only, leave the API process alone
#   -h, --help       show this help

set -euo pipefail

APP_NAME="zestora-server"
SITE_URL="https://zestora.ae"
ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SERVER_DIR="$ROOT/server"
CLIENT_DIR="$ROOT/client"
DIST_DIR="$CLIENT_DIR/dist"
DIST_BACKUP="$CLIENT_DIR/.dist-previous"

SKIP_INSTALL=0
NO_RESTART=0

if [ -t 1 ]; then
  R=$'\033[0;31m'; G=$'\033[0;32m'; Y=$'\033[0;33m'; B=$'\033[0;34m'; N=$'\033[0m'
else
  R=''; G=''; Y=''; B=''; N=''
fi

step() { printf '\n%s==>%s %s\n' "$B" "$N" "$1"; }
ok()   { printf '%s  ✓%s %s\n' "$G" "$N" "$1"; }
warn() { printf '%s  !%s %s\n' "$Y" "$N" "$1"; }
die()  { printf '\n%s  ✗ %s%s\n\n' "$R" "$1" "$N" >&2; exit 1; }

while [ $# -gt 0 ]; do
  case "$1" in
    --skip-install) SKIP_INSTALL=1 ;;
    --no-restart)   NO_RESTART=1 ;;
    -h|--help) sed -n '3,20p' "${BASH_SOURCE[0]}" | sed 's/^#\{1\} \{0,1\}//'; exit 0 ;;
    *) die "Unknown option: $1  (try --help)" ;;
  esac
  shift
done

# ── 1. preflight ──────────────────────────────────────────────────────────
step "Preflight checks"

command -v node >/dev/null 2>&1 || die "node is not installed"
command -v npm  >/dev/null 2>&1 || die "npm is not installed"
NODE_MAJOR="$(node -p 'process.versions.node.split(".")[0]')"
[ "$NODE_MAJOR" -ge 20 ] || die "Node 20+ required, found $(node -v)"
ok "node $(node -v)"

[ -f "$SERVER_DIR/.env" ] || die "Missing $SERVER_DIR/.env"

# nginx serves the static files, so a wrong NODE_ENV won't blank the site —
# but it does control CORS origin and helmet's CSP, so flag it.
if ! grep -qE '^[[:space:]]*NODE_ENV[[:space:]]*=[[:space:]]*production[[:space:]]*$' "$SERVER_DIR/.env"; then
  warn "NODE_ENV is not 'production' in server/.env — CORS and CSP headers will be wrong"
fi

PORT="$(grep -E '^[[:space:]]*PORT[[:space:]]*=' "$SERVER_DIR/.env" | tail -1 | cut -d= -f2 | tr -d '[:space:]')"
PORT="${PORT:-5001}"
ok "API port $PORT"

if git -C "$ROOT" rev-parse --git-dir >/dev/null 2>&1; then
  ok "deploying $(git -C "$ROOT" rev-parse --short HEAD) on $(git -C "$ROOT" rev-parse --abbrev-ref HEAD)"
  [ -n "$(git -C "$ROOT" status --porcelain)" ] && warn "working tree has uncommitted changes — deploying as-is"
fi

# Guard against the duplicate-process bug: two PM2 entries running this same
# server.js means one crash-loops forever on EADDRINUSE, burning CPU and disk.
if command -v pm2 >/dev/null 2>&1; then
  DUPES="$(pm2 jlist 2>/dev/null \
    | tr ',' '\n' | grep -c "\"pm_exec_path\":\"$SERVER_DIR/server.js\"" || true)"
  if [ "${DUPES:-0}" -gt 1 ]; then
    warn "$DUPES PM2 entries run $SERVER_DIR/server.js — only one can bind :$PORT."
    warn "Remove the extras with: pm2 delete <id> && pm2 save"
  fi
fi

# ── 2. dependencies ───────────────────────────────────────────────────────
if [ "$SKIP_INSTALL" -eq 1 ]; then
  step "Dependencies (skipped via --skip-install)"
  [ -d "$SERVER_DIR/node_modules" ] || die "--skip-install given but server/node_modules is missing"
  [ -d "$CLIENT_DIR/node_modules" ] || die "--skip-install given but client/node_modules is missing"
else
  step "Installing server dependencies (production only)"
  if [ -f "$SERVER_DIR/package-lock.json" ]; then
    ( cd "$SERVER_DIR" && npm ci --omit=dev ) || die "server dependency install failed"
  else
    ( cd "$SERVER_DIR" && npm install --omit=dev ) || die "server dependency install failed"
  fi
  ok "server dependencies installed"

  # The client needs devDependencies — vite itself is a devDependency.
  step "Installing client dependencies (including build tools)"
  if [ -f "$CLIENT_DIR/package-lock.json" ]; then
    ( cd "$CLIENT_DIR" && npm ci ) || die "client dependency install failed"
  else
    ( cd "$CLIENT_DIR" && npm install ) || die "client dependency install failed"
  fi
  ok "client dependencies installed"
fi

# ── 3. build ──────────────────────────────────────────────────────────────
# vite empties dist/ before writing. nginx serves that directory live, so a
# failed build would take the site down. Keep the last good build to restore.
step "Building client"

rm -rf "$DIST_BACKUP"
if [ -d "$DIST_DIR" ]; then
  cp -R "$DIST_DIR" "$DIST_BACKUP"
  ok "previous build backed up"
fi

if ( cd "$CLIENT_DIR" && npx vite build ); then
  ok "build succeeded"
else
  if [ -d "$DIST_BACKUP" ]; then
    rm -rf "$DIST_DIR"; mv "$DIST_BACKUP" "$DIST_DIR"
    die "Build failed — previous build restored, site still serving the old version"
  fi
  die "Build failed — and there was no previous build to restore"
fi

[ -f "$DIST_DIR/index.html" ] || die "Build produced no index.html in $DIST_DIR"

# ── 4. restart API ────────────────────────────────────────────────────────
if [ "$NO_RESTART" -eq 1 ]; then
  step "API restart skipped (--no-restart)"
elif ! command -v pm2 >/dev/null 2>&1; then
  warn "pm2 not found — new build is live, but the API was NOT restarted"
else
  step "Restarting API"
  if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
    pm2 restart "$APP_NAME" --update-env >/dev/null || die "pm2 restart failed"
    ok "restarted $APP_NAME"
  else
    ( cd "$SERVER_DIR" && pm2 start server.js --name "$APP_NAME" ) >/dev/null \
      || die "pm2 start failed"
    ok "started $APP_NAME (was not running)"
  fi
  pm2 save >/dev/null 2>&1 || warn "pm2 save failed — list may not survive reboot"
fi

# ── 5. verify ─────────────────────────────────────────────────────────────
step "Verifying deployment"

HEALTHY=0
for _ in $(seq 1 30); do
  if curl -fsS -m 3 "http://127.0.0.1:$PORT/api/health" >/dev/null 2>&1; then HEALTHY=1; break; fi
  sleep 1
done
if [ "$HEALTHY" -ne 1 ]; then
  printf '\n%s--- recent logs ---%s\n' "$Y" "$N"
  pm2 logs "$APP_NAME" --lines 30 --nostream 2>/dev/null || true
  die "API did not answer /api/health on port $PORT after 30s"
fi
ok "API healthy on 127.0.0.1:$PORT"

# Through nginx — proves TLS, the proxy rule, and static serving all work.
if curl -fsS -m 10 "$SITE_URL/api/health" >/dev/null 2>&1; then
  ok "API reachable via $SITE_URL/api/health"
else
  warn "API did not answer through nginx at $SITE_URL/api/health"
fi

if curl -fsS -m 10 "$SITE_URL/" 2>/dev/null | grep -q 'id="root"'; then
  ok "site serving the built page"
else
  warn "$SITE_URL did not return the built page — check nginx"
fi

# Confirm nginx is serving THIS build, not a stale one.
NEW_JS="$(find "$DIST_DIR/assets" -name 'index-*.js' -exec basename {} \; 2>/dev/null | head -1)"
if [ -n "$NEW_JS" ]; then
  if curl -fsS -m 10 "$SITE_URL/" 2>/dev/null | grep -q "$NEW_JS"; then
    ok "live page references this build ($NEW_JS)"
  else
    warn "live page does not reference $NEW_JS — nginx or a CDN may be caching"
  fi
fi

rm -rf "$DIST_BACKUP"

printf '\n%s  Deployed successfully.%s\n\n' "$G" "$N"
command -v pm2 >/dev/null 2>&1 && pm2 status "$APP_NAME" 2>/dev/null || true
