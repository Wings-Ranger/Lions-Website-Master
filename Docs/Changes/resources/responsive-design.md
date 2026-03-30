# Responsive Design

Last updated: 2026-03-30 20:44:23 +11:00

**Used in:** changesV1 §4, §5 · changesV2 all HTML files · changesV3 group 1

---

## What it is

Responsive design means a page adapts its layout to suit the screen size — desktop, tablet, and phone — without needing separate pages. It relies on three things working together: the viewport meta tag, CSS media queries, and JavaScript breakpoint logic.

---

## When to use it

Every page of any public-facing website. Mobile traffic is often 50%+ of all visitors.

---

## How to implement it

### Step 1 — Add the viewport meta tag to every HTML page

```html
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
```

Without this tag, mobile browsers zoom out and render the page at desktop width. Nothing else in responsive design works correctly without it.

**`width=device-width`** — set the layout width to match the physical screen width.
**`initial-scale=1.0`** — start at 100% zoom (no shrinking).

### Step 2 — Write mobile-first or desktop-first CSS

**Desktop-first** (used in this project): write styles for large screens, then use `max-width` media queries to override for small screens.

```css
/* Desktop: show all nav links */
.hideonmobile {
    display: block;
}

/* Mobile: hide them */
@media (max-width: 800px) {
    .hideonmobile {
        display: none;
    }
    .menu-button {
        display: block; /* show hamburger */
    }
}
```

### Step 3 — Match the JS breakpoint to the CSS breakpoint

If CSS hides the desktop nav at 800px, JS must use the same number:

```js
var MOBILE_BREAKPOINT = 800;

function showSidebar() {
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
        document.body.classList.add('sidebar-open');
    }
}

window.addEventListener('resize', function () {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
        hideSidebar(); // auto-close if user widens window
    }
});
```

A mismatch (CSS at 800px, JS at 768px) creates a range of widths where the sidebar fires but the hamburger is hidden, or vice-versa.

### Responsive images

```css
main img {
    max-width: 100%;  /* never wider than its container */
    height: auto;     /* keep aspect ratio */
    display: block;
}
```

---

## Common mistakes

- Missing the viewport meta tag — the single most common cause of "the mobile layout looks broken".
- Writing media queries that conflict with JS breakpoints.
- Forgetting to auto-close the sidebar on resize — users resizing from phone to desktop get a stuck-open menu.
- Hardcoding pixel widths on images — they overflow on small screens.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — Viewport meta tag | https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag |
| MDN — Media queries | https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries |
| web.dev — Responsive design | https://web.dev/learn/design |
| MDN — `window.innerWidth` | https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth |
| YouTube — Search "responsive web design CSS media queries" (coding2go, Kevin Powell, Traversy Media) | https://www.youtube.com/results?search_query=responsive+web+design+CSS+media+queries+tutorial |

---

## Quick practice exercise

1. Create a two-column layout that stacks to single column on screens narrower than 600px.
2. Add a navigation bar that shows links on desktop but collapses to a button on mobile.
3. Add a JS listener that logs "mobile" or "desktop" to the console when the page loads and when the window resizes.
4. Verify your CSS breakpoint and JS breakpoint use the same number.
