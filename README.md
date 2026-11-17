# sir-claude-website

Marketing landing page for [Sir Claude](https://www.npmjs.com/package/sir-claude) — a local control room for Claude Code projects, rendered as a medieval kingdom.

Static HTML/CSS/vanilla JS, no build step. Served via GitHub Pages from the `main` branch root.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — landing page
- `features.html` — feature tour
- `style.css`, `script.js` — shared styles/behavior
- `robots.txt`, `sitemap.xml`, `favicon.svg` — on-page SEO basics
