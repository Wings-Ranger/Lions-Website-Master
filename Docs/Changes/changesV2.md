# Lions V5 AI Line-by-Line Change Log (V2)

---

## Key

### Column Definitions

| Column | Meaning |
|---|---|
| `V4 line` | The line number in the **original** Lions v4 file where the change starts. |
| `V5 line` | The line number in the **updated** Lions V5 AI file where the change appears. |
| `Change` | A plain-English description of exactly what was edited on those lines. |
| `Why it is better` | The engineering or accessibility reason this edit improves the code. |

### Line Number Notation

| Notation | Meaning |
|---|---|
| `5` | A single line was changed. |
| `5-8` | A range of consecutive lines was changed (lines 5 through 8). |
| `removed` | These lines exist in v4 but were deleted entirely in V5 AI. |

### Change Action Words

| Word | Meaning |
|---|---|
| **Added** | A new line or attribute was inserted that did not exist before. |
| **Changed** | An existing line was altered (something was replaced or renamed). |
| **Replaced** | An old element or block was removed and swapped with a different one. |
| **Removed** | A line or block was deleted with no replacement. |
| **Promoted** | An element was changed to a higher-priority equivalent (e.g. h3 to h2). |
| **Converted** | The same intent was rewritten using a different, more appropriate element. |
| **Refactored** | Multiple related lines were restructured without changing their purpose. |
| **Wrapped** | Content was placed inside a new container for better structure. |
| **Tightened** | Wording or whitespace was made shorter and cleaner without losing meaning. |
| **Moved** | Code was relocated to a different file or position. |

---

## Purpose
This document gives a line-by-line style changelog for every HTML and CSS file upgraded from Lions v4 to Lions V5 AI.

---

## File: Home.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added `<meta name="viewport" content="width=device-width, initial-scale=1.0" />` | Fixes mobile rendering/scaling consistency across devices. |
| 10 | 11 | Changed `<nav>` to `<nav aria-label="Primary">` | Adds navigation landmark context for assistive technologies. |
| 11-12 | 12-15 | Replaced clickable list item and `href="#"` close control with `<button type="button" class="icon-button close-sidebar" ...>` | Correct semantics: button for actions, link for navigation. Better keyboard behavior. |
| 21 | 24 | Changed desktop menu `<ul>` to `<ul class="top-nav" aria-label="Desktop menu">` | Clear separation of desktop nav intent and improved readability/maintainability. |
| 29 | 32-34 | Replaced hamburger action link with semantic button (`open-sidebar`) | Prevents fake links and improves accessibility and event handling. |
| 32 | 37 | Replaced inline backdrop click handler with `id="nav-backdrop"` | Moves behavior out of HTML into shared JS for cleaner structure. |
| 33-35 | 39-44 | Wrapped hero content in `<main>` and added `<h1>` | Improves document structure, SEO, and accessibility landmarks. |
| 34 | 42 | Updated billboard image alt text from generic text to descriptive text | Better accessibility and context for screen readers. |
| 36-57 | 46 | Removed inline nav script and replaced with `<script src="site.js" defer></script>` | Centralized logic reduces duplication and future bug surface. |

---

## File: about-us.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added viewport meta tag | Mobile responsiveness foundation. |
| 12 | 11 | Changed `<nav>` to labeled primary nav | Better semantic landmarks. |
| 13-15 | 12-15 | Converted close control from onclick list/link to semantic button | Correct control semantics and better accessibility. |
| 23 | 24 | Added `class="top-nav"` and desktop ARIA label | Cleaner styling hooks and readable nav intent. |
| 31 | 32-34 | Converted open menu control to button with `open-sidebar` class | Better keyboard and assistive interaction. |
| 34 | 37 | Replaced `onclick` backdrop behavior with `id="nav-backdrop"` | Behavior now managed in one reusable JS file. |
| 35-56 | 39-45 | Replaced script-only body with meaningful page content in `<main>` + `<h1>` + paragraphs | Page now has actual semantic content and proper information architecture. |
| 35-56 | 47 | Removed duplicated inline JS and imported shared `site.js` | Maintains one nav behavior implementation across site. |

---

## File: contact-us.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added viewport meta tag | Proper mobile scaling and rendering. |
| 12-14 | 11-15 | Refactored nav and close menu control to semantic button pattern | Improves semantics and keyboard compatibility. |
| 23 | 24 | Added `top-nav` class and desktop nav ARIA label | Better structure and styling maintainability. |
| 31 | 32-34 | Replaced open menu action link with button | Avoids fake links and improves accessibility. |
| 34 | 37 | Replaced `onclick` backdrop with `id="nav-backdrop"` | Centralized behavior in JS. |
| 36-44 | 40-52 | Removed introductory wrapper form and replaced with semantic content + `<address>` block | Fixes invalid/awkward structure; improves readability and semantics. |
| 39-42 | 44-49 | Replaced loose `<li>` contact details with proper paragraph-based contact details in `<address>` | Valid HTML and clearer content hierarchy. |
| 45 | 53 | Changed heading level from `<h4>` to `<h2>` for feedback section | Correct heading hierarchy under page `<h1>`. |
| 46 | 54 | Removed `action="mailto:..."` and `enctype="text/plain"` from form | Avoids fragile client-mail behavior and reduces UX unpredictability. |
| 51 | 59 | Corrected option text `The Event was bad` to `The event was bad` | Copy consistency and professionalism. |
| 53-54 | 62-63 | Converted date prompt into `<label for="event-date">` pattern | Better form accessibility and screen-reader support. |
| 55-59 | 65-71 | Replaced yes/no checkbox pair with semantic `<fieldset>` + radio group | Enforces single-choice logic and cleaner submitted data. |
| 63-84 | 77 | Removed inline script and loaded `site.js` | Reduces duplication and keeps logic consistent. |

