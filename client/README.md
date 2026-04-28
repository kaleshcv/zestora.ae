# ZESTORA Client (React + Vite)

React 19 + Vite 8 frontend for the ZESTORA AI MERN app.

For setup, scripts, environment variables and deployment, see the root [README](../README.md) and [DEPLOYMENT.md](../DEPLOYMENT.md).

## Local development (standalone)

```bash
npm install
npm run dev      # Vite dev server
npm run build    # production build → dist/
npm run preview  # preview built app
npm run lint     # ESLint
```

## Notes

- The dev server runs on port **5174** (configured by the root `dev:client` script).
- API requests target the Express server at `http://localhost:5001` in development.
- In production, the built `dist/` is served by the Express server (see `server/server.js`).
