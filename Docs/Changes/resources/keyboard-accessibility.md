# Keyboard Accessibility

**Used in:** changesV1 §4 · changesV2 style.css · changesV3 group 8

---

## What it is

Keyboard accessibility ensures every interactive element can be used without a mouse — navigation, buttons, forms, and modals must all work via Tab, Shift+Tab, Enter, Space, and Escape.

This is required for users who cannot use a mouse (motor disabilities) and also benefits power users and developers.

---

## When to use it

- Any navigation menu with open/close behaviour.
- Any modal, dialog, or overlay (like a mobile sidebar).
- All buttons and form inputs.
- Effectively: every interactive element on every page.

---

## How to implement it

### Close a sidebar with the Escape key
```js
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hideSidebar();
    }
});
```
`event.key === 'Escape'` is the modern, cross-browser way to check for the Escape key. Avoid checking `event.keyCode` (deprecated).

### Keep keyboard shortcuts conservative
Only trap keys that have a clear, expected mapping:
- **Escape** → close modal/overlay (universal convention)
- **Enter / Space** → activate a focused button (browsers do this automatically for `<button>`)

Avoid intercepting Backspace (browser back), arrow keys (scrolling), or Tab (focus movement) unless your component specifically requires it.

### Make focus states visible with `focus-visible`
```css
button:focus-visible,
a:focus-visible {
    outline: 3px solid var(--accent);
    outline-offset: 3px;
}
```
`:focus-visible` only shows the ring when navigating by keyboard, not when clicking with a mouse. This avoids the "ugly outline on click" problem while keeping focus visible for keyboard users.

**Do not use `outline: none` without a replacement** — this removes all keyboard focus indication.

### Match breakpoints between CSS and JS
If your CSS hides the sidebar at 800px, your JS should use the same number:
```css
/* style.css */
@media (max-width: 800px) { ... }
```
```js
// site.js
var MOBILE_BREAKPOINT = 800;
if (window.innerWidth <= MOBILE_BREAKPOINT) {
    // show sidebar
}
```
Mismatched breakpoints create states where the sidebar is visually wrong (e.g. the backdrop is visible but the sidebar is not).

---

## Common mistakes

- Using `outline: none` without a visible replacement focus style.
- Using `:focus` instead of `:focus-visible` — the ring shows on mouse click too.
- Intercepting Backspace as a keyboard shortcut — it conflicts with browser navigation.
- Not auto-closing the sidebar on resize above the breakpoint — users resizing from mobile to desktop get a stuck-open sidebar.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — `focus-visible` | https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible |
| MDN — KeyboardEvent.key | https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key |
| web.dev — Accessible tap targets | https://web.dev/articles/accessible-tap-targets |
| W3C WAI — Keyboard accessibility | https://www.w3.org/WAI/perspective-videos/keyboard/ |
| WebAIM — Keyboard testing | https://webaim.org/techniques/keyboard/ |
| YouTube — Search "keyboard accessibility web development" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=keyboard+accessibility+web+development |

---

## Quick practice exercise

1. Build a page with a button that opens a panel.
2. Add an Escape key listener that closes it.
3. Add a `focus-visible` CSS rule with a coloured outline.
4. Open the page and navigate using only Tab and Escape — verify everything works without touching the mouse.
