# FIKRADO Security

A 3D animated website for FIKRADO Security — a non-profit company specializing in cybersecurity and technology courses. Built with **React 19 + Vite + React Three Fiber + Framer Motion**.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (repo name **must** be `FIKRADO-Security` for the base path to work, or update `base` in `vite.config.js` and `homepage` in `package.json`).
2. Go to **Settings → Pages** and set Source to **GitHub Actions**.
3. The included workflow (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.

The site will be live at `https://<your-username>.github.io/FIKRADO-Security/`.

## Project structure

- `src/components/Scene3D.jsx` — 3D shield, orbital rings, and particle scene
- `src/components/` — Navbar, Hero, Services, Books, Contact, Footer
- `public/logo.jpg` — company logo
