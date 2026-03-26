# ARIA and Accessibility

**Used in:** changesV1 §3 · changesV2 all HTML files · changesV3 group 8

---

## What it is

ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that give assistive technologies (screen readers, switch devices) extra context about what elements are and what they are doing.

Key principle: **use native semantic HTML first** — ARIA should only add context that native elements cannot provide on their own.

---

## When to use it

| Use case | ARIA attribute |
|---|---|
| Name a navigation region | `aria-label="Primary"` on `<nav>` |
| Name a menu for screen readers | `aria-label="Mobile menu"` on `<ul>` |
| Name an icon-only button | `aria-label="Open menu"` on `<button>` |
| Mark the current page in nav | `aria-current="page"` on the active `<a>` |
| Hide decorative elements | `aria-hidden="true"` on backdrop `<div>` |

---

## How to implement it

### Label a navigation region
```html
<nav aria-label="Primary">
    <!-- nav links here -->
</nav>
```
Without `aria-label`, a page with multiple `<nav>` elements announces them all as "navigation" — the label distinguishes them.

### Label icon-only buttons
```html
<button type="button" aria-label="Open menu">☰</button>
<button type="button" aria-label="Close menu">✕</button>
```
The icon character (☰, ✕) has no spoken meaning. `aria-label` replaces it with a spoken description.

### Mark the active nav link with `aria-current`
Set this in JavaScript when the page loads:
```js
var currentPage = window.location.pathname.split('/').pop() || 'Home.html';
document.querySelectorAll('nav a[href]').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
        link.setAttribute('aria-current', 'page');
    }
});
```
Then style it in CSS:
```css
nav a[aria-current="page"] {
    color: var(--accent);
    font-weight: bold;
}
```

### Hide decorative/backdrop elements
```html
<div class="backdrop" id="nav-backdrop" aria-hidden="true"></div>
```
`aria-hidden="true"` removes the element from the accessibility tree entirely — screen readers skip it.

---

## Common mistakes

- Adding `aria-label` to every element — use it only where the native name is insufficient.
- Using `role="button"` on a `<div>` instead of just using a `<button>` element.
- Setting `aria-hidden="true"` on an element that contains focusable children — those children become unreachable by keyboard.
- Forgetting to add a CSS rule for `aria-current="page"` — the JS sets it but nothing visually changes.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — ARIA | https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA |
| MDN — `aria-label` | https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label |
| MDN — `aria-current` | https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current |
| W3C WAI — ARIA practices | https://www.w3.org/WAI/ARIA/apg/ |
| A11Y Project checklist | https://www.a11yproject.com/checklist/ |
| YouTube — Search "ARIA labels accessibility HTML" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=aria+labels+accessibility+html+tutorial |

---

## Quick practice exercise

1. Build a three-page site with a shared nav.
2. Add `aria-label="Primary"` to the `<nav>`.
3. Write a JS snippet that reads the current filename and sets `aria-current="page"` on the matching link.
4. Add a CSS rule that turns that link gold and bold.
5. Open a screen reader (Windows Narrator or NVDA) and confirm it announces the active link correctly.
