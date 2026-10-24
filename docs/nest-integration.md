# Nest integration

Nest (`kestrel-collective/nest`) is a separate Astro site deployed at `NEXT_PUBLIC_NEST_URL`, which defaults to https://nest.kestrelcollective.org. This repo only links to it and reads one JSON feed.

## Feed contract

`GET {NEST_URL}/api/pages.json` returns `{ generated_at, release, pages[] }`. Each page has `handle`, `name`, `intro`, `cohort`, `stage` (1 to 7), `counts { external, shared, practice }` and `url`. The types live in `lib/nest.ts`.

## How the landing site uses it

- `getNestFeed()` fetches the feed on the server during prerender, with Next caching it for one hour. There is no client-side fetching.
- The `#nest` section shows the three pages with the highest `external + shared` counts, and the header button links to Nest.
- Any failure (unreachable host, non-2xx, invalid JSON, missing `pages` array) resolves to `null`. The section then renders its empty state and the button links to the Nest repository on GitHub. The build never fails because of Nest.

## Testing the live state locally

Serve a feed at `http://localhost:4010/api/pages.json` (for example `npx serve public -l 4010` with a temporary `public/api/pages.json`), then run `NEXT_PUBLIC_NEST_URL=http://localhost:4010 npm run dev`. `public/api/` is git-ignored so a fixture can never ship.

**Rule:** no Nest pages, data or fixtures may be committed to this repo. Nest content belongs in the Nest repo.
