#!/usr/bin/env bash
#
# ZESTORA — view contact form submissions
#
# Reads directly from MongoDB on this server. Nothing leaves the machine.
#
#   ./contacts.sh                 all submissions, newest first (default)
#   ./contacts.sh --recent 20     only the 20 most recent
#   ./contacts.sh --search acme   only ones matching a term
#   ./contacts.sh --count         just the total
#   ./contacts.sh --csv           export all to a .csv file
#   ./contacts.sh --csv out.csv   export to a specific path
#
# Times are shown in Dubai local time (GST, UTC+4).

set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ENV_FILE="$ROOT/server/.env"

MODE="list"
LIMIT="0"
SEARCH=""
CSV_OUT=""

while [ $# -gt 0 ]; do
  case "$1" in
    --recent)
      shift
      [ $# -gt 0 ] || { echo "--recent needs a number" >&2; exit 1; }
      if ! printf '%s' "$1" | grep -qE '^[1-9][0-9]*$'; then
        echo "--recent needs a positive number, got: $1" >&2; exit 1
      fi
      LIMIT="$1"
      ;;
    --search)
      shift
      [ $# -gt 0 ] || { echo "--search needs a term" >&2; exit 1; }
      SEARCH="$1"
      ;;
    --count) MODE="count" ;;
    --csv)
      MODE="csv"
      # optional filename may follow, but not another flag
      if [ $# -gt 1 ] && [ "${2#-}" = "$2" ]; then shift; CSV_OUT="$1"; fi
      ;;
    -h|--help) sed -n '3,14p' "${BASH_SOURCE[0]}" | sed 's/^#\{1\} \{0,1\}//'; exit 0 ;;
    *) echo "Unknown option: $1  (try --help)" >&2; exit 1 ;;
  esac
  shift
done

command -v mongosh >/dev/null 2>&1 || {
  echo "mongosh is not installed. Install it with:" >&2
  echo "  apt-get install -y mongodb-mongosh" >&2
  exit 1
}

# Prefer the app's own connection string so this keeps working if the DB moves
# (e.g. to Atlas). Strip surrounding quotes and any trailing whitespace/CR.
if [ -f "$ENV_FILE" ]; then
  MONGODB_URI="$(grep -E '^[[:space:]]*MONGODB_URI[[:space:]]*=' "$ENV_FILE" \
    | tail -1 | cut -d= -f2- | tr -d '\r' \
    | sed -e 's/^[[:space:]]*//' -e 's/[[:space:]]*$//' -e 's/^"\(.*\)"$/\1/' -e "s/^'\(.*\)'$/\1/")"
fi
MONGODB_URI="${MONGODB_URI:-mongodb://127.0.0.1:27017/zestora}"

if [ "$MODE" = "csv" ]; then
  [ -n "$CSV_OUT" ] || CSV_OUT="$ROOT/contacts-$(date +%Y%m%d-%H%M%S).csv"
  # Absolute path, so the scp hint printed at the end is actually usable.
  [ "${CSV_OUT#/}" != "$CSV_OUT" ] || CSV_OUT="$PWD/$CSV_OUT"
fi

export C_MODE="$MODE" C_LIMIT="$LIMIT" C_SEARCH="$SEARCH"

# Written to a temp file rather than inlined via $(cat <<'JS' ...) — bash 3.2
# (still the default on macOS) mis-parses heredocs inside command substitution.
TMP_JS="$(mktemp "${TMPDIR:-/tmp}/zestora-contacts.XXXXXX")"
trap 'rm -f "$TMP_JS"' EXIT INT TERM

cat > "$TMP_JS" <<'JS'
const mode   = process.env.C_MODE || 'list';
const limit  = parseInt(process.env.C_LIMIT || '0', 10);
const search = process.env.C_SEARCH || '';

// UAE has no DST, so a flat +4 is always correct.
const gst = (d) => d instanceof Date
  ? new Date(d.getTime() + 4 * 3600 * 1000).toISOString().slice(0, 16).replace('T', ' ')
  : '(no date)';

