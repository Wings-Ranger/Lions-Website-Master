# Visually Hidden Content (`.sr-only`)

Last updated: 2026-03-30 20:53:11 +11:00

**Used in:** changesV5 style.css + site.js newsletter form label

---

## What it is

A visually hidden utility keeps text available to screen readers while hiding it from visual layout.

This project uses `.sr-only` for the newsletter email label so the form remains accessible even when using compact UI.

---

## When to use it

- Labels for compact form controls where visible text would break layout.
- Extra context for screen-reader users without adding visible clutter.

---

## How to implement it

### CSS utility

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Example usage

```html
<label for="newsletter-email" class="sr-only">Your email address</label>
<input type="email" id="newsletter-email" name="email" />
```

---

## Common mistakes

- Removing labels entirely instead of hiding them accessibly.
- Using `display: none` on label text (screen readers will not announce it).

---

## Learn more

| Resource | URL |
|---|---|
| WebAIM - Invisible content for screen readers | https://webaim.org/techniques/css/invisiblecontent/ |
| MDN - Accessibility fundamentals | https://developer.mozilla.org/en-US/docs/Learn/Accessibility |
| YouTube - Search "sr-only accessibility" | https://www.youtube.com/results?search_query=sr-only+accessibility |
