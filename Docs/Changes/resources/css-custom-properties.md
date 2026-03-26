# CSS Custom Properties (Design Tokens)

**Used in:** changesV3 group 8

---

## What it is

CSS custom properties (also called CSS variables or design tokens) let you store a value once in one place and reference it everywhere. Defined in `:root`, they are available to every element on every page.

Before: the gold colour `#d2ac12` was written three times in `style.css`. Changing the brand colour required finding and replacing every occurrence.
After: it is defined once as `--accent: #d2ac12` and referenced as `var(--accent)` wherever it's needed.

---

## When to use it

- Any value that is used in more than one CSS rule: brand colours, spacing units, font sizes, breakpoints, nav height.
- Any value likely to change (rebrand, layout adjustment).
- When you want a "settings" section at the top of a stylesheet.

---

## How to implement it

### Define variables in `:root`

```css
:root {
    --accent: #d2ac12;       /* brand gold */
    --nav-height: 64px;
    --text-colour: #222;
    --border-radius: 6px;
}
```

`:root` is the highest-level element (equivalent to `<html>`) — variables defined here are available everywhere.

### Use variables with `var()`

```css
/* Instead of this: */
nav {
    height: 64px;
}
body {
    padding-top: 64px;
}
nav a:hover {
    color: #d2ac12;
}

/* Write this: */
nav {
    height: var(--nav-height);
}
body {
    padding-top: var(--nav-height);
}
nav a:hover {
    color: var(--accent);
}
```

Now if the nav height changes to 72px, you update one line in `:root`. Both `nav` and `body` automatically pick up the new value.

### Optional fallback value

```css
color: var(--accent, #d2ac12);
```

The second argument is a fallback used if `--accent` is undefined. Useful for component libraries.

### Naming conventions

Use `--` followed by a descriptive name in kebab-case:

```css
:root {
    --colour-brand:    #d2ac12;
    --colour-text:     #222222;
    --spacing-sm:      8px;
    --spacing-md:      16px;
    --font-size-base:  16px;
}
```

---

## Common mistakes

- Defining variables inside a specific selector (e.g. `nav { --accent: ... }`) — they'll only be available inside that element.
- Misspelling the variable name — `var(--acent)` returns an empty value silently. No error is shown.
- Using CSS variables for values that change with JavaScript — you can update them dynamically:
  ```js
  document.documentElement.style.setProperty('--accent', '#ff0000');
  ```
  This is valid and useful, but be intentional about when you do it.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — CSS custom properties | https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties |
| web.dev — CSS variables | https://web.dev/learn/css/color#custom_properties |
| MDN — `var()` | https://developer.mozilla.org/en-US/docs/Web/CSS/var |
| YouTube — Search "CSS custom properties variables" (coding2go, Kevin Powell) | https://www.youtube.com/results?search_query=CSS+custom+properties+variables+tutorial |

---

## Quick practice exercise

1. Take any stylesheet that repeats a colour more than once.
2. Add a `:root` block and define the colour as `--brand-colour`.
3. Replace all hardcoded occurrences with `var(--brand-colour)`.
4. Change the value in `:root` to a completely different colour and verify the whole site changes instantly.
