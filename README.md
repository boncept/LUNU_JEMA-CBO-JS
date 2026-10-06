# Lunu Jema CBO website

React 18 + TypeScript + Vite. One page, no backend. Deploys to Vercel with zero configuration.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typechecks, then builds to dist/
```

## Deploy on Vercel

Import the repo in Vercel. The framework (Vite), build command and output folder are picked up
from `vercel.json`. Every commit to the main branch redeploys; every other branch gets a preview URL.

Optional: set `VITE_SITE_URL` (e.g. `https://lunujema.org`) so the social-share image uses your
own domain. Without it, the `*.vercel.app` production URL is used automatically.

## Where to change things

| To change…                      | Edit                          |
| ------------------------------- | ----------------------------- |
| Phone, email, M-PESA, links     | `src/data/site.ts`            |
| WhatsApp number                 | `src/lib/whatsapp.ts`         |
| Pillars, work areas, services   | `src/data/content.ts`         |
| Photos used on the page         | `src/data/images.ts`          |
| Products and categories         | `src/data/products.ts`        |
| Colours, fonts, spacing         | top of `src/styles/base.css`  |
| One section's layout            | `src/components/<Section>.tsx` + `src/styles/<section>.css` |

### Add a product
1. Add an entry to `PRODUCTS` in `src/data/products.ts`.
2. Save its photo as `public/products/<id>.webp` (800 × 600).
Categories with no products are hidden from the filter automatically.

### Swap a photo
Hero, work cards, nature banner and the health photo are hosted on Pexels. To use your own, drop
the file in `public/images/` and point the matching key in `src/data/images.ts` at `/images/<file>`.

### Add a section
Create the component, add it to `src/App.tsx`, and give its container the `reveal` class for the
scroll animation. Section numbers (01, 02…) are generated automatically.
