# CSS Housekeeping — Commenting Out Unused Code

**Used in:** changesV3 group 10

---

## What it is

Over time stylesheets accumulate classes that were written in anticipation of future use but are never referenced in any HTML. These "dead" CSS rules load on every page, add noise to the file, and can accidentally clash with class names used later.

Commenting them out (rather than deleting them) keeps the rules preserved and easy to activate when needed, while removing them from active parsing.

---

## When to use it

- When a stylesheet contains utility classes not referenced in any HTML file.
- When you are auditing a codebase and want to reduce active CSS without losing work.
- When inheriting a project and unsure whether old classes are used — comment out first, verify, then delete later.

---

## How to implement it

### Comment out a block of unused rules

```css
/*
 * UNUSED UTILITY CLASSES — commented out V5.1
 * Uncomment a class below when you add it to HTML.

.img-circle {
    border-radius: 50%;
    object-fit: cover;
}

.img-shadow {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.img-grayscale {
    filter: grayscale(100%);
}

 * END UNUSED UTILITY CLASSES
 */
```

The comment wraps the entire block. The preserved code is visible but inactive.

### How to identify unused CSS

**Manual check:** search every HTML file for each class name.

**Browser DevTools:** In Chrome/Edge:
1. Open DevTools (F12).
2. Go to the **Coverage** tab (Ctrl+Shift+P → "Show Coverage").
3. Click the record button, load the page, then stop.
4. CSS lines highlighted in red are never used during page load.

**VS Code search:** Use Ctrl+Shift+F to search the entire workspace for the class name (e.g. `img-circle`). If it only appears in the CSS file and nowhere in HTML, it is unused.

### When to fully delete vs comment out

| Situation | Action |
|---|---|
| You are certain the class will never be used | Delete it |
| You are unsure — the class might be added to HTML later | Comment it out with a note |
| The class is part of a utility library you built | Keep it commented with instructions |

---

## Common mistakes

- Leaving hundreds of unused rules active — they add to the browser's style calculation work.
- Deleting rules without checking all HTML files first — you might break a page that uses a class you didn't find.
- Commenting out rules that ARE currently used — always verify with a search first.
- Nesting block comments inside block comments — CSS does not support nested `/* */` comments. The inner `*/` closes the outer comment prematurely.

```css
/* This is fine */

/*
    /* This BREAKS the outer comment — avoid */
*/
```

---

## Learn more

| Resource | URL |
|---|---|
| Chrome DevTools — CSS Coverage | https://developer.chrome.com/docs/devtools/coverage |
| MDN — CSS comments | https://developer.mozilla.org/en-US/docs/Web/CSS/Comments |
| web.dev — Remove unused CSS | https://web.dev/articles/unused-css-rules |
| YouTube — Search "clean up CSS remove unused styles" (coding2go, Kevin Powell) | https://www.youtube.com/results?search_query=clean+up+CSS+remove+unused+styles |

---

## Quick practice exercise

1. Add 10 CSS utility classes to a stylesheet — only use 3 of them in HTML.
2. Use the browser Coverage tool to identify the 7 unused classes.
3. Comment them out using a single block comment with a note explaining they are available to uncomment.
4. Reload the page and confirm it looks identical (the 3 active classes are unchanged).
