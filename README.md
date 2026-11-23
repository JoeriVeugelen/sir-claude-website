# sir-claude-website

Marketing landing page for [Sir Claude](https://www.npmjs.com/package/sir-claude) — a local control room for Claude Code projects, rendered as a medieval kingdom.

Single-page static HTML/CSS site, no build step. Served via GitHub Pages from the `main` branch root.

The design is an illuminated manuscript: UnifrakturMaguntia for titles and EB Garamond for text (Google Fonts), vellum with red and blue rubrication and gold leaf. It is light only: there is no dark mode, and `color-scheme: light only` stops browsers from darkening it automatically. All illustrations (border, initial, map of the realm, coats of arms, seal) are inline SVG drawn for this page. The animations are CSS plus a small inline script, switch off under `prefers-reduced-motion`, and the page reads fine without JavaScript.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — the full landing page (opening, kingdom flyover, map of the tour, feature tour, how-it-works, install, membership); styles, SVG art and script are inline
- `img/`, `screenshots/`, `architecture.png` — product screenshots and diagram
- `robots.txt`, `sitemap.xml`, `favicon.svg` — on-page SEO basics
