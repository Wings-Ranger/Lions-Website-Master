# JavaScript Script Loading and DOM Injection

**Related resources:** `js-dom-injection.md` · `shared-javascript.md`

---

## What this document covers

1. How a `.js` file is linked to an HTML page.
2. Where the `<script>` tag can be placed and what each position means.
3. `defer` vs `async` vs neither.
4. How to inject HTML content into specific parts of the page from JavaScript.
5. Common problems each approach can cause and how to avoid them.

---

## Part 1 — Linking a `.js` file to an HTML page

### The `<script>` tag

A `.js` file is connected to an HTML page with a `<script>` element that carries a `src` attribute pointing to the file:

```html
<script src="site.js"></script>
```

The path in `src` is relative to the HTML file unless you use an absolute URL:

```html
<!-- same folder as the HTML file -->
<script src="site.js"></script>

<!-- one level up from the HTML file -->
<script src="../site.js"></script>

<!-- inside a subfolder -->
<script src="js/site.js"></script>
```

The browser fetches the file over HTTP (or from disk when opening locally), parses it, and runs it immediately — unless `defer` or `async` are used (see Part 3).

### Inline scripts vs external scripts

| Type | Example | Use case |
|---|---|---|
| External (linked) | `<script src="site.js"></script>` | Reusable code shared across pages |
| Inline | `<script>alert('hello');</script>` | One-off or page-specific tiny snippets |

Using external files is strongly preferred for anything longer than a few lines. They are cached by the browser after the first load, so subsequent pages load faster.

---

## Part 2 — Where the `<script>` tag can be placed

### Location 1 — Inside `<head>` (no attributes)

```html
<head>
    <meta charset="UTF-8">
    <title>Page</title>
    <script src="site.js"></script>
</head>
<body>
    <main>...</main>
</body>
```

**What happens:** The browser stops parsing the HTML, downloads the script, runs it, then continues. At the moment the script runs, `<body>` has not been parsed yet — `document.body` is `null` and no DOM elements exist.

**Problem:** Any code that tries to query or modify the DOM (e.g. `document.querySelector`, `insertAdjacentHTML`) will fail silently or throw an error because the elements do not exist yet.

**When to use:** Only for scripts that do not touch the DOM at all (e.g. configuration objects, analytics setup that runs on a `window.onload` callback internally).

---

### Location 2 — End of `<body>` (the classic fix)

```html
<body>
    <main>...</main>
    <script src="site.js"></script>
</body>
```

**What happens:** The entire HTML is parsed before the browser reaches the `<script>` tag, so all DOM elements already exist when the script runs.

**Problem:** The script only starts downloading after the HTML is fully parsed. On slow connections this means a visible delay before scripts run — the page may look broken or incomplete briefly.

**When to use:** Simple sites or scripts that must support very old browsers that do not understand `defer`.

---

### Location 3 — Inside `<head>` with `defer` (recommended)

```html
<head>
    <meta charset="UTF-8">
    <title>Page</title>
    <script src="site.js" defer></script>
</head>
<body>
    <main>...</main>
</body>
```

**What happens:** The browser starts downloading the script immediately (in parallel with parsing the HTML) but delays execution until the HTML is fully parsed. The result is the best of both worlds — early download, safe DOM access.

**This is the pattern used in this project** for `site.js`.

**When to use:** Any external script that needs to access the DOM. Use this as the default.

---

### Location 4 — Inside `<head>` with `async`

```html
<head>
    <script src="analytics.js" async></script>
</head>
```

**What happens:** The browser downloads the script in parallel, but runs it as soon as it finishes downloading — even if HTML parsing is not complete.

**Problem:** Execution order is not guaranteed. If you have multiple `async` scripts and script B depends on script A, B might run first. The DOM may also not be ready when the script runs.

**When to use:** Independent third-party scripts (analytics, ads) that do not depend on your DOM or on other scripts.

---

### Summary table

| Placement | Downloads | Executes | DOM available? | Order guaranteed? |
|---|---|---|---|---|
| `<head>` (no attr) | Blocks parsing | Immediately | No | Yes |
| `</body>` (end) | After parse | After parse | Yes | Yes |
| `<head defer>` | In parallel | After parse | Yes | Yes |
| `<head async>` | In parallel | ASAP | Maybe | No |

