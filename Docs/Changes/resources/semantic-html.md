# Semantic HTML

**Used in:** changesV1 §3, §5 · changesV2 all pages

---

## What it is

Semantic HTML means using elements whose **names describe their meaning**, not just their appearance. `<main>`, `<nav>`, `<address>`, `<h1>`, `<button>`, and `<table>` all tell browsers, search engines, and screen readers what the content *is*, not just how it looks.

Non-semantic alternatives like `<div>`, `<span>`, and `<a href="#">` do the same visual job, but communicate nothing about purpose.

---

## When to use it

| Situation | Correct element |
|---|---|
| Main page content area | `<main>` |
| Site navigation links | `<nav aria-label="Primary">` |
| Page or section title | `<h1>` (one per page), then `<h2>`, `<h3>` |
| A button that triggers an action | `<button type="button">` |
| A link that navigates somewhere | `<a href="page.html">` |
| Contact details (address, phone, email) | `<address>` |
| Tabular data | `<table>` with `<caption>`, `<thead>`, `<tbody>` |
| Grouping related form inputs | `<fieldset>` + `<legend>` |

---

## How to implement it

### Replace action links with buttons
```html
<!-- Wrong: link that does nothing -->
<a href="#" onclick="openMenu()">☰</a>

<!-- Correct: button for an action -->
<button type="button" class="open-sidebar" aria-label="Open menu">☰</button>
```

### Wrap page content in `<main>`
```html
<body>
    <nav>...</nav>
    <main>
        <h1>Page Title</h1>
        <p>Content here.</p>
    </main>
</body>
```

### Use `<address>` for contact details
```html
<address>
    <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
    <p><strong>Phone:</strong> (03) 1234 5678</p>
</address>
```

### Heading hierarchy rule
- One `<h1>` per page — the page title.
- `<h2>` for major sections under the `<h1>`.
- `<h3>` for subsections under an `<h2>`.
- Never skip levels (e.g. `<h1>` → `<h3>` with no `<h2>`).

---

## Common mistakes

- Using `<div>` or `<span>` for everything — they have no semantic meaning.
- Using `<a href="#">` for buttons — creates fake links that mislead browsers and assistive tech.
- Multiple `<h1>` tags on one page — confuses document outline.
- Skipping heading levels (e.g. `<h1>` then `<h4>`) — breaks outline logic.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — HTML elements reference | https://developer.mozilla.org/en-US/docs/Web/HTML/Element |
| MDN — `<button>` vs `<a>` | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button |
| web.dev — Document structure | https://web.dev/learn/html/document-structure |
| W3C — Using semantic elements | https://www.w3.org/WAI/tutorials/page-structure/ |
| YouTube — Search "semantic HTML explained" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=semantic+HTML+explained+tutorial |

---

## Quick practice exercise

1. Take any `<div>`-only page and identify what each div is for.
2. Replace the wrapper div with `<main>`, navigation divs with `<nav>`, and action links with `<button>`.
3. Run the page through the W3C HTML Validator (https://validator.w3.org/) and fix all errors.
