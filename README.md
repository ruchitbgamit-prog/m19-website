# M19 · Material Intelligence

Marketing site and dashboards for M19 / PoreSense — React + Vite.

## Quick start

```bash
npm install --prefix m19-website
npm run dev
```

Open [http://localhost:5175](http://localhost:5175).

## Scripts (from repo root)

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (`m19-website`, port 5175) |
| `npm run build` | Production build → `m19-website/dist` |
| `npm run preview` | Preview production build |

## Project layout

- `m19-website/` — React app (pages, components, data, `public/` assets)
- `vercel.json` — Vercel build/output and SPA rewrites
- `_archive/` — Local legacy files (not in git)

## Deploy

Configured for Vercel: build `m19-website`, output `m19-website/dist`.

Lab Testing nav links to [m19lab.com](https://m19lab.com/Home/LabTest) (external).

## Repository

https://github.com/ruchitbgamit-prog/m19-website
