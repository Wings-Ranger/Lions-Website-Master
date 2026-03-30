# JavaScript DOM Injection (`insertAdjacentHTML`)

Last updated: 2026-03-30 20:44:23 +11:00

**Used in:** changesV3 group 1

---

## What it is

`insertAdjacentHTML` is a browser method that lets you insert a string of HTML into the DOM at a specific position relative to a target element. In this project it is used to inject the shared navigation HTML from `site.js` into every page, so the nav only needs to be written and maintained in one place.

---

## When to use it

- Any markup that is identical across all pages (nav, footer, cookie banner).
- When you want a single-file change to apply everywhere without a server or build tool.
- Small static sites where a full framework (React, Vue) would be overkill.

---

## How to implement it

### Syntax

```js
element.insertAdjacentHTML(position, htmlString);
```

| Position string | Where it inserts |
|---|---|
| `'beforebegin'` | Before the element itself |
| `'afterbegin'` | Inside the element, before its first child |
| `'beforeend'` | Inside the element, after its last child |
| `'afterend'` | After the element itself |

### How nav injection works in this project

```js
var NAV_HTML = [
    '<nav aria-label="Primary">',
    '  <ul class="sidebar" id="mobile-sidebar" aria-label="Mobile menu">',
    '    <!-- ... sidebar links ... -->',
    '  </ul>',
    '  <ul class="top-nav" aria-label="Desktop menu">',
    '    <!-- ... desktop links ... -->',
    '  </ul>',
    '</nav>',
    '<div class="backdrop" id="nav-backdrop" aria-hidden="true"></div>'
].join('\n');

// Insert nav as first child of <body>
document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
```

`'afterbegin'` inserts inside `<body>` before everything else — so the nav appears at the top of the page regardless of what the HTML file contains.

**Why a string array joined with `\n`?**
Writing long HTML in a single string is hard to read. Splitting it into an array and joining keeps each line readable in the source file while still producing one string at runtime.

### The HTML pages only need the content and the script tag

Once injection is in place, every HTML page only needs:

```html
<body>
    <!-- Nav and backdrop are injected by site.js -->
    <main>
        <h1>Page Title</h1>
        <!-- page content -->
    </main>
    <script src="site.js" defer></script>
</body>
```

---

## Limitations to be aware of

| Limitation | Impact |
|---|---|
| Requires JavaScript enabled | If JS is disabled, the nav will not appear. For a public site, consider a `<noscript>` fallback or server-side includes. |
| Nav is invisible for a brief moment on slow connections | The HTML loads first, then JS runs and injects the nav. Usually imperceptible but worth knowing. |
| Not suitable for very large HTML strings | For complex templates, a proper templating engine or static site generator is more maintainable. |

---

## Learn more

| Resource | URL |
|---|---|
| MDN — `insertAdjacentHTML` | https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML |
| MDN — DOM manipulation overview | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting |
| MDN — `Array.prototype.join` | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join |
| YouTube — Search "JavaScript DOM manipulation insertAdjacentHTML" (coding2go, Web Dev Simplified, Traversy Media) | https://www.youtube.com/results?search_query=javascript+DOM+manipulation+insertAdjacentHTML |

---

## Quick practice exercise

1. Create three HTML pages, each with only a `<main>` and a `<script src="shared.js" defer></script>`.
2. In `shared.js`, build a footer HTML string and inject it into every page using `document.body.insertAdjacentHTML('beforeend', footerHTML)`.
3. Confirm all three pages show the same footer, then test that editing the string in `shared.js` updates all three.
