# M19 · Material Intelligence

Marketing site and dashboards for M19 / PoreSense — React + Vite.

**Current release: Version 2** — Pharma industry tab and FIA-100 product page. See [CHANGELOG.md](./CHANGELOG.md) for full v2 notes.

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

## Version 2 highlights

| Page | Route |
|------|--------|
| Pharma industry tab | `/Industries/pharma` |
| FIA product page | `/Products/FIA` |

## Deploy

Configured for Vercel: build `m19-website`, output `m19-website/dist`. Production: [m19vision.vercel.app](https://m19vision.vercel.app).

Lab Testing nav links to [m19lab.com](https://m19lab.com/Home/LabTest) (external).

## Repository

https://github.com/ruchitbgamit-prog/m19-website