---

## Part 3 — `defer` vs `async` vs neither

```
Timeline (HTML parse = ====, download = ----, execute = XXXX):

No attribute:   ==== BLOCK ====download====XXXX============
defer:          ====download (parallel)================XXXX
async:          ====download (parallel)===XXXX=============
```

Key rule: **use `defer` by default**. Only reach for `async` for fully independent third-party snippets.

---

## Part 4 — Injecting HTML into specific spots from JavaScript

Once a script is running and the DOM is available, you can insert HTML content anywhere on the page using `insertAdjacentHTML`.

### Syntax

```js
targetElement.insertAdjacentHTML(position, htmlString);
```

### The four position values

```
<!-- beforebegin -->
<div id="target">
    <!-- afterbegin -->
    existing content
    <!-- beforeend -->
</div>
<!-- afterend -->
```

| Position | Inserts |
|---|---|
| `'beforebegin'` | Immediately before the target element (as a sibling) |
| `'afterbegin'` | Inside the target element, before its first child |
| `'beforeend'` | Inside the target element, after its last child |
| `'afterend'` | Immediately after the target element (as a sibling) |

### Practical examples

**Inject at the very top of `<body>` (nav injection pattern used in this project):**

```js
document.body.insertAdjacentHTML('afterbegin', '<nav>...</nav>');
```

**Inject a footer at the very bottom of `<body>`:**

```js
document.body.insertAdjacentHTML('beforeend', '<footer>...</footer>');
```

**Inject a banner before a specific element:**

```js
var main = document.querySelector('main');
main.insertAdjacentHTML('beforebegin', '<div class="banner">...</div>');
```

**Append items inside a list:**

```js
var list = document.getElementById('nav-list');
list.insertAdjacentHTML('beforeend', '<li><a href="new.html">New Page</a></li>');
```

### Alternative: `innerHTML`

```js
document.getElementById('container').innerHTML = '<p>New content</p>';
```

`innerHTML` **replaces** everything already inside the element. `insertAdjacentHTML` **adds** to the element without disturbing existing content. Prefer `insertAdjacentHTML` when you want to add without destroying what is already there.

---

## Part 5 — How the link between `.js` and `.html` works at runtime

1. The browser parses the HTML file top-to-bottom.
2. When it reaches `<script src="site.js" defer></script>` it queues the file for download.
3. The rest of the HTML continues parsing.
4. Once parsing is complete, any queued `defer` scripts run in order.
5. The script can now safely access any element on the page.
6. `insertAdjacentHTML` calls insert the pre-built HTML strings into the live DOM.
7. The browser renders the newly inserted elements.

The HTML file does **not** need to contain the injected markup — it only needs to load the script. This is the basis of the shared-nav pattern in this project:

```html
<!-- membership.html — no nav markup needed here -->
<body>
    <main>
        <h1>Membership</h1>
        <!-- page content only -->
    </main>
    <script src="site.js" defer></script>
</body>
```

---

## Part 6 — Problems to watch out for

### Problem 1: Script runs before the DOM is ready

**Cause:** `<script>` in `<head>` without `defer` or `async`.

**Symptom:** `document.querySelector(...)` returns `null`. `insertAdjacentHTML` throws `Cannot read properties of null`.

**Fix:** Add `defer` to any `<script>` in `<head>` that touches the DOM.

---

### Problem 2: Flash of unstyled / missing content (FOUC)

**Cause:** The browser renders the HTML before the script runs, so injected elements (like the nav) appear slightly after the page is visible.

**Symptom:** A brief moment where the nav is missing, then it pops in.

**Fix:** 
- Add `defer` so the script runs as early as possible after parse.
- Optionally hide `<body>` with CSS until the script has run, then reveal it:
    ```css
    body { visibility: hidden; }
    body.js-ready { visibility: visible; }
    ```
    ```js
    document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
    document.body.classList.add('js-ready');
    ```
- For a production site, use server-side includes instead so the HTML arrives complete.

