# Lions V5.1 AI Line-by-Line Change Log (V3)

---

## Key

### Column Definitions

| Column | Meaning |
|---|---|
| `#` | Sequential number for this change within the file. |
| `Area / Description of Change` | Which part of the file was affected and exactly what was done. |
| `Why it is better` | The engineering, accessibility, or maintainability reason this edit improves the code. |

### Change Action Words

| Word | Meaning |
|---|---|
| **Added** | A new line, block, or attribute was inserted that did not exist before. |
| **Changed** | An existing line was altered (something was replaced or renamed). |
| **Replaced** | An old element or block was removed and swapped with a different one. |
| **Removed** | A line or block was deleted with no replacement. |
| **Commented out** | Code was preserved but disabled inside a comment block for future use. |
| **Injected** | Content is now created and inserted at runtime via JavaScript rather than being written statically in HTML. |
| **Centralised** | Logic or markup moved from multiple locations into one shared source. |
| **Tokenised** | A hardcoded literal value was replaced with a named CSS custom property (variable). |

---

## Purpose

This document records every change made in the **V5.1** iteration of the Lions V5 AI site, building on the V5.0 baseline described in changesV2.md.
The V5.1 pass focused on four themes:

1. **Nav centralisation** — The repeated nav/backdrop HTML was removed from all six HTML files and is now injected once from `site.js`.
2. **CSS design tokens** — Hardcoded colour and height values in `style.css` were replaced with `:root` custom properties.
3. **Editor standards** — A new `.editorconfig` file enforces consistent formatting across all editors automatically.
4. **CSS housekeeping** — Unused utility classes in `images.css` were commented out to reduce noise without deleting potentially useful rules.

---

## Change Group 1 — site.js

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Added** `injectNav()` function at the top of the IIFE. The function builds the full nav HTML (`.sidebar` mobile menu, `.top-nav` desktop menu, and `#nav-backdrop` div) as a string array, joins it, and inserts it into `document.body` using `insertAdjacentHTML('afterbegin', ...)`. | Nav markup now lives in exactly one place. Changing a nav link, class, or ARIA attribute is a single-file edit that immediately applies to all pages. |
| 2 | **Added** section comments `// V5.1 change start` / `// V5.1 change end` around the new `injectNav()` block. | Makes the version boundary explicit so future maintainers can quickly find what V5.1 introduced. |
| 3 | **Added** section label "Section 2" to the existing sidebar wiring code that follows `injectNav()`. | Preserves readability as the IIFE grows; numbered sections act as a lightweight table of contents inside the file. |

---

## Change Group 2 — Home.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | Eliminates duplication; the nav is now injected by `site.js` at runtime, so there is no risk of the six HTML copies drifting out of sync. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | The backdrop is now part of the injected fragment in `site.js`; keeping it in HTML would create a duplicate element. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Prevents future editors from assuming the nav is missing and accidentally re-adding it by hand. |

---

## Change Group 3 — about-us.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | Same centralisation benefit as Home.html — single source of truth in `site.js`. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | Prevents a duplicate backdrop element alongside the injected one. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Documents the intentional omission clearly for any future editor. |

---

## Change Group 4 — contact-us.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | Keeps nav in one place; contact page can no longer silently differ from other pages. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | Avoids a second backdrop div conflicting with the injected one. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Signals intent and guards against accidental re-addition. |

---

## Change Group 5 — meetings.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | One fewer place to update when nav content or attributes change. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | The injected fragment from `site.js` already supplies the backdrop. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Keeps the HTML self-documenting so intent is never ambiguous. |

---

## Change Group 6 — membership.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | Centralised nav means membership page automatically inherits any future nav updates. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | Removes the now-redundant static backdrop that would duplicate the injected one. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Documents why the nav element appears absent from the static HTML. |

---

## Change Group 7 — sitemap.html

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Removed** the full `<nav>…</nav>` block (sidebar + desktop menu structure). | Consistent with all other pages; nav is maintained centrally. |
| 2 | **Removed** `<div class="backdrop" id="nav-backdrop">` | Eliminates the duplicate backdrop for the injected version. |
| 3 | **Added** comment `<!-- Nav and backdrop are injected by site.js -->` in place of the removed block. | Future editors will see immediately that this is intentional, not an oversight. |

---

