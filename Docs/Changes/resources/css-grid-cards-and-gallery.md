# CSS Grid for Card and Gallery Layouts

Last updated: 2026-03-30 20:48:57 +11:00

**Used in:** changesV5 style.css (`.event-cards`, `.gallery-grid`, `.project-cards`)

---

## What it is

CSS Grid creates responsive multi-column layouts without hardcoding separate classes for each breakpoint.

This project uses `repeat(..., minmax(...))` to auto-fit cards and gallery items from mobile to desktop.

---

## When to use it

- Card lists (events, projects, features).
- Image galleries.
- Any layout that should automatically flow from 1 to many columns.

---

## How to implement it

### Responsive card grid

```css
.event-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
}
```

### Responsive gallery grid

```css
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 16px;
}
```

### Why `auto-fit` vs `auto-fill`

- `auto-fit`: collapses unused tracks and stretches existing cards.
- `auto-fill`: keeps virtual tracks, useful for denser gallery behavior.

---

## Common mistakes

- Using fixed column counts (`repeat(3, 1fr)`) without mobile fallback.
- Forgetting `gap`, then compensating with inconsistent margins.
- Setting `minmax` too small, causing cramped card content.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - CSS Grid Layout | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout |
| MDN - `repeat()` | https://developer.mozilla.org/en-US/docs/Web/CSS/repeat |
| MDN - `minmax()` | https://developer.mozilla.org/en-US/docs/Web/CSS/minmax |
| YouTube - Search "CSS grid cards responsive" (Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=css+grid+cards+responsive |
