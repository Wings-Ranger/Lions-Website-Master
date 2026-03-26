# CSS Scoping and Selector Specificity

**Used in:** changesV1 §10 · changesV2 images.css · changesV3 group 10

---

## What it is

CSS selectors range from broad (affects everything) to narrow (affects one specific element). A global selector like `img { ... }` applies styles to every image on every page — including ones you add later. A scoped selector like `main img { ... }` is safer because it only applies inside `<main>`.

Specificity is the score the browser calculates to decide which rule wins when two rules target the same element.

---

## When to use it

- Always prefer scoped selectors for base styles.
- Use global selectors only for true resets (`* { margin: 0 }`) or font declarations you want everywhere.
- Write utility classes rather than repeating the same property values inline.

---

## How to implement it

### Scoping selectors

```css
/* Bad: affects every img on the page, including nav logos, footers, etc. */
img {
    max-width: 100%;
    height: auto;
}

/* Good: only affects images inside <main> content or nav */
main img,
nav img,
.billboard img {
    max-width: 100%;
    height: auto;
    display: block;
}
```

### Specificity scoring (simplified)

| Selector type | Specificity score |
|---|---|
| Element (`img`, `p`) | 0,0,1 |
| Class (`.card`) | 0,1,0 |
| ID (`#header`) | 1,0,0 |
| Inline style | highest |

Higher score wins. When scores are equal, the **last rule in the file** wins.

### Practical specificity rules

```css
/* Low specificity — easy to override */
img { display: block; }

/* Medium specificity — scoped to context */
main img { display: block; }

/* Higher specificity — scoped to a class */
.billboard img { display: block; }
```

### Utility classes

Keep reusable single-purpose classes available but commented out until needed:

```css
/* Uncomment when you use class="img-circle" in HTML */
/*
.img-circle {
    border-radius: 50%;
    object-fit: cover;
}
*/
```

---

## Common mistakes

- Using `!important` to fix a specificity problem — this creates a harder problem to undo later.
- Writing all styles globally so any future component accidentally inherits them.
- Putting utilities in the stylesheet that are never used — adds CSS payload without benefit.
- Overusing IDs in selectors — they have very high specificity and are hard to override.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — CSS Specificity | https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity |
| MDN — CSS Selectors | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors |
| Specificity calculator (visual tool) | https://specificity.keegan.st/ |
| web.dev — CSS specificity | https://web.dev/learn/css/specificity |
| YouTube — Search "CSS specificity selectors explained" (coding2go, Kevin Powell) | https://www.youtube.com/results?search_query=CSS+specificity+selectors+explained |

---

## Quick practice exercise

1. Create a page with three images: one in `<nav>`, one in `<main>`, one in `<footer>`.
2. Write a rule that only makes the `<main>` image have a border.
3. Try targeting it with an element selector, a class, and a scoped selector. Use the browser DevTools to inspect which rule wins in each case.
