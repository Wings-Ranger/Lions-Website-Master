# Learning Resources Index

Last updated: 2026-03-30 20:44:23 +11:00

This folder contains one file per major technique used across V5 through V6.1 changes.
Each file covers: what the technique is, when to use it, how to implement it, and where to learn more.

---

## Topics

| File | Technique | First used in |
|---|---|---|
| [shared-javascript.md](shared-javascript.md) | Moving repeated JS into one shared file (DRY) | changesV1 §2 |
| [semantic-html.md](semantic-html.md) | Correct HTML elements for meaning (`main`, `nav`, `address`, `h1`) | changesV1 §3, §5 |
| [aria-and-accessibility.md](aria-and-accessibility.md) | ARIA labels, `aria-current`, screen-reader landmarks | changesV1 §3, changesV2 all files |
| [keyboard-accessibility.md](keyboard-accessibility.md) | Keyboard nav, Escape key, focus-visible, tab order | changesV1 §4 |
| [html-validation.md](html-validation.md) | Valid HTML: heading hierarchy, closing tags, nesting rules | changesV1 §8, changesV2 membership |
| [accessible-tables.md](accessible-tables.md) | `caption`, `thead`, `tbody`, `scope` for screen readers | changesV1 §7, changesV2 meetings |
| [accessible-forms.md](accessible-forms.md) | `fieldset`, `legend`, radio groups vs checkboxes | changesV1 §6, changesV2 contact |
| [css-scoping.md](css-scoping.md) | Scoped selectors vs global; avoiding side effects | changesV1 §10, changesV2 images.css |
| [responsive-design.md](responsive-design.md) | Viewport meta tag, media queries, matching CSS/JS breakpoints | changesV1 §4, §5 |
| [css-sidebar-overlay.md](css-sidebar-overlay.md) | Off-canvas sidebar, backdrop, `transform: translateX`, `pointer-events` | changesV1 §9, changesV2 style.css |
| [js-dom-injection.md](js-dom-injection.md) | `insertAdjacentHTML` — injecting shared HTML from JS | changesV3 group 1 |
| [css-custom-properties.md](css-custom-properties.md) | `:root` CSS variables (`--accent`, `var()`) — design tokens | changesV3 group 8 |
| [css-grid-cards-and-gallery.md](css-grid-cards-and-gallery.md) | Responsive card/gallery layouts with CSS Grid (`repeat`, `minmax`, `auto-fit`, `auto-fill`) | changesV5 style.css |
| [css-sticky-footer-flexbox.md](css-sticky-footer-flexbox.md) | Sticky footer layout with flexbox (`main` growth + footer auto margin) | changesV6 style.css |
| [fluid-typography-with-clamp.md](fluid-typography-with-clamp.md) | Fluid responsive typography with `clamp(min, preferred, max)` | changesV5 style.css |
| [editorconfig.md](editorconfig.md) | `.editorconfig` — enforcing consistent formatting across editors | changesV3 group 9 |
| [css-housekeeping.md](css-housekeeping.md) | Commenting out dead CSS; utility class libraries | changesV3 group 10 |
| [print-styles.md](print-styles.md) | Print-only CSS with `@media print` for cleaner paper output | changesV5 style.css |
| [js-script-loading-and-injection.md](js-script-loading-and-injection.md) | Linking `.js` files to HTML; `defer`/`async`; all four injection positions; XSS risks | V5.2 session notes |
| [aria-live-status-messages.md](aria-live-status-messages.md) | Accessible dynamic status messaging with `aria-live` regions | changesV5 site.js |
| [visually-hidden-sr-only.md](visually-hidden-sr-only.md) | Accessible visually-hidden utility text for screen-reader labels | changesV5 style.css + site.js |
| [embedded-maps-and-safe-external-links.md](embedded-maps-and-safe-external-links.md) | Embedded map iframes, lazy loading, and secure external-link attributes | changesV5 contact-us.html |
| [scroll-events-and-passive-listeners.md](scroll-events-and-passive-listeners.md) | Scroll-driven UI and passive listeners for smooth performance | changesV5 site.js |

---

## YouTube videos

Every file in this folder includes a **YouTube search link** at the bottom of the "Learn more" table. Each link searches for the topic and names the best channels to look for (coding2go, Kevin Powell, Web Dev Simplified, Traversy Media). Click the link in any file to go straight to relevant videos.

---

## How to use these files

1. Pick the topic matching the change you want to understand or redo.
2. Read the "When to use it" section to confirm it applies.
3. Follow the "How to implement it" steps as a refresher.
4. Use the "Learn more" links if you want deeper reading — MDN/W3C references and a YouTube search link are included in every file.
