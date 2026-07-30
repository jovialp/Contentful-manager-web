# Contentful Manager — Website

Marketing and download site for the **Contentful Manager** desktop app for macOS
and Windows.

Built with TanStack Start, React, TypeScript, and Tailwind CSS.

## Development

Requires Node.js 20+ (or Bun).

```sh
npm install
npm run dev
```

## Build

```sh
npm run build      # production build (output in .output/)
npm run preview    # preview the production build
```

## Configuration

Release and download values live in `src/lib/site-config.ts`:

- `VERSION` — app version shown on the site.
- `MAC_DOWNLOAD_URL` / `WINDOWS_DOWNLOAD_URL` — installer download links.
- `SITE_URL` — canonical site URL (used for SEO / Open Graph tags).
- `FAQS` — FAQ content (also emitted as FAQ structured data).

The macOS `.dmg` is hosted as a GitHub Release asset rather than committed to the
repo (installers exceed GitHub's 100 MB file limit). Update `MAC_DOWNLOAD_URL`
whenever you publish a new release.

## Project structure

- `src/routes/` — pages and the root document (`__root.tsx`).
- `src/components/` — UI components and page sections.
- `src/lib/` — shared config and helpers.
- `src/assets/` — logo and screenshots.
- `public/` — static assets (favicon, robots.txt).

## License

Not affiliated with Contentful GmbH. Contentful is a trademark of its owner.
