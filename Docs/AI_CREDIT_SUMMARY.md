# AI Credit Summary

This document lists the Lions V5 AI source files that contain explicit AI attribution markers for V4 to V5 changes.

Use this file as a quick reference when identifying which changes were AI-assisted rather than manually authored.

Date created: 2026-03-25

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
| `Home.html` | Added viewport support, improved navigation semantics, replaced inline sidebar controls with accessible buttons, wrapped page content in `main`, improved hero image alt text, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 272-276; `changesV2.md` lines 46-58 |
| `about-us.html` | Added viewport support, updated navigation markup for accessibility, added semantic main content, and replaced inline script behavior with shared JavaScript. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 278-282; `changesV2.md` lines 62-73 |
| `contact-us.html` | Added viewport support, improved accessible navigation, replaced weak contact/form structure with semantic content, improved feedback form structure, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-149, 283-287; `changesV2.md` lines 77-93 |
| `meetings.html` | Added viewport support, updated navigation markup, introduced semantic `main` content, improved table accessibility with `caption`, `thead`, `tbody`, and `scope`, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 150-170, 288-292; `changesV2.md` lines 97-109 |
| `membership.html` | Added viewport support, updated accessible navigation, improved heading hierarchy, cleaned invalid structure, tightened membership content, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 171-190, 293-296; `changesV2.md` lines 113-126 |
| `sitemap.html` | Added viewport support, updated accessible navigation, improved semantic page structure, improved sitemap image description, and moved repeated script logic to `site.js`. V5.1: Nav HTML removed; nav is now injected by `site.js`. | `changesV1.md` lines 32-116, 297-300; `changesV2.md` lines 131-142 |
| `site.js` | Centralized shared sidebar behavior previously duplicated across HTML files, improved keyboard behavior, aligned responsive behavior with CSS, and added current-page navigation highlighting. V5.1: Added `injectNav()` to define and inject the shared nav HTML from one place, eliminating nav duplication across all HTML files. | `changesV1.md` lines 32-100; `changesV2.md` lines 171-172 |
| `style.css` | Improved sidebar stability, added accessible button and focus styling, removed layout-shift behavior, improved overlay feedback, and added table caption styling. V5.1: Added `:root` CSS custom properties (`--accent`, `--nav-height`) replacing all hardcoded values; fixed `nav a:active` from red to brand gold; added `nav a[aria-current="page"]` visual rule. | `changesV1.md` lines 191-216; `changesV2.md` lines 146-158 |
| `images.css` | Scoped broad image styling rules to safer contexts to reduce future side effects. V5.1: All unused utility classes commented out with instructions to uncomment when needed; active responsive defaults preserved. | `changesV1.md` lines 217-228; `changesV2.md` lines 161-165 |
| `.editorconfig` | **New file (V5.1).** Enforces consistent 4-space indentation, UTF-8, LF line endings, and trailing-whitespace trimming across `.html`, `.css`, `.js`, and `.md` files in all EditorConfig-aware editors. | — |

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