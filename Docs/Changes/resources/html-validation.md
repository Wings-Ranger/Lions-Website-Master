# HTML Validation

Last updated: 2026-03-30 20:44:23 +11:00

**Used in:** changesV1 §8 · changesV2 membership.html

---

## What it is

Valid HTML follows the rules of the HTML specification — elements are opened and closed correctly, nesting is legal, and required attributes are present. Invalid HTML is parsed differently by different browsers, causing unpredictable rendering bugs.

---

## When to use it

Always. Run validation:
- After creating a new page.
- After any structural edit (adding/removing sections, forms, tables).
- Before handing work to a client or deploying changes.

---

## How to implement it

### Check with the W3C Validator
Paste your HTML at: **https://validator.w3.org/**
Or install the VS Code extension **"W3C Web Validator"** to see errors inline.

### Most common errors to watch for

**1. Duplicate or unmatched closing tags**
```html
<!-- Wrong -->
<div>
    <p>Text</p>
</div>
</div>  <!-- extra closing tag -->

<!-- Fixed -->
<div>
    <p>Text</p>
</div>
```

**2. Trailing duplicate `</body></html>`**
```html
<!-- Wrong — found in old membership.html -->
    </body>
</html>
</body>  <!-- duplicate -->
</html>  <!-- duplicate -->

<!-- Fixed -->
    </body>
</html>
```

**3. Skipped heading levels**
```html
<!-- Wrong -->
<h1>Page Title</h1>
<h4>Section</h4>  <!-- jumped from h1 to h4 -->

<!-- Fixed -->
<h1>Page Title</h1>
<h2>Section</h2>
```

**4. Nested forms (invalid HTML)**
```html
<!-- Wrong -->
<form>
    <form>  <!-- forms cannot be nested -->
    </form>
</form>

<!-- Fixed — one form only -->
<form>
</form>
```

**5. `<li>` outside a list**
```html
<!-- Wrong -->
<li>Item outside a list</li>

<!-- Fixed -->
<ul>
    <li>Item in a list</li>
</ul>
```

---

## Common mistakes

- Trusting "it looks right in the browser" — browsers silently recover from invalid HTML, but in inconsistent ways.
- Forgetting to close self-closing elements in XHTML mode (used in this project): `<meta />`, `<img />`, `<br />`.
- Wrapping block elements (`<div>`, `<p>`) inside inline elements (`<span>`, `<a>`).

---

## Learn more

| Resource | URL |
|---|---|
| W3C HTML Validator | https://validator.w3.org/ |
| MDN — HTML content categories (what can go where) | https://developer.mozilla.org/en-US/docs/Web/HTML/Content_categories |
| MDN — Common HTML mistakes | https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML |
| YouTube — Search "HTML validation common errors W3C" (coding2go, Kevin Powell, Web Dev Simplified) | https://www.youtube.com/results?search_query=HTML+validation+common+errors+W3C |

---

## Quick practice exercise

1. Intentionally introduce three errors into a page: a duplicate closing tag, a skipped heading level, and a `<li>` outside a list.
2. Run through the W3C Validator.
3. Fix each error and re-validate until zero errors are reported.
