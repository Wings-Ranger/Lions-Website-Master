# Learning Resources Index

This folder contains one file per major technique used across all V5 and V5.1 changes.
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
| [editorconfig.md](editorconfig.md) | `.editorconfig` — enforcing consistent formatting across editors | changesV3 group 9 |
| [css-housekeeping.md](css-housekeeping.md) | Commenting out dead CSS; utility class libraries | changesV3 group 10 |
| [js-script-loading-and-injection.md](js-script-loading-and-injection.md) | Linking `.js` files to HTML; `defer`/`async`; all four injection positions; XSS risks | V5.2 session notes |

---

## YouTube videos

Every file in this folder includes a **YouTube search link** at the bottom of the "Learn more" table. Each link searches for the topic and names the best channels to look for (coding2go, Kevin Powell, Web Dev Simplified, Traversy Media). Click the link in any file to go straight to relevant videos.

---

## How to use these files

1. Pick the topic matching the change you want to understand or redo.
2. Read the "When to use it" section to confirm it applies.
3. Follow the "How to implement it" steps as a refresher.
4. Use the "Learn more" links if you want deeper reading — MDN/W3C references and a YouTube search link are included in every file.
