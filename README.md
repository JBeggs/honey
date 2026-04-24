# Honey & Related Products (Template 2)

Next.js 16 storefront for **PLAN-02-HONEY.md**. Forked from `wire-and-bead` with Honey themes (Farm-to-Jar / Premium Natural / Bee Edu), port **3003** (3002 is used by `plant-sanctuary` in this monorepo), default company slug `honey`.

## Quick start

```bash
cd honey
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_API_URL and NEXT_PUBLIC_COMPANY_SLUG as needed
npm run dev
```

Open [http://localhost:3003](http://localhost:3003).

## Backend

Same django-crm API as other templates. Provision a company (slug `honey` or your choice) via `/admin/setup`. First-party catalog products use blank `supplier_slug`; checkout uses `isCourierGuyCartItem` — see PLAN-02 pitfall section.

## Themes

`data-theme`: `farm-to-jar` (default), `premium-natural`, `bee-edu`. Cookie / localStorage key: `site_theme`.

## Scripts

- `npm run dev` — dev server (port 3003)
- `npm run build` — production build
- `npm test` — Vitest
