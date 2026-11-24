# sir-claude-website

Marketing landing page for [Sir Claude](https://www.npmjs.com/package/sir-claude) — a local control room for Claude Code projects, rendered as a medieval kingdom.

Single-page static HTML/CSS site, no build step. Served via GitHub Pages from the `main` branch root.

The design is an illuminated manuscript: UnifrakturMaguntia for titles and EB Garamond for text (Google Fonts), vellum with red and blue rubrication and gold leaf. It is light only: there is no dark mode, and `color-scheme: light only` stops browsers from darkening it automatically. The page opens on a frontispiece: a generated panorama of Sir Claude above his kingdom, printed onto the vellum, with the blackletter title in its sky and the hook and buttons on a plinth below. The initial, the map of the realm and the coats of arms are inline SVG drawn for this page. The pictures, the Chronicle codex, picture frames, ribbons, wax seal and oak board are generated images (see below). Major headings are quickly penned in on scroll; body text and pictures are never hidden waiting for a scroll. The wax seal is pressed once and the codex turns a page. The animations are CSS plus a small inline script, everything is static under `prefers-reduced-motion`, and the page reads fine without JavaScript.

## Local preview

```
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Structure

- `index.html` — the full landing page (opening, kingdom flyover, map of the tour, feature tour, how-it-works, install, membership); styles, SVG art and script are inline
- `img/art/` — generated illustrations, each as AVIF with a WebP fallback
- `img/ui/` — generated frames, ribbons, seal and oak board, plus a hand-ruled line, a wear texture and an ink-reveal mask made with a script
- `img/`, `screenshots/`, `architecture.png` — product screenshots and diagram
- `robots.txt`, `sitemap.xml`, `favicon.svg` — on-page SEO basics

## Generated images

These files in `img/art/` were made with an image generator, prompted for period woodcut and manuscript styles, and then post-processed: cropped, reduced to a small palette (ink, vermilion, lapis, gold, parchment), with the paper levelled to white so `mix-blend-mode: multiply` prints them onto the vellum, and AVIF/WebP export. The scenes have no frame: a soft CSS vignette fades their edges into the page. They are exported at their native size (up to 1266px wide) plus an 800px-wide `-800` variant for small screens, and are lazy-loaded, except the Kingdom & world plate, which loads straight away. Screenshots also have an 800px-wide `-800.webp` variant.

| File | Where it is used |
| --- | --- |
| `frontispiece` | The opening panorama: Sir Claude on a ridge above his kingdom (`frontispiece-m` is the phone crop around the knight) |
| `frontispiece-loop.mp4` | The same panorama, moving: see “The moving frontispiece” below |
| `folio-L`, `folio-R` | The two Chronicle pages of the codex: see “The Chronicle codex” below |
| `ink-wear.png` | A tiling mask that wears the codex's running heads and captions like old ink (drawn by a script) |
| `hero-knight` | Sir Claude's miniature in the redrawn About dialog (Voice) |
| `emblem` | Logo in the header and the colophon |
| `town` | Kingdom & world |
| `street` | Projects & Chat |
| `spellbook` | Automation |
| `forge` | Terminal |
| `quests` | The Quest Board |
| `herald` | Voice: a herald and a crier behind the battlements (redrawn in v4 so nobody stands on the face of the wall) |
| `dovecote` | Telegram |
| `tourney` | Proving Grounds (redrawn in v4; the blue knight's lance was retouched by hand so it passes in front of his shield) |
| `scriptorium` | The Chronicle |
| `road` | Install charter |
| `roundtable` | Membership |
| `codex` | The leather-bound book (brass bosses and clasps, page stacks, ribbon) holding the Chronicle pages; white knocked out to transparency |
| `parchment` | Stained page texture on the codex's turning leaf |

These in `img/ui/` were generated the same way, with the white knocked out to transparency:

| File | Where it is used |
| --- | --- |
| `frame-gilt` | Carved, gilded frame round the product screenshots (the two Chronicle pages sit in the codex instead) |
| `frame-illum` | Illuminated border round the contents menu, the diagram and the charter |
| `ribbon-red`, `ribbon-blue` | Banners behind “The feature tour” and “Join the round table” (the words are real text) |
| `seal` | Wax seal whose cords run up under the bottom edge of the install charter |
| `oak` | Iron-bound board behind the install command |

`rule`, `worn` and `pen` in the same folder are drawn by a script (a hand-ruled line, paint wear, and the mask for the heading animation).

### The moving frontispiece

`img/art/frontispiece-loop.mp4` (H.264, 1280×720, 6 s at 24 fps, no audio, about 0.8 MB) is a cinemagraph of the frontispiece. A video generator animated the still, but every take also nudged the landscape and redrew the shield, so the loop is composited: the still frame everywhere, with the generated motion used only in the sky and round the banner (the banner and the tower pennants ripple and birds cross the sky). The first and last frames are the still itself, so it loops without a jump.

The still (`<picture>`, loaded eagerly with `fetchpriority="high"`) is always the base layer and the LCP image. The video sits on top in the same box with the same multiply blend and masks, has `preload="none"` and no `src` in the HTML, and is only fetched 400 ms after the page's `load` event. When it starts playing, the video is shown and the still is hidden in the same frame; frame 0 is the poster pixel for pixel, so the swap cannot be seen (a cross-fade would darken half-way, since both layers multiply onto the vellum). An IntersectionObserver pauses it while the hero is off screen. It is never loaded with `prefers-reduced-motion: reduce`, with Save-Data on, or without JavaScript. On phones the same file is cropped with `object-fit: cover; object-position: right`, which is exactly the `frontispiece-m` crop.

### The Chronicle codex

The two pages in the codex are the app's own Chronicle screenshots, cropped from the Chronicle view to their parchment page (no sidebar or top bar): the title page on the left and Chapter XXIV, The Roll Call, on the right. The uncropped `screenshots/chronicle.webp` and `screenshots/chronicle-chapter.webp` are kept and linked from the pages. `img/art/folio-L` and `folio-R` are baked from the codex's own page: the app's parchment is levelled to white and the ink multiplied onto the vellum, the vellum's grain and foxing run through the ink, and a gutter shadow, a soft highlight and a slight curl into the spine are added. Running heads, folio numbers and captions are live text, worn with the `ink-wear` mask.

In the Voice section the About dialog is not a screenshot: the app's dark About panel (`screenshots/about.webp`, kept in the repo) is redrawn in HTML and CSS in the page's ink, parchment and gold, with the same words, and its caption says so.

The screenshots in `screenshots/`, `img/sir-claude.webp` (still used for social cards and the JSON-LD), `favicon.svg` and the SVG art are not part of this set.
