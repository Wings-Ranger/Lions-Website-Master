# Problems Report: CSS Files

## Why this report exists
This file covers issues specific to stylesheet architecture and cross-stylesheet concerns. There is only one main stylesheet (`style.css`), but issues here can impact maintainability across the whole project.

## Affected files
- style.css
- images.css (secondary utility library)

---

## CSS-level issues

### Issue: Global list selectors can leak between page contexts

**Noted because:** `style.css` defines global rules for `ol` and `.bulletlist` without scoping them to the specific pages that need them.

**Why this matters:**
- Changes intended for membership page lists affect any ordered list anywhere.
- Future pages or components using lists get unintended styling.
- Hard to trace why a new ordered list looks different than expected.

**Better way:**

Scope membership list styles to a page-container class:

```css
/* Instead of this global rule: */
ol {
 margin-top: 10px;
 font-size: 17px;
 margin-left: 21px;
}

/* Use this scoped rule: */
.membership-page ol {
 margin-top: 10px;
 font-size: 17px;
 margin-left: 21px;
}
```

Then add a class to membership.html:
```html
<main class="editable membership-page">
    <!-- content -->
</main>
```

**Refresher path:** Review CSS component scoping and BEM naming conventions.

---

### Issue: Mixed formatting and indentation style

**Noted because:** `style.css` has inconsistent spacing, brace placement, and property ordering.

**Why this matters:**
- Larger diffs when editing (git shows more lines changed than actually modified).
- Harder for team members to follow style conventions.
- Takes longer to review changes because noisy formatting changes obscure actual logic changes.

**Better way:**

Use an automated formatter like Prettier:

```shell
npm install --save-dev prettier
npx prettier --write style.css
```

Or configure VS Code to format on save using the Prettier extension.

Then enforce with `.editorconfig` and a pre-commit hook to prevent drift.

**Refresher path:** Learn CSS formatting standards and automated linting workflows (stylelint + prettier).

---

### Issue: Sub-pixel border thickness (0.1px) is unreliable

**Noted because:** `.billboard` has `border-bottom: 0.1px solid #e5e5e5`.

**Why this matters:**
- Fractional pixels render inconsistently across displays and browsers.
- Often becomes invisible on low-DPI screens.
- Not a reliable way to create subtle separators.

**Better way:**

Use 1px with a lighter color or lower opacity:

```css
.billboard {
    border-bottom: 1px solid #e5e5e5;
}

/* OR for more subtle effect: */
.billboard {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
```

**Refresher path:** Learn rendering behavior across pixel densities and reliable border techniques.

---

### Issue: Transitioning the overflow property

**Noted because:** `body { transition: overflow 0.25s ease; }` animates overflow changes.

**Why this matters:**
- Overflow changes don't produce visible animation.
- Adds transition overhead without perceptual benefit.
- Confuses maintainers about what is being animated.

**Better way:**

Remove the overflow transition and animate the backdrop opacity instead (which is already animated):

```css
/* Remove from body: */
body {
    transition: overflow 0.25s ease;  /* DELETE THIS LINE */
}

/* The backdrop fade is already animated: */
.backdrop {
    transition: opacity 0.25s ease;   /* KEEP THIS */
}
```

**Refresher path:** Study CSS animation performance and which properties animate smoothly.

---

### Issue: Fixed pixel sizing reduces accessibility and zoom flexibility

**Noted because:** Nav uses fixed px values throughout (`nav { height: 64px; }`, `font-size: 16px`, `padding: 10px`, etc.).

**Why this matters:**
- Users who zoom their browser or use text-scaling settings experience layout jank.
- Hard to maintain proportional scaling across breakpoints.
- Limits design system flexibility.

**Better way:**

Use relative units (rem/em) and CSS custom properties for scaling:

```css
:root {
    --nav-height: 4rem;      /* typically 64px at base 16px */
    --font-size-base: 1rem;
    --spacing-base: 0.625rem; /* 10px */
}

nav {
    height: var(--nav-height);
    font-size: var(--font-size-base);
}
```

Users zooming the page will then scale proportionally.

**Refresher path:** Learn fluid design systems and rem-based sizing.

---

## Quick maintenance checklist for CSS
- [ ] Scope page-specific list styles.
- [ ] Run Prettier to normalize formatting.
- [ ] Replace 0.1px borders with 1px + opacity.
- [ ] Remove overflow transition.
- [ ] Convert fixed px sizing to rem and custom properties.
