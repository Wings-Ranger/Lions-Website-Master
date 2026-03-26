/* AI V4->V5 change start: shared navigation behavior moved out of inline HTML scripts. Change log: Changes/changesV1.md lines 32-100; Changes/changesV2.md lines 171-172. */
/* V5.1 change start: nav HTML centralised here so every page shares one definition. Edit the nav markup once below and it applies to all pages automatically. */
(function () {
  // ---------------------------------------------------------------------------
  // 1. Inject the shared navigation into the page.
  //    Edit nav links ONLY HERE — all pages pick up the change automatically.
  // ---------------------------------------------------------------------------
  var NAV_HTML = [
    '<nav aria-label="Primary">',
    '  <ul class="sidebar" id="mobile-sidebar" aria-label="Mobile menu">',
    '    <li class="close-btn">',
    '      <button type="button" class="icon-button close-sidebar" aria-label="Close menu">\u2715</button>',
    '    </li>',
    '    <li><img src="images/lions-logo.jpg" alt="Lions Logo" width="55" height="50" /></li>',
    '    <li><a href="Home.html">Home</a></li>',
    '    <li><a href="membership.html">Membership</a></li>',
    '    <li><a href="meetings.html">Meetings</a></li>',
    '    <li><a href="about-us.html">About Us</a></li>',
    '    <li><a href="contact-us.html">Contact Us</a></li>',
    '    <li><a href="sitemap.html">Site Map</a></li>',
    '  </ul>',
    '  <ul class="top-nav" aria-label="Desktop menu">',
    '    <li><img src="images/lions-logo.jpg" alt="Lions Logo" width="55" height="50" /></li>',
    '    <li class="hideonmobile"><a href="Home.html">Home</a></li>',
    '    <li class="hideonmobile"><a href="membership.html">Membership</a></li>',
    '    <li class="hideonmobile"><a href="meetings.html">Meetings</a></li>',
    '    <li class="hideonmobile"><a href="about-us.html">About Us</a></li>',
    '    <li class="hideonmobile"><a href="contact-us.html">Contact Us</a></li>',
    '    <li class="hideonmobile"><a href="sitemap.html">Site Map</a></li>',
    '    <li class="menu-button">',
    '      <button type="button" class="icon-button open-sidebar" aria-label="Open menu">\u2630</button>',
    '    </li>',
    '  </ul>',
    '</nav>',
    '<div class="backdrop" id="nav-backdrop" aria-hidden="true"></div>'
  ].join('\n');

  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  /* V5.1 change end */

  // ---------------------------------------------------------------------------
  // 2. Wire up the responsive sidebar behaviour.
  // ---------------------------------------------------------------------------
  var MOBILE_BREAKPOINT = 800;
  var body = document.body;
  var openBtn = document.querySelector(".open-sidebar");
  var closeBtn = document.querySelector(".close-sidebar");
  var backdrop = document.getElementById("nav-backdrop");

  function showSidebar() {
    // Only use the overlay sidebar pattern on small screens.
    if (window.innerWidth <= MOBILE_BREAKPOINT) {
      body.classList.add("sidebar-open");
    }
  }

  function hideSidebar() {
    body.classList.remove("sidebar-open");
  }

  if (openBtn) {
    openBtn.addEventListener("click", showSidebar);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", hideSidebar);
  }

  if (backdrop) {
    backdrop.addEventListener("click", hideSidebar);
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      hideSidebar();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      hideSidebar();
    }
  });

  // Mark the active navigation link for screen readers and visual styling.
  var currentPath = window.location.pathname.split("/").pop() || "Home.html";
  var navLinks = document.querySelectorAll("nav a[href]");
  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
/* AI V4->V5 change end */