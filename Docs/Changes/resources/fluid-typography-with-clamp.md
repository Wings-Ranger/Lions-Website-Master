# Fluid Typography with `clamp()`

Last updated: 2026-03-30 20:53:11 +11:00

**Used in:** changesV5 style.css (`.hero h1`)

---

## What it is

`clamp(min, preferred, max)` creates fluid font sizes that scale with viewport width but stay within safe bounds.

This project uses it for the hero heading so text stays readable across mobile and desktop.

---

## When to use it

- Hero headings and prominent titles.
- Components that should scale smoothly without many breakpoint rules.

---

## How to implement it

```css
.hero h1 {
  font-size: clamp(1.8rem, 5vw, 2.8rem);
}
```

Interpretation:
- Minimum size: `1.8rem`
- Preferred fluid size: `5vw`
- Maximum size: `2.8rem`

---

## Common mistakes

- Using `vw` without clamp bounds, causing huge or tiny text.
- Setting min/max too close and losing fluid behavior.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - `clamp()` | https://developer.mozilla.org/en-US/docs/Web/CSS/clamp |
| CSS-Tricks - Fluid type with clamp | https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/ |
| YouTube - Search "css clamp typography" (Kevin Powell) | https://www.youtube.com/results?search_query=css+clamp+typography |