---

## File: meetings.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added viewport meta tag | Mobile rendering support. |
| 11-13 | 11-15 | Refactored nav to labeled semantic pattern with button close control | Better accessibility and consistency. |
| 22 | 37 | Moved backdrop out of nav and converted from inline onclick to ID-based hook | Cleaner HTML and reusable JS control pattern. |
| 23 | 24 | Added `top-nav` class/desktop label | Better structure and CSS targeting. |
| 31 | 32-34 | Replaced menu open link with semantic button | Correct behavior semantics for UI action. |
| 34 | 39-40 | Replaced plain div content wrapper with `<main class="editable">` and page `<h1>` | Better document semantics and screen-reader navigation. |
| 35-40 | 41-49 | Enhanced table header structure with `<caption>`, `<thead>`, and `scope="col"` | Improved table accessibility and readability. |
| 41-55 | 50-67 | Added `<tbody>` wrapper around data rows | Correct table semantics and clearer structure for future editing. |
| 60-81 | 70 | Removed inline script and loaded shared `site.js` | Eliminates duplicated JS and mismatch risks. |

---

## File: membership.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added viewport meta tag | Better mobile layout behavior. |
| 11-13 | 11-15 | Updated nav to semantic pattern with button close control | Accessibility and behavior consistency. |
| 22 | 24 | Added `top-nav` class and desktop ARIA label | Cleaner structure and maintainability. |
| 30 | 32-34 | Replaced menu open action link with semantic button | Correct element semantics and keyboard support. |
| 33 | 37 | Replaced backdrop `onclick` with ID hook | Shared JS handles behavior globally. |
| 34 | 39-40 | Added `<main class="editable">` and page `<h1>` | Proper semantic page structure. |
| 34,53 | 41,55 | Promoted content headings from `<h3>` to `<h2>` under `<h1>` | Correct heading hierarchy for assistive tools and SEO clarity. |
| 37-51 | 44-53 | Tightened long requirement wording for readability | Content is easier for users to scan and maintainers to edit. |
| 61 | removed | Removed unmatched closing `</div>` | Fixes invalid HTML structure. |
| 63-83 | 65 | Removed inline script and loaded `site.js` | Single behavior source across all pages. |
| 86-87 | removed | Removed duplicate trailing `</body></html>` closure | Fixes duplicate closing tags and validation issues. |

---

## File: sitemap.html

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 5 | 5 | Added viewport meta tag | Correct mobile scaling behavior. |
| 11-13 | 11-15 | Refactored nav and close control to semantic button pattern | Better accessibility and more valid interaction markup. |
| 23 | 24 | Added desktop nav class/ARIA labeling | Improves nav clarity and maintainability. |
| 31 | 32-34 | Replaced open action anchor with button | Prevents fake links and improves semantics. |
| 34 | 37 | Replaced inline backdrop click with ID hook | Centralized JS behavior. |
| 35-37 | 39-42 | Replaced generic div-only content with `<main>` + `<h1>` and self-closing image tag | Better semantic structure and cleaner markup. |
| 36 | 41 | Improved sitemap image alt text to `Site map showing page structure` | More descriptive and accessible for screen readers. |
| 40-61 | 44 | Removed inline script and imported shared `site.js` | Removes repeated code and keeps behavior unified. |

---

## File: style.css

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 12 | 12 | Changed `transition: padding-right 0.25s ease, overflow 0.25s ease;` to `transition: overflow 0.25s ease;` | Prevents layout jump side-effects tied to sidebar open state. |
| 16 | removed | Removed `padding-right: 250px` from `body.sidebar-open` | Stops full-page content shifting when menu opens. |
| 67+ | 67-80 | Added `.icon-button` base styles and focus-visible outline rules | Provides consistent button styling and visible keyboard focus states. |
| 111 | 124 | Changed `.sidebar li` height from `50px` to `auto` | Prevents clipped content and supports variable item heights. |
| 149+ | 164-167 | Added `.menu-button .icon-button` sizing/padding rule | Better click/tap target and consistent hamburger appearance. |
| 187+ | 206 | Added backdrop `background-color: rgba(0, 0, 0, 0.35);` | Improves visual separation and menu focus on mobile. |
| 213+ | 233-236 | Added `caption` style block for table captions | Improves readability of table headings/captions. |
| 214+ | 238-243 | Reordered table styling to include caption without losing `th,td` styles | Keeps table design consistent while improving semantics. |

---

## File: images.css

| V4 line | V5 line | Change | Why it is better |
|---:|---:|---|---|
| 4 | 4-6 | Replaced global `img` selector with scoped selectors: `main img`, `nav img`, `.billboard img` | Reduces unintended global side effects on future components and third-party embeds. |

---

## Cross-File Engineering Notes

### 1) Shared behavior move
- Inline scripts were removed from all HTML files and replaced by one shared file: `site.js`.
- This lowered duplication and synchronized behavior across pages.

### 2) Accessibility consistency
- All pages now use semantic menu action buttons.
- Nav landmarks and page headings are more consistent.
- Keyboard focus visibility is improved in CSS.

### 3) Validation and maintainability
- Invalid HTML (duplicate closings, unmatched wrappers, loose list usage, weak form semantics) was corrected.
- The new structure is easier to maintain if your team keeps expanding from Lions v4 patterns.

---

## Suggested Next Practice for a Lions v4 Developer

1. Pick one file (for example `membership.html`) and compare V4/V5 side-by-side line by line using this document.
2. Rebuild one page from scratch using the V5 structure: semantic nav + main + heading hierarchy + shared JS.
3. Validate with an HTML validator and test keyboard-only navigation.
4. Repeat for contact form patterns (`fieldset`, `legend`, radio groups).
