# sir-claude-website

Marketing landing page for [Sir Claude](https://www.npmjs.com/package/sir-claude) — a local control room for Claude Code projects, rendered as a medieval kingdom.

Single-page static HTML/CSS site (illuminated-manuscript theme: Cinzel + EB Garamond, parchment palette, auto dark mode), no build step. Served via GitHub Pages from the `main` branch root.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — the full landing page (hero, kingdom flyover, feature tour, how-it-works, install, membership)
- `img/`, `screenshots/`, `architecture.png` — product screenshots and diagram
- `robots.txt`, `sitemap.xml`, `favicon.svg` — on-page SEO basics
