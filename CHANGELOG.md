# Changelog

All notable website changes are documented here.

## Version 2 — Pharma industry tab & FIA product page

**Release:** v2  
**Routes:** `/Industries/pharma`, `/Products/FIA`  
**Live:** [m19vision.vercel.app](https://m19vision.vercel.app)

### Pharma industry tab (`/Industries/pharma`)

- Dedicated **Pharma** industry landing (replaces generic brochure layout for this vertical).
- **Hero** with full-width laboratory background image, navy gradient overlay, and copy-only left column (no baked-in image text).
- **Hero actions:** Request a Quote and scroll-to-instruments (“Meet machines ↓”).
- **Applications** grid: sterile filtration validation, bioprocess membranes, PUPSIT & batch release.
- **Trusted partners** section: title + auto-sliding client logo ribbon (Sun Pharma, Cipla, Zydus, Reliance, Gennova, Zeiss, Suyash).
- **Instruments** section (`#instruments`): FIA / LPA / FIA machine blocks with product navigation.
- **Testimonials**, compliance copy, lab-testing CTA (external m19lab.com with UTM), and **industry FAQs** accordion.
- Theming: homepage-style **navy blue** palette via `pharmaIndustry.css` + shared `instrumentProduct.css`.

### FIA product page (`/Products/FIA`)

- Dedicated **Filter Integrity Analyzer (FIA-100)** product page (not the generic instrument template).
- **Marketing hero** using clean lab photography (`/pharma/fia-product-lab.png`) — HTML/CSS typography only; removed text-heavy marketing banner image.
- Hero content: eyebrow, title, tagline, bullet list, certification chips, demo CTA.
- **Stats strip:** years of trust, industries served, after-sales support.
- **Intro card:** subtitle, capability badges, specification grid.
- **Content sections:** Technology, Applications, Cutting Edge Design, Advanced Software, Key Features, High Performance Computing (from `fiaProductContent.js`).
- **Clients**, **testimonials**, **product FAQs**, sticky sidebar quote CTA, and bottom CTA band.
- Styles: `fiaProduct.css` (pink accent CTA, navy product theme).

### Routing & integration

- `IndustryPage` routes `Pharma` layout to `PharmaIndustryPage`.
- `InstrumentProductPage` routes `FIA` model to `FiaProductPage`.
- `App.jsx` passes `onProductNav` for cross-page instrument links.
- **LPA** remains on the generic product layout in v2 (custom LPA page planned for a later release).

### Assets (`m19-website/public/pharma/`)

- `fia-hero-lab.png` — pharma industry hero background  
- `fia-product-lab.png` — FIA product hero background  
- `clients/*.svg` — partner logos for the ribbon  

---

## Version 1 — Baseline

- React + Vite marketing site, industry brochures, generic product pages, Vercel deployment.
