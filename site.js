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
    '    <li><img src="images/Lions-Initail-Blue.png" alt="Lions Initials" width="55" height="50" /></li>',
    '    <li><a href="Home.html">Home</a></li>',
    '    <li>',
    '      <a href="membership.html">Membership</a>',
    '      <ul class="sidebar-submenu" aria-label="Membership submenu">',
    '        <li><a href="resources.html">Resources</a></li>',
    '      </ul>',
    '    </li>',
    '    <li><a href="meetings.html">Meetings</a></li>',
    '    <li><a href="about-us.html">About Us</a></li>',
    '    <li><a href="contact-us.html">Contact Us</a></li>',
    '    <li><a href="gallery.html">Gallery</a></li>',
    '    <li><a href="projects.html">Projects</a></li>',
    '    <li><a href="sitemap.html">Site Map</a></li>',
    '  </ul>',
    '  <ul class="top-nav" aria-label="Desktop menu">',
    '    <li><img src="images/lions-initail.png" alt="Lions Initials" width="55" height="50" /></li>',
    '    <li class="hideonmobile"><a href="Home.html">Home</a></li>',
    '    <li class="hideonmobile nav-dropdown">',
    '      <a href="membership.html">Membership</a>',
    '      <ul class="dropdown-menu" aria-label="Membership submenu">',
    '        <li><a href="resources.html">Resources</a></li>',
    '      </ul>',
    '    </li>',
    '    <li class="hideonmobile"><a href="meetings.html">Meetings</a></li>',
    '    <li class="hideonmobile"><a href="about-us.html">About Us</a></li>',
    '    <li class="hideonmobile"><a href="contact-us.html">Contact Us</a></li>',
    '    <li class="hideonmobile"><a href="gallery.html">Gallery</a></li>',
    '    <li class="hideonmobile"><a href="projects.html">Projects</a></li>',
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

  // ---------------------------------------------------------------------------
  // 3. Inject the shared footer into every page.
  // ---------------------------------------------------------------------------
  var FOOTER_HTML = [
    '<footer class="site-footer">',
    '  <div class="footer-inner">',
    '    <div class="footer-col">',
    '      <h3>Harcourt Lions Club</h3>',
    '      <p>Serving Harcourt and surrounds through community action, fundraising, and friendship.</p>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h3>Quick Links</h3>',
    '      <ul>',
    '        <li><a href="Home.html">Home</a></li>',
    '        <li><a href="membership.html">Membership</a></li>',
    '        <li><a href="meetings.html">Meetings</a></li>',
    '        <li><a href="about-us.html">About Us</a></li>',
    '        <li><a href="contact-us.html">Contact Us</a></li>',
    '        <li><a href="gallery.html">Gallery</a></li>',
    '        <li><a href="projects.html">Projects</a></li>',
    '        <li><a href="resources.html">Resources</a></li>',
    '      </ul>',
    '    </div>',
    '    <div class="footer-col">',
    '      <h3>Follow Us</h3>',
    '      <div class="social-links">',
    '        <a href="#" class="social-link" aria-label="Harcourt Lions on Facebook">Facebook</a>',
    '        <a href="#" class="social-link" aria-label="Harcourt Lions on Instagram">Instagram</a>',
    '      </div>',
    '    </div>',
    '  </div>',
    '  <div class="footer-bottom">',
    '    <p>&copy; 2026 Harcourt Lions Club. All rights reserved.</p>',
    '  </div>',
    '</footer>'
  ].join('\n');

  var mainEl = document.querySelector('main');
  if (mainEl) {
    mainEl.insertAdjacentHTML('afterend', FOOTER_HTML);
  }

  // ---------------------------------------------------------------------------
  // 4. Inject and wire up the back-to-top button.
  // ---------------------------------------------------------------------------
  document.body.insertAdjacentHTML('beforeend',
    '<button type="button" class="back-to-top" id="back-to-top" aria-label="Back to top" hidden>&#9650; Top</button>'
  );

  var backTopBtn = document.getElementById('back-to-top');
  if (backTopBtn) {
    window.addEventListener('scroll', function () {
      backTopBtn.hidden = window.scrollY < 300;
    }, { passive: true });
    backTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
/* AI V4->V5 change end */