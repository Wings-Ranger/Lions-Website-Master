# CSS Off-Canvas Sidebar and Backdrop

**Used in:** changesV1 §9 · changesV2 style.css

---

## What it is

An off-canvas sidebar is a panel that lives just outside the visible page edge and slides in when triggered. A backdrop is a semi-transparent overlay placed behind the panel to block the main content while the panel is open.

Together they create the standard mobile "hamburger menu" pattern.

---

## When to use it

- Mobile navigation menus that are too many links to show in a top bar.
- Settings panels, filter drawers, or any overlay panel triggered by a button.

---

## How to implement it

### HTML structure

```html
<body>
    <nav>
        <!-- Desktop nav links -->
        <ul class="top-nav">
            <li><a href="Home.html">Home</a></li>
            <!-- ... -->
            <li class="menu-button">
                <button type="button" class="open-sidebar" aria-label="Open menu">☰</button>
            </li>
        </ul>

        <!-- Mobile sidebar (off-screen by default) -->
        <ul class="sidebar">
            <li class="close-btn">
                <button type="button" class="close-sidebar" aria-label="Close menu">✕</button>
            </li>
            <li><a href="Home.html">Home</a></li>
            <!-- ... -->
        </ul>
    </nav>

    <!-- Dark backdrop behind the sidebar -->
    <div class="backdrop" id="nav-backdrop" aria-hidden="true"></div>
</body>
```

### CSS — slide sidebar off the right edge by default

```css
.sidebar {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    z-index: 999;
    background-color: #f0f0f0;
    transform: translateX(100%);        /* hidden off right edge */
    transition: transform 0.3s ease-in-out;
    pointer-events: none;               /* not clickable while hidden */
}

/* Slide in when body has .sidebar-open */
body.sidebar-open .sidebar {
    transform: translateX(0);
    pointer-events: auto;
}
```

### CSS — backdrop

```css
.backdrop {
    position: fixed;
    inset: 0;                           /* covers entire viewport */
    z-index: 900;                       /* behind sidebar (999) but above page */
    background-color: rgba(0, 0, 0, 0.35);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
}

body.sidebar-open .backdrop {
    opacity: 1;
    pointer-events: auto;
}
```

### CSS — lock page scroll while sidebar is open

```css
body.sidebar-open {
    overflow: hidden;
}
```

### JavaScript — toggle the class on `body`

```js
var body = document.body;
var openBtn  = document.querySelector('.open-sidebar');
var closeBtn = document.querySelector('.close-sidebar');
var backdrop = document.getElementById('nav-backdrop');

openBtn.addEventListener('click', function () {
    body.classList.add('sidebar-open');
});

function close() {
    body.classList.remove('sidebar-open');
}

closeBtn.addEventListener('click', close);
backdrop.addEventListener('click', close);      // click outside to close
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();            // Escape to close
});
```

---

## Key design decisions explained

| Decision | Reason |
|---|---|
| Toggle a class on `<body>` rather than on the sidebar directly | Lets CSS respond from any selector (`body.sidebar-open .anything`), keeping JS minimal |
| `pointer-events: none` on hidden sidebar | Prevents invisible buttons being Tab-focusable when the menu is closed |
| `z-index` hierarchy: sidebar 999, backdrop 900, nav 1000 | Fixed nav stays on top; backdrop sits above page but below sidebar |
| `inset: 0` on backdrop | Shorthand for `top:0; right:0; bottom:0; left:0` — full viewport coverage |

---

## Learn more

| Resource | URL |
|---|---|
| MDN — CSS `transform` | https://developer.mozilla.org/en-US/docs/Web/CSS/transform |
| MDN — CSS `transition` | https://developer.mozilla.org/en-US/docs/Web/CSS/transition |
| MDN — `pointer-events` | https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events |
| MDN — `z-index` | https://developer.mozilla.org/en-US/docs/Web/CSS/z-index |
| web.dev — Off-canvas patterns | https://web.dev/patterns/layout |
| YouTube — Search "CSS hamburger menu sidebar overlay" (coding2go, Kevin Powell, Traversy Media) | https://www.youtube.com/results?search_query=CSS+hamburger+menu+sidebar+overlay+tutorial |

---

## Quick practice exercise

1. Build a page with a hamburger button, a sidebar panel, and a backdrop.
2. Toggle a `menu-open` class on `<body>` using JS.
3. Make the sidebar slide in from the right using `transform: translateX(100%)` → `translateX(0)`.
4. Make the backdrop fade in with `opacity: 0` → `opacity: 1`.
5. Implement close on backdrop click and Escape key.
