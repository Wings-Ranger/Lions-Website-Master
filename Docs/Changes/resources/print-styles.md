# Print Styles (`@media print`)

Last updated: 2026-03-30 20:53:11 +11:00

**Used in:** changesV5 style.css

---

## What it is

Print styles are CSS rules that apply only when a page is printed (or in print preview).

This project uses `@media print` to hide interactive/decorative UI and keep table output readable on paper.

---

## When to use it

- Pages that include schedules, tables, or contact details users may print.
- Sites with nav overlays, floating buttons, and other UI that should not appear on paper.

---

## How to implement it

```css
@media print {
  nav,
  .sidebar,
  .backdrop,
  .back-to-top,
  .site-footer {
    display: none !important;
  }

  body {
    padding-top: 0;
    background: #fff;
    color: #000;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid #000;
  }
}
```

---

## Common mistakes

- Printing nav/menu overlays and floating buttons.
- Leaving dark backgrounds that waste ink.
- Not forcing visible table borders for print.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - Printing | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Printing |
| MDN - `@media` | https://developer.mozilla.org/en-US/docs/Web/CSS/@media |
| YouTube - Search "CSS print styles" (Kevin Powell, Traversy Media) | https://www.youtube.com/results?search_query=css+print+styles |
