# Sticky Footer with Flexbox

Last updated: 2026-03-30 20:48:57 +11:00

**Used in:** changesV6 style.css

---

## What it is

A sticky footer layout keeps the footer at the bottom of the viewport on short pages, while still placing it below content on long pages.

This project implements it with flexbox instead of `position: fixed`, so the footer does not overlap page content.

---

## When to use it

- Sites with pages of mixed content length.
- Any layout where short pages look unfinished with empty space below the footer.
- Cases where a fixed footer would block content.

---

## How to implement it

### Core pattern

```css
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

main {
    flex: 1 0 auto;
}

.site-footer {
    margin-top: auto;
}
```

### Why this works

- `body` becomes a vertical flex container.
- `main` expands to consume spare vertical space.
- `margin-top: auto` pushes the footer to the bottom when there is extra room.

---

## Common mistakes

- Using `position: fixed` for a footer that should participate in normal document flow.
- Forgetting `min-height: 100vh` on the container.
- Applying `margin-top: auto` without a flex parent.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - Basic concepts of flexbox | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_Concepts_of_Flexbox |
| MDN - `margin` | https://developer.mozilla.org/en-US/docs/Web/CSS/margin |
| YouTube - Search "sticky footer flexbox" (Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=sticky+footer+flexbox |
