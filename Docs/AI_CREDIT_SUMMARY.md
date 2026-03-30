# AI Credit Summary

This document lists the Lions V5 AI source files that contain explicit AI attribution markers for V4 to V5 changes.

Use this file as a quick reference when identifying which changes were AI-assisted rather than manually authored.

Date created: 2026-03-25
Last updated: 2026-03-30 (V6)

## What the markers look like

AI-attributed source regions are wrapped in comments such as:

- `AI V4->V5 change start`
- `AI V4->V5 change end`

Each marker also includes references to the matching entries in:

- `Changes/changesV1.md`
- `Changes/changesV2.md`

## AI-Attributed Files

| File | AI-attributed change summary | Related change log references |
|---|---|---|
| `Home.html` | Added viewport support, improved navigation semantics, replaced inline sidebar controls with accessible buttons, wrapped page content in `main`, improved hero image alt text, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. **V5.3:** Replaced bare heading with full hero section (heading, subtitle, CTA buttons); added upcoming events section with three placeholder event cards. | `changesV1.md` lines 32-116, 272-276; `changesV2.md` lines 46-58; `changesV5.md` Home.html section |
| `about-us.html` | Added viewport support, updated navigation markup for accessibility, added semantic main content, and replaced inline script behavior with shared JavaScript. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 278-282; `changesV2.md` lines 62-73 |
| `contact-us.html` | Added viewport support, improved accessible navigation, replaced weak contact/form structure with semantic content, improved feedback form structure, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. **V5.3:** Added OpenStreetMap iframe embed section with accessible `title` attribute, `loading="lazy"`, and a fallback link. | `changesV1.md` lines 32-149, 283-287; `changesV2.md` lines 77-93; `changesV5.md` contact-us.html section |
| `meetings.html` | Added viewport support, updated navigation markup, introduced semantic `main` content, improved table accessibility with `caption`, `thead`, `tbody`, and `scope`, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 150-170, 288-292; `changesV2.md` lines 97-109 |
| `membership.html` | Added viewport support, updated accessible navigation, improved heading hierarchy, cleaned invalid structure, tightened membership content, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 171-190, 293-296; `changesV2.md` lines 113-126 |
| `sitemap.html` | Added viewport support, updated accessible navigation, improved semantic page structure, improved sitemap image description, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 297-300; `changesV2.md` lines 131-142 |
| `site.js` | Centralized shared sidebar behavior previously duplicated across HTML files, improved keyboard behavior, aligned responsive behavior with CSS, and added current-page navigation highlighting. V5.1: Added `injectNav()` to define and inject the shared nav HTML from one place, eliminating nav duplication across all HTML files. **V5.3:** Added Gallery and Projects links to both nav lists; added Section 3 footer injection with newsletter submit handler; added Section 4 back-to-top button injection and scroll wiring. | `changesV1.md` lines 32-100; `changesV2.md` lines 171-172; `changesV5.md` site.js section |
| `style.css` | Improved sidebar stability, added accessible button and focus styling, removed layout-shift behavior, improved overlay feedback, and added table caption styling. V5.1: Added `:root` CSS custom properties (`--accent`, `--nav-height`) replacing all hardcoded values; fixed `nav a:active` from red to brand gold; added `nav a[aria-current="page"]` visual rule. **V5.3:** Added `.btn` component, `.hero` section, `.event-cards` grid, `.map-section`, `.gallery-grid`, `.project-cards`, `.site-footer`, `.back-to-top`, `.not-found`, `.sr-only` utility, and `@media print` rules. **V6:** Implemented sticky-footer behavior for short pages using flex layout on `body`, `main { flex: 1 0 auto; }`, and `.site-footer { margin-top: auto; }`. | `changesV1.md` lines 191-216; `changesV2.md` lines 146-158; `changesV5.md` style.css section; `changesV6.md` style.css section |
| `images.css` | Scoped broad image styling rules to safer contexts to reduce future side effects. V5.1: All unused utility classes commented out with instructions to uncomment when needed; active responsive defaults preserved. | `changesV1.md` lines 217-228; `changesV2.md` lines 161-165 |
| `.editorconfig` | **New file (V5.1).** Enforces consistent 4-space indentation, UTF-8, LF line endings, and trailing-whitespace trimming across `.html`, `.css`, `.js`, and `.md` files in all EditorConfig-aware editors. | — |
| `gallery.html` | **New file (V5.3).** Photo gallery page with a responsive CSS Grid layout, 9 placeholder `<figure>` items with `loading="lazy"` images and `<figcaption>` labels. Inherits shared nav and footer from `site.js`. | `changesV5.md` gallery.html section |
| `projects.html` | **New file (V5.3).** Community projects page with 6 project cards, each with a heading and a colour-coded status badge (Active / Upcoming / Completed). Inherits shared nav and footer from `site.js`. | `changesV5.md` projects.html section |
| `404.html` | **New file (V5.3).** Styled page-not-found error page with accessible `aria-labelledby` on `<main>` and a `.btn.btn-primary` return-home link. Inherits shared nav and footer from `site.js`. | `changesV5.md` 404.html section |

## Notes

- This summary reflects files that currently contain AI attribution markers in the source.
- The attribution comments were added to make V4 to V5 AI-assisted changes visible in the working files.
- Documentation files such as `Changes/changesV1.md` and `Changes/changesV2.md` describe the changes, but this summary is the quick index for attribution.

## Recommended Use

If you need to explain authorship clearly:

1. Start with this file.
2. Open the listed source file.
3. Find the `AI V4->V5 change start` and `AI V4->V5 change end` comments.
4. Use the referenced change-log lines for deeper evidence of what changed and why.