---

### Problem 3: JavaScript is disabled

**Cause:** Some users (or bots) run with JS disabled, or the script file fails to load.

**Symptom:** The nav (or any injected content) simply does not appear. The page may be unusable.

**Fix:** Provide a `<noscript>` fallback:

```html
<noscript>
    <nav>
        <ul>
            <li><a href="Home.html">Home</a></li>
            <!-- etc. -->
        </ul>
    </nav>
</noscript>
```

Or consider server-side includes so nav is in the HTML before it reaches the browser.

---

### Problem 4: XSS (Cross-Site Scripting) via `insertAdjacentHTML` / `innerHTML`

**Cause:** You pass user-supplied or external data directly into `insertAdjacentHTML` or `innerHTML` without sanitising it.

**Example of unsafe code:**

```js
// UNSAFE — never do this
var userInput = new URLSearchParams(location.search).get('name');
document.body.insertAdjacentHTML('beforeend', '<p>Hello ' + userInput + '</p>');
```

An attacker can craft a URL like `?name=<script>stealCookies()</script>` and execute arbitrary JavaScript in the browser of anyone who visits that URL.

**Fix:** Never insert raw user input into the DOM as HTML. Use `textContent` for plain text:

```js
// SAFE
var p = document.createElement('p');
p.textContent = 'Hello ' + userInput;
document.body.appendChild(p);
```

If you must insert HTML built from external data, use a trusted sanitiser library (e.g. DOMPurify).

**In this project there is no risk** because `NAV_HTML` is a hardcoded constant — no user input ever reaches `insertAdjacentHTML`.

---

### Problem 5: Duplicate event listeners

**Cause:** The external script is loaded and also an inline script on the same page runs the same setup code.

**Symptom:** Clicking a button triggers its handler twice (or more).

**Fix:** Remove any inline `<script>` blocks from HTML pages once the equivalent code has been moved to the external file.

---

### Problem 6: Script load order

**Cause:** Script B depends on a function defined in script A, but B is listed first in the HTML.

**Symptom:** `ReferenceError: functionFromA is not defined`.

**Fix with `defer`:** Multiple `defer` scripts execute in the order they appear in the HTML, so just list A before B:

```html
<script src="utilities.js" defer></script>
<script src="site.js" defer></script>  <!-- can safely call utils -->
```

**Note:** `async` does NOT guarantee order — avoid it when scripts have dependencies.

---

### Problem 7: Caching stale scripts

**Cause:** The browser caches `site.js`. After you update the file, visitors may continue running the old version for hours or days.

**Fix:** Append a version query string or a content hash to the `src`:

```html
<script src="site.js?v=5.2" defer></script>
```

Change the version number every time you deploy an update. The browser treats `site.js?v=5.2` and `site.js?v=5.3` as different URLs and fetches the new one.

---

## Quick-reference checklist

- [ ] `<script src="...">` tag points to the correct relative path from the HTML file.
- [ ] `defer` attribute present if the script touches the DOM.
- [ ] Script is listed in `<head>` with `defer` (not duplicated at the bottom of `<body>`).
- [ ] No user-supplied data is passed directly into `insertAdjacentHTML` or `innerHTML`.
- [ ] Old duplicate inline scripts removed from HTML files after moving code to the external file.
- [ ] If multiple scripts share dependencies, they are listed in dependency order.
- [ ] Version string updated in `src` when deploying changes.

---

## Learn more

| Resource | URL |
|---|---|
| MDN — `<script>`: The Script element | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script |
| MDN — `defer` attribute | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#defer |
| MDN — `async` attribute | https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script#async |
| MDN — `insertAdjacentHTML` | https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML |
| MDN — `innerHTML` security note | https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML#security_considerations |
| OWASP — XSS Prevention Cheat Sheet | https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html |
| web.dev — Efficiently load JavaScript | https://web.dev/articles/efficiently-load-third-party-javascript |
| YouTube — Search "JavaScript script loading defer async explained" (coding2go, Web Dev Simplified, Traversy Media) | https://www.youtube.com/results?search_query=javascript+script+loading+defer+async+explained |

---
