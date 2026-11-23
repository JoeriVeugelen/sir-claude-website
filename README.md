# sir-claude-website

Marketing landing page for [Sir Claude](https://www.npmjs.com/package/sir-claude) — a local control room for Claude Code projects, rendered as a medieval kingdom.

Single-page static HTML/CSS site, no build step. Served via GitHub Pages from the `main` branch root.

The design is an illuminated manuscript: UnifrakturMaguntia for titles and EB Garamond for text (Google Fonts), vellum with red and blue rubrication and gold leaf. It is light only: there is no dark mode, and `color-scheme: light only` stops browsers from darkening it automatically. The initial, the map of the realm, the coats of arms and the hero's frame (ruled in ink, gilded, lapis spandrels with penwork, ivy margins) are inline SVG drawn for this page. The pictures, picture frames, ribbons, wax seal and oak board are generated images (see below). Headings are penned in on scroll and other text soaks into the vellum; all of it is static under `prefers-reduced-motion` or without JavaScript. The animations are CSS plus a small inline script, switch off under `prefers-reduced-motion`, and the page reads fine without JavaScript.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — the full landing page (opening, kingdom flyover, map of the tour, feature tour, how-it-works, install, membership); styles, SVG art and script are inline
- `img/art/` — generated illustrations, each as AVIF with a WebP fallback
- `img/ui/` — generated frames, ribbons, seal and oak board, plus a hand-ruled line, a wear texture and two ink-reveal masks made with a script
- `img/`, `screenshots/`, `architecture.png` — product screenshots and diagram
- `robots.txt`, `sitemap.xml`, `favicon.svg` — on-page SEO basics

## Generated images

These files in `img/art/` were made with an image generator, prompted for period woodcut and manuscript styles, and then post-processed: cropped, reduced to a small palette (ink, vermilion, lapis, gold, parchment), with the paper levelled to white so `mix-blend-mode: multiply` prints them onto the vellum, a ragged deckle edge, and AVIF/WebP export.

| File | Where it is used |
| --- | --- |
| `hero-knight` | Opening miniature in the arch |
| `emblem` | Logo in the header and the colophon |
| `town` | Kingdom & world |
| `street` | Projects & Chat |
| `spellbook` | Automation |
| `forge` | Terminal |
| `quests` | The Quest Board |
| `herald` | Voice & Telegram |
| `dovecote` | Telegram |
| `tourney` | Proving Grounds |
| `scriptorium` | The Chronicle |
| `road` | Install charter |
| `roundtable` | Membership |

These in `img/ui/` were generated the same way, with the white knocked out to transparency:

| File | Where it is used |
| --- | --- |
| `frame-gilt` | Carved, gilded frame round every screenshot |
| `frame-illum` | Illuminated border round the scenes, the contents menu, the diagram and the charter |
| `ribbon-red`, `ribbon-blue` | Banners behind “The feature tour” and “Join the round table” (the words are real text) |
| `seal` | Wax seal on cords under the install charter |
| `oak` | Iron-bound board behind the install command |

`rule`, `worn`, `pen` and `soak` in the same folder are drawn by a script (a hand-ruled line, paint wear, and the masks for the writing animation).

The screenshots in `screenshots/`, `img/sir-claude.webp` (still used for social cards and the JSON-LD), `favicon.svg` and the SVG art are not part of this set.
