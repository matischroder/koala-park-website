# Koala Park Laundromat — website concept

A mobile-first redesign for [Koala Park Laundromat](https://www.koalaparklaundromat.com/), 17 Ikkina Road, Burleigh Heads (Gold Coast).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Content

Everything comes from the laundromat's current website — nothing is invented:

- `src/content/pricing.ts` — washers, capacities and prices; dryers; extras; Julie's Drop and Go price list, locker steps and service area
- `src/content/site.ts` — address, phones, hours (5.30am–10pm, 365 days; last wash 9.30pm), social links
- `src/content/extras.ts` — facilities, customer reviews (quoted exactly) and "things to do while you wait"
- `public/photos/` — the laundromat's own photos

## Features

- **Load planner** — pick baskets, temperature and card/cash, get the cheapest mix of washers and the total
- **24-minute wash timer** with the laundromat's own list of things to do nearby (vibrates / notifies when done)
- Machine price cards, dryer rates, Drop and Go price list with text-Julie and call buttons
- Live "open now" status in Gold Coast time, last-wash reminder
- Mobile action bar (Call · Prices · Directions), LaundryOrDryCleaner structured data, share image
- `site.isPreview = true` keeps it out of search engines while it's a concept

## Deploy on Vercel

New Project → import **`matischroder/koala-park-website`** → leave Root Directory empty → Deploy.

(From the `helensvalelandscapesupplies` monorepo instead: Root Directory **`sites/koala-park`**.)
