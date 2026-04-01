# Harcourt Lions Australia – Sidebar Slide-in Update

> **ARCHIVED (Pre-V5):** This document describes an earlier sidebar implementation that used inline `showSidebar()`/`hideSidebar()` functions in each HTML page with `onclick` handlers and a backdrop `<div>` in HTML. **This approach has been replaced.** The current site uses `site.js` to inject and manage navigation, sidebar, and backdrop automatically. See `README_FOR_CLIENTS_CHANGES.md` for the current description.

This README is kept for historical reference only.

## Summary of changes

- Converted sidebar visibility from `display: none/block` toggling to CSS **transform-based** slide-in.

- Simplified JavaScript to only toggle a **state class** on `<body>` (`sidebar-open`).

- Restored `.sidebar` to a **flex container** so your list items layout correctly.

- Added an optional **backdrop** that dims the page and closes the menu when clicked.

- Kept your existing responsive rules and the **hamburger hides** while open.

---

## 1) Home.html — exact changes

### a) Add ARIA attributes to the sidebar for accessibility

**Changed** the opening `<ul class="sidebar">` to:

```html
<ul class="sidebar" role="dialog" aria-modal="true" aria-label="Site menu">
```

This declares the off‑canvas menu as a modal dialog for screen readers and improves accessibility without affecting visuals.

### b) Add a backdrop element right after `</nav>`

**Inserted** the following line immediately after the closing `</nav>` tag:

```html
<div class="backdrop" onclick="hideSidebar()" aria-hidden="true"></div>
```

This creates a full-screen dim overlay that appears when the menu opens; clicking it calls `hideSidebar()`.

### c) Replace JS to remove direct style toggling

**Replaced** the entire script block with:

```html
<script>
  function showSidebar(){
    document.body.classList.add("sidebar-open");
  }
  function hideSidebar(){
    document.body.classList.remove("sidebar-open");
  }
</script>
```

The menu state is now purely CSS-driven via the `sidebar-open` class, enabling smooth transitions.

### Full diff (Home.html)

```diff
--- Home.html (original)
+++ Home.html (updated)
@@ -8,7 +8,7 @@
 </head>
 <body>
   <nav>
-  <ul class="sidebar">
+  <ul class="sidebar" role="dialog" aria-modal="true" aria-label="Site menu">
   <li class="close-btn" onclick="hideSidebar()"><a href="#">✕</a></li>
   <li><img src="images/lions-logo.jpg" alt="Lions Logo" width="55" height="50"></li>
   <li class=""><a href="Home.html">Home</a></li>
@@ -25,17 +25,14 @@
   <li class="menu-button" onclick="showSidebar()"><a href="#">☰</a></li>
   </ul>
   </nav>
+  <div class="backdrop" onclick="hideSidebar()" aria-hidden="true"></div>
   <img class="lionsbill" src="images/lions-billboard.jpg" alt="Lionsclub.org" title="Lions Club"/>
   <script>
   function showSidebar(){
-  const sidebar = document.querySelector('.sidebar');
-  sidebar.style.display = 'flex';
-  document.body.classList.add('sidebar-open');
+    document.body.classList.add("sidebar-open");
   }
   function hideSidebar(){
-  const sidebar = document.querySelector('.sidebar');
-  sidebar.style.display = 'none';
-  document.body.classList.remove('sidebar-open');
+    document.body.classList.remove("sidebar-open");
   }
   </script>
 </body>
```

---

## 2) style.css — exact changes

### a) Body transition cleanup

**Updated** the transition on `body` to only animate padding-right (overflow is not animatable):

```css
body{
  /* …existing props… */
  transition: padding-right 0.25s ease;
}
```

### b) Sidebar becomes an off‑canvas flex container with slide-in

**Rewrote** the `.sidebar` block to keep it in the layout (`display:flex`) and hide/show via transform:

```css
.sidebar{
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 250px;
  z-index: 999;
  background-color: #f0f0f0;
  backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0,0,0,.7);
  /* Slide-in animation setup */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 0;
  transform: translateX(100%);
  transition: transform .3s ease-in-out;
  will-change: transform;
  pointer-events: none;
}
```

### c) Slide-in activation rule

**Added** a rule that slides the sidebar into view and re-enables interaction when open:

```css
body.sidebar-open .sidebar {
  transform: translateX(0);
  pointer-events: auto;
}
```

### d) Backdrop styling

**Added** a dim backdrop behind the sidebar that fades in/out and is clickable to close:

```css
.backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.4);
  z-index: 900;
  opacity: 0;
  pointer-events: none;
  transition: opacity .25s ease;
}
body.sidebar-open .backdrop {
  opacity: 1;
  pointer-events: auto;
}
```

### e) Existing rules kept as-is

- `body.sidebar-open { padding-right: 250px; overflow: hidden; }` retained — content shifts left to make room for the 250px panel.

- `@media (max-width: 400px) { body.sidebar-open { padding-right: 0; } .sidebar { width: 100%; } }` retained — full-width menu on very small screens.

- `body.sidebar-open .menu-button { display: none; }` retained — hamburger hides while open.

### Full diff (style.css)

```diff
--- style.css (original)
+++ style.css (updated)
@@ -70,16 +70,20 @@
  background-color: #f0f0f0;
  backdrop-filter: blur(10px);
  box-shadow: -10px 0 10px rgba(0, 0, 0, 0.7);
- /* Animation */
- display: block;
- transform:translateX(100%);
+ /* Slide-in animation setup */
+ display: flex;
+ flex-direction: column;
+ align-items: flex-start;
+ justify-content: flex-start;
+ padding-top: 0;
+ transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  will-change: transform;
  pointer-events: none; /* Prevent interaction when hidden */
- opacity:1;
- align-items: flex-start;
- justify-content: flex-start;
- padding-top: 0px;
+}
+body.sidebar-open .sidebar {
+ transform: translateX(0);
+ pointer-events: auto;
 }
 .sidebar li{
  width: 100%;
@@ -144,3 +148,18 @@
  width: 100%;
  }
 }
+
+ Dim overlay behind the sidebar 
+.backdrop {
+ position: fixed;
+ inset: 0;
+ background: rgba(0,0,0,.4);
+ z-index: 900;
+ opacity: 0;
+ pointer-events: none;
+ transition: opacity .25s ease;
+}
+body.sidebar-open .backdrop {
+ opacity: 1;
+ pointer-events: auto;
+}
```

---

## How it works now (flow)

1. Clicking the hamburger runs `showSidebar()` → adds `sidebar-open` to `<body>`.

2. CSS rule `body.sidebar-open .sidebar` applies → sidebar slides from `translateX(100%)` to `translateX(0)`; pointer-events enabled.

3. `body.sidebar-open` also hides the hamburger and (optionally) adds right padding to keep content visible.

4. Clicking ✕ or the backdrop runs `hideSidebar()` → removes `sidebar-open` → sidebar slides back out and the backdrop vanishes.

---

## Notes

- If you prefer the sidebar to **overlay** content (no page shift), remove `padding-right: 250px;` from `body.sidebar-open`.

- Animation duration is `.3s`; adjust the `transition` if you want it faster/slower.

- Keep the `.menu-button` visibility rules as they are — they’re already correct for mobile/desktop.
