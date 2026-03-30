# ARIA Live Regions for Dynamic Status Messages

Last updated: 2026-03-30 20:48:57 +11:00

**Used in:** changesV5 site.js/footer newsletter form

---

## What it is

An ARIA live region lets screen readers announce text updates that happen after page load (for example, a success message after form submission).

In this project, the newsletter confirmation message uses `aria-live="polite"`.

---

## When to use it

- Form success/failure messages rendered by JavaScript.
- Save confirmation banners.
- Any dynamic message not triggered by moving keyboard focus.

---

## How to implement it

### HTML

```html
<p class="newsletter-msg" id="newsletter-msg" aria-live="polite" hidden></p>
```

### JavaScript update

```js
var msg = document.getElementById('newsletter-msg');
msg.textContent = 'Thanks! We\'ll be in touch.';
msg.hidden = false;
```

### Choosing live region priority

- `polite`: announce when convenient (recommended for non-critical updates).
- `assertive`: interrupts current speech (only for urgent alerts).

---

## Common mistakes

- Updating visual text without a live region, so screen readers never announce it.
- Overusing `assertive` for low-priority messages.
- Injecting/removing the element entirely instead of updating a stable live region node.

---

## Learn more

| Resource | URL |
|---|---|
| MDN - ARIA live regions | https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions |
| W3C - ARIA live guidance | https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19 |
| YouTube - Search "aria-live tutorial" (Web Dev Simplified, coding2go) | https://www.youtube.com/results?search_query=aria-live+tutorial |
