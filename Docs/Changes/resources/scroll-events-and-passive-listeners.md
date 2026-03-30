# Scroll Events and Passive Listeners

Last updated: 2026-03-30 20:48:57 +11:00

**Used in:** changesV5 site.js (`back-to-top` behavior)

---

## What it is

Scroll interactions often run many times per second. A passive event listener tells the browser the handler will not call `preventDefault()`, so scrolling can stay smooth.

This project uses a passive scroll listener to show/hide the back-to-top button.

---

## When to use it

- Showing or hiding UI based on scroll position.
- Sticky UI helpers (back-to-top, section progress indicators).
- Any scroll handler that only reads position and updates state.

---

## How to implement it

### Scroll listener with passive option

```js
window.addEventListener('scroll', function () {
    backTopBtn.hidden = window.scrollY < 300;
}, { passive: true });
```

### Button action

```js
backTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
```

---

## Common mistakes

- Heavy DOM work in scroll handlers (causes jank).
- Missing `{ passive: true }` when no default prevention is needed.
- Forgetting keyboard accessibility (`button` element + label + focus style).

---

## Learn more

| Resource | URL |
|---|---|
| MDN - `addEventListener` options | https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener |
| MDN - `window.scrollTo()` | https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo |
| Chrome DevRel - Passive event listeners | https://developer.chrome.com/blog/passive-event-listeners |
| YouTube - Search "passive event listener scroll" | https://www.youtube.com/results?search_query=passive+event+listener+scroll |
