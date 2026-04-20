# ZESTORA — Deployment Plan

## Architecture
```
Client (React/Vite) → builds to static files → served by Express
Express API (port 5001) → MongoDB (contact form storage)
```

---

## Option A: VPS Deployment (DigitalOcean / AWS EC2 / Hetzner)

### 1. Server Setup
```bash
# SSH into your server
ssh root@your-server-ip

# Install Node.js 20+
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Install MongoDB
# Follow: https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/

# Install PM2 (process manager)
npm install -g pm2

# Install Nginx (reverse proxy)
apt install -y nginx
```

### 2. Deploy Code
```bash
# Clone your repo
git clone https://github.com/your-repo/zestora.git /var/www/zestora
cd /var/www/zestora/mern-app

# Install dependencies
cd server && npm install --production
cd ../client && npm install && npx vite build
```

### 3. Configure Environment
```bash
# Create production .env
cp server/.env.example server/.env
nano server/.env
```
```
MONGODB_URI=mongodb://127.0.0.1:27017/zestora
PORT=5001
NODE_ENV=production
CLIENT_URL=https://zestora.ae
```

### 4. Start with PM2
```bash
cd /var/www/zestora/mern-app/server
pm2 start server.js --name zestora-api
pm2 save
pm2 startup  # auto-start on reboot
```

### 5. Nginx Reverse Proxy
```nginx
# /etc/nginx/sites-available/zestora.ae
server {
    listen 80;
    server_name zestora.ae www.zestora.ae;

    location / {
        proxy_pass http://127.0.0.1:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```
```bash
ln -s /etc/nginx/sites-available/zestora.ae /etc/nginx/sites-enabled/
nginx -t && systemctl restart nginx
```

### 6. SSL Certificate (Let's Encrypt)
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d zestora.ae -d www.zestora.ae
# Auto-renews via systemd timer
```

### 7. DNS Setup
Point your domain `zestora.ae` to the server IP:
```
A    @       → your-server-ip
A    www     → your-server-ip
```

---

## Option B: Railway / Render (PaaS — Easiest)

### Railway
1. Push code to GitHub
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Add MongoDB plugin (or use MongoDB Atlas)
4. Set environment variables:
   - `MONGODB_URI` = your MongoDB Atlas URI
   - `PORT` = 5001
   - `NODE_ENV` = production
   - `CLIENT_URL` = https://zestora.ae
5. Set start command: `cd server && node server.js`
6. Set build command: `cd client && npm install && npx vite build`
7. Add custom domain `zestora.ae`

### Render
1. Create a **Web Service** → connect GitHub repo
2. Root directory: `mern-app/server`
3. Build command: `cd ../client && npm install && npx vite build`
4. Start command: `node server.js`
5. Set env vars (same as above)
6. Add MongoDB Atlas as external DB

---

## Option C: MongoDB Atlas (Recommended for DB)

Use MongoDB Atlas instead of local MongoDB for production:
1. Create free cluster at [mongodb.com/atlas](https://mongodb.com/atlas)
2. Create database user and whitelist your server IP
3. Get connection string and update `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/zestora?retryWrites=true&w=majority
```

---

## Post-Deployment Checklist

- [ ] `NODE_ENV=production` is set
- [ ] MongoDB Atlas or secured local MongoDB
- [ ] SSL certificate active (HTTPS)
- [ ] DNS propagated for zestora.ae
- [ ] Contact form tested end-to-end
- [ ] PM2 or container auto-restart enabled
- [ ] `.env` file not committed to git
- [ ] Rate limiting active on /api/contact
- [ ] Helmet security headers verified
- [ ] Gzip compression enabled
- [ ] Backup strategy for MongoDB (Atlas auto-backup or mongodump cron)

---

## Useful Commands

```bash
# Check server status
pm2 status

# View logs
pm2 logs zestora-api

# Restart after code update
cd /var/www/zestora/mern-app
git pull
cd client && npx vite build
pm2 restart zestora-api

# MongoDB backup
mongodump --uri="mongodb://127.0.0.1:27017/zestora" --out=/backups/$(date +%Y%m%d)

# Check contacts in DB
mongosh zestora --eval "db.contacts.find().sort({createdAt:-1}).limit(10)"
```