// The API runs name and company through express-validator's .escape(), so
// they are stored HTML-escaped ("Al Futtaim &amp; Sons"). Undo that for
// display. message and email are not escaped, so they are left alone.
const unescapeHtml = (v) => String(v === null || v === undefined ? '' : v)
  .replace(/&quot;/g, '"')
  .replace(/&#x27;/g, "'")
  .replace(/&#x2F;/g, '/')
  .replace(/&#x5C;/g, '\\')
  .replace(/&#96;/g, '`')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&amp;/g, '&');   // last, so "&amp;lt;" does not become "<"

let query = {};
if (search) {
  const rx = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
  query = { $or: [{ name: rx }, { email: rx }, { company: rx }, { message: rx }, { phone: rx }] };
}

const total = db.contacts.countDocuments(query);

if (mode === 'count') {
  print(String(total));
} else if (mode === 'csv') {
  const q = (v) => '"' + String(v === null || v === undefined ? '' : v).replace(/"/g, '""') + '"';
  print(['createdAt_GST', 'name', 'email', 'phone', 'company', 'message'].map(q).join(','));
  db.contacts.find(query).sort({ createdAt: -1 }).forEach((c) => {
    print([gst(c.createdAt), unescapeHtml(c.name), c.email, c.phone, unescapeHtml(c.company), c.message].map(q).join(','));
  });
} else {
  if (total === 0) {
    print(search ? `No submissions match "${search}".` : 'No submissions yet.');
  } else {
    const shown = limit > 0 ? Math.min(limit, total) : total;
    print('');
    print('  ZESTORA — Contact Submissions');
    print(`  ${total} total${search ? ` matching "${search}"` : ''}${shown < total ? `, showing ${shown} most recent` : ''}`);
    print('  Times in Dubai local time (GST)');
    print('');

    let cursor = db.contacts.find(query).sort({ createdAt: -1 });
    if (limit > 0) cursor = cursor.limit(limit);

    let i = 0;
    cursor.forEach((c) => {
      i++;
      print('  ' + '─'.repeat(66));
      print(`  #${i}   ${gst(c.createdAt)}`);
      print('');
      print(`    Name      ${unescapeHtml(c.name) || '-'}`);
      print(`    Email     ${c.email || '-'}`);
      print(`    Phone     ${c.phone || '-'}`);
      print(`    Company   ${unescapeHtml(c.company) || '-'}`);
      print('    Message');
      String(c.message || '-').split('\n').forEach((line) => {
        // wrap long lines at ~64 chars so the output stays readable
        let s = line;
        if (s.trim() === '') { print(''); return; }
        while (s.length > 64) {
          let cut = s.lastIndexOf(' ', 64);
          if (cut <= 0) cut = 64;
          print('      ' + s.slice(0, cut));
          s = s.slice(cut).replace(/^ +/, '');
        }
        if (s.length) print('      ' + s);
      });
      print('');
    });
    print('  ' + '─'.repeat(66));
    print(`  ${shown} of ${total} shown`);
    print('');
  }
}
JS

RESULT="$(mongosh "$MONGODB_URI" --quiet --file "$TMP_JS")" \
  || { echo "Could not query MongoDB at $MONGODB_URI" >&2; exit 1; }

if [ "$MODE" = "csv" ]; then
  printf '%s\n' "$RESULT" > "$CSV_OUT"
  # Ask the DB for the count — messages can contain newlines, so counting
  # lines in the CSV would overcount multi-line submissions.
  ROWS="$(C_MODE=count mongosh "$MONGODB_URI" --quiet --file "$TMP_JS" 2>/dev/null | tr -d '[:space:]')"
  [ -n "$ROWS" ] || ROWS="?"
  echo "Exported $ROWS submissions to: $CSV_OUT"
  echo "Copy it to your Mac with:"
  echo "  scp -P 2100 root@172.235.5.120:$CSV_OUT ~/Desktop/"
else
  printf '%s\n' "$RESULT"
fi
