# ZESTORA AI — MERN Application

Full-stack web application for **ZESTORA AI**, built with MongoDB, Express, React (Vite) and Node.js. The Express server exposes a hardened contact API and serves the built React client in production.

---

## Tech Stack

**Frontend** — React 19, React Router 7, Vite 8, plain CSS
**Backend** — Node.js, Express 4, Mongoose 8 (MongoDB)
**Security / Ops** — Helmet, CORS, express-rate-limit, express-validator, compression, dotenv

---

## Project Structure

```
mern-app/
├── package.json          # Root scripts (dev/build/start, install-all)
├── DEPLOYMENT.md         # Production deployment guide
├── client/               # React + Vite frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/   # Navbar, Footer, PageHeader, ScrollToTop
│   │   ├── hooks/        # useScrollAnimation
│   │   ├── pages/        # Home, About, Services, Industries, Contact, Privacy, Terms
│   │   └── styles/       # styles.css
│   ├── index.html
│   └── vite.config.js
└── server/               # Express API
    ├── server.js         # App entry (security, rate-limit, static client)
    ├── models/Contact.js # Mongoose model
    └── routes/contact.js # POST /api/contact
```

---

## Prerequisites

- Node.js **20+**
- npm **10+**
- MongoDB **6+** (local) or a MongoDB Atlas connection string

---

## Getting Started

### 1. Install dependencies

From the `mern-app/` root:

```bash
npm run install-all
```

This installs both `server/` and `client/` dependencies.

### 2. Configure environment

Create `server/.env`:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/zestora
PORT=5001
NODE_ENV=development
CLIENT_URL=http://localhost:5174
```

### 3. Run in development

```bash
npm run dev
```

This runs the Express API and the Vite dev server concurrently:

- Client → http://localhost:5174
- API    → http://localhost:5001

You can also run them individually:

```bash
npm run dev:server
npm run dev:client
```

### 4. Build for production

```bash
npm run build       # builds client → client/dist
npm start           # starts Express in production (serves client/dist)
```

---

## API

| Method | Endpoint        | Description                          |
| ------ | --------------- | ------------------------------------ |
| GET    | `/api/health`   | Health check                         |
| POST   | `/api/contact`  | Submit a contact form (rate limited) |

`POST /api/contact` is rate-limited to 10 requests per 15 minutes per IP and validated server-side via `express-validator`.

---

## Security

- HTTP headers hardened with **Helmet** (with a strict CSP in production)
- **CORS** locked to `CLIENT_URL` in production
- **Global** + per-endpoint **rate limiting**
- JSON body size capped at **10kb**
- `trust proxy` enabled for correct client IPs behind a reverse proxy
- Secrets loaded from `.env` (never commit this file)

---

## Scripts

Root (`mern-app/package.json`):

| Script          | Description                                        |
| --------------- | -------------------------------------------------- |
| `install-all`   | Install deps for both client and server            |
| `dev`           | Run server + client concurrently                   |
| `dev:server`    | Run Express with nodemon                           |
| `dev:client`    | Run Vite dev server on port 5174                   |
| `build`         | Build the React client (`client/dist`)             |
| `start`         | Start Express in production mode                   |

---

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for VPS (DigitalOcean / EC2 / Hetzner with Nginx + PM2 + Let's Encrypt), Railway, Render, and MongoDB Atlas instructions.

---

## License

ISC
