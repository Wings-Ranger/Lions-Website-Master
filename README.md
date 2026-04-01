# Harcourt Lions Website

Static multi-page website for the Harcourt Lions Club.

This repository contains the public-facing website, shared styles and scripts, image assets, and detailed project documentation under Docs.

## Project Snapshot

- Type: Static website (HTML, CSS, JavaScript)
- Build step: None
- Runtime dependencies: None
- Entry page: Home.html
- Primary shared files: style.css, images.css, site.js

## Run Locally

1. Clone or download this repository.
2. Open the project folder.
3. Open Home.html in a browser.

No package manager, build tooling, or backend service is required.

## Website Pages

- Home.html: Landing page with hero section and upcoming event cards.
- about-us.html: Club background and purpose.
- membership.html: Membership requirements, steps, and onboarding timeline.
- resources.html: Placeholder resource download cards.
- meetings.html: Meeting schedule table.
- contact-us.html: Contact details, map embed, and feedback form.
- gallery.html: Gallery page (currently placeholder images).
- projects.html: Community project cards with status badges.
- sitemap.html: Visual sitemap page.
- 404.html: Custom not-found page.

## Shared Frontend Assets

- style.css: Main design system, layout, responsive behavior, nav styles, page components, and footer styles.
- images.css: Scoped responsive image defaults and commented utility image classes.
- site.js:
  - Injects shared navigation into each page.
  - Injects shared footer into each page.
  - Handles mobile sidebar open/close behavior and backdrop.
  - Applies active-link state with aria-current.
  - Provides newsletter form feedback message behavior.
  - Adds and controls the back-to-top button.

## Media Assets

- images/lions-logo.jpg
- images/lions-billboard.jpg
- images/sitemap.png

## Repository Structure

- .github/agents/: Copilot agent definitions used for documentation/change-report workflows.
- Docs/: Project documentation package.
  - Docs/README.md: Existing proposal-style documentation.
  - Docs/AI_CREDIT_SUMMARY.md: AI-assisted change attribution summary.
  - Docs/HTML_VIOLATIONS_REPORT.md: Validation report.
  - Docs/Changes/: Versioned change logs and supporting technical notes.
  - Docs/Problems/: Problem reports by file/topic.
  - Docs/readme/: Audience-specific READMEs and client handoff notes.
- .editorconfig: Editor formatting baseline.
- .gitignore: Excludes local Visual Studio artifacts (.vs, *.user, *.suo).

## Content Placeholders To Finalize

Before production launch, update these placeholders:

- Contact details in contact-us.html (email/phone/address).
- Event dates and locations in Home.html.
- Gallery placeholder images in gallery.html.
- Resource download links in resources.html.
- Social links in shared footer (currently # links, defined in site.js).

## Deployment

This project can be hosted on any standard static host (for example: GitHub Pages, Netlify static publish, or traditional web hosting).

Recommended pre-deploy checks:

1. Verify all page links from Home.html.
2. Verify images load correctly.
3. Verify navigation and footer render on every page.
4. Verify mobile menu behavior and basic accessibility (keyboard and focus states).
5. Replace placeholder content with approved club content.

## Notes

- Docs/README.md still exists and contains detailed proposal context.
- This root README is now the primary, repo-level quick-start and structure reference.