## Change Group 8 — style.css

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Added** `:root` block at the top of the file (after the global reset comment) containing `--accent: #d2ac12` and `--nav-height: 64px`. | Establishes a single source of truth for the brand colour and nav height; changing either value now requires editing one line. |
| 2 | **Tokenised** all three occurrences of `#d2ac12` — replaced with `var(--accent)`. | Eliminates hardcoded hex repetition; a brand colour update propagates everywhere automatically. |
| 3 | **Tokenised** both occurrences of `64px` (nav height and `body` padding-top) — replaced with `var(--nav-height)`. | If the nav height ever changes, padding-top stays in sync without a separate manual edit. |
| 4 | **Changed** `nav a:active { color: red }` to `color: var(--accent)`. | Active link colour now matches the brand palette instead of using an eye-catching debug-style red. |
| 5 | **Added** rule `nav a[aria-current="page"] { color: var(--accent); font-weight: bold; }`. | Gives users a clear visual indicator of the current page in the nav using the brand colour, improving orientation and accessibility. |

---

## Change Group 9 — .editorconfig (new file)

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Added** new file `.editorconfig` at the repository root. | EditorConfig is automatically respected by VS Code, JetBrains, Sublime, and most other editors with no plugin required — formatting rules travel with the repo. |
| 2 | **Added** `indent_style = space` and `indent_size = 4` for all `.html`, `.css`, `.js`, and `.md` files. | Ensures consistent indentation across all contributors and editors; prevents mixed tab/space diffs. |
| 3 | **Added** `charset = utf-8`. | Guarantees all files are saved in UTF-8, preventing encoding issues with special characters. |
| 4 | **Added** `end_of_line = lf`. | Ensures Unix-style line endings on all platforms, avoiding CRLF/LF mixed diffs in Git. |
| 5 | **Added** `insert_final_newline = true`. | POSIX-compliant files end with a newline; prevents "no newline at end of file" warnings in diffs and linters. |
| 6 | **Added** `trim_trailing_whitespace = true`. | Removes invisible trailing spaces on save, keeping diffs clean and removing a common source of spurious line changes. |

---

## Change Group 10 — images.css

| # | Area / Description of Change | Why it is better |
|---|---|---|
| 1 | **Preserved** the active responsive defaults block (`main img, nav img, .billboard img`) unchanged. | Keeps the layout behaviour that the site currently relies on fully intact. |
| 2 | **Commented out** approximately 15 unused utility classes inside a single large comment block: `.img-responsive`, `.img-bordered`, `.img-rounded`, `.img-circle`, `.img-shadow`, `.img-shadow-lg`, `.img-opacity-50`, `.img-opacity-75`, `.img-hover-zoom`, `.img-hover-brightness`, `.img-small`, `.img-medium`, `.img-large`, `.img-grayscale`, `.img-sepia`, `.img-blur`, `.img-left`, `.img-right`, `.img-center`. | Eliminates dead CSS from parsed stylesheets (reducing selector evaluation overhead) while preserving the rules for easy reinstatement; avoids accidental class name collisions with future components. |
| 3 | **Added** comment guidance inside the comment block explaining how to uncomment individual classes when needed. | Lowers the barrier for future developers to reactivate specific utilities without hunting through git history. |

---

## Cross-File Engineering Notes

### 1) Nav centralisation (Change Groups 1–7)

- The nav HTML previously appeared identically in all six HTML files and had to be kept in sync manually.
- `injectNav()` in `site.js` is now the single source of truth; every page receives the same markup from one function call.
- Future nav changes (new link, changed class, ARIA update) require editing exactly one file and zero HTML pages.

### 2) CSS design tokens (Change Group 8)

- `:root` custom properties introduce a lightweight design-token layer with zero build tooling.
- The pattern is immediately extensible: future tokens (e.g. `--font-body`, `--border-radius`) follow the same convention.
- Contrast and brand audits are now single-line changes rather than grep-and-replace operations.

### 3) Editor standards (Change Group 9)

- `.editorconfig` is the lowest-friction way to enforce formatting: no CLI, no pre-commit hook, no CI step required.
- It is especially valuable for a multi-contributor club site where editors may use different IDEs.

### 4) CSS housekeeping (Change Group 10)

- Commented-out code is a deliberate trade-off: the rules are not lost, but they do not load unless deliberately enabled.
- The guidance comment makes the file self-explanatory for any future developer who inherits the project.

---

## Summary Table

| Change Group | File(s) | Theme |
|---:|---|---|
| 1 | `site.js` | Nav centralisation — inject nav at runtime |
| 2–7 | All 6 HTML files | Nav centralisation — remove static nav markup |
| 8 | `style.css` | CSS design tokens — `:root` variables + active-link rule |
| 9 | `.editorconfig` | Editor standards — consistent formatting |
| 10 | `images.css` | CSS housekeeping — comment out unused utility classes |
