# Lions V5 AI Detailed Change Log (V1)

## Overview
This document explains every major change made while upgrading Lions v4 into Lions V5 AI.

It covers:
- What changed
- Why it was changed
- Why it is better
- How you can learn more and practice each concept

Date created: 2026-03-25

## 1. New Repository Created

### What changed
- A separate project folder was created: Lions V5 AI.
- The original Lions v4 folder was left untouched.

### Why this was changed
- You asked for all improvements in a different repo.
- Keeping versions separate reduces risk and makes review easier.

### Why this is better
- You can compare old and new versions side by side.
- You can test changes safely without affecting your original site.

### Learn more
- Topic: Versioning and safe iteration
- Practice: Keep one stable folder and one development folder for every major redesign.

## 2. Shared JavaScript Added

### What changed
- Added a new shared file: site.js.
- Removed repeated inline navigation scripts from each HTML page.
- All pages now load the same sidebar behavior from one script.

### Why this was changed
- The previous code duplicated nearly identical JavaScript in every page.
- Duplicated logic increases maintenance effort and bug risk.

### Why this is better
- One source of truth for nav behavior.
- Faster updates: fix once, apply everywhere.
- Cleaner HTML pages with less inline script clutter.

### Learn more
- Topic: DRY principle (Do Not Repeat Yourself)
- Practice:
  1. Find repeated code blocks.
  2. Move shared logic into one external file.
  3. Reference that file from all pages.

## 3. Navigation Controls Made Semantic and Accessible

### What changed
- Replaced clickable list items and placeholder links with real button elements for menu open and close actions.
- Added clear ARIA labels for menu buttons.
- Added active page highlighting behavior with aria-current in JavaScript.

### Why this was changed
- List items with onclick and href="#" are not ideal for accessibility or semantics.
- Buttons are the correct element for an action (open/close), while links are for navigation.

### Why this is better
- Better screen reader behavior.
- More consistent keyboard behavior.
- Better HTML semantics and maintainability.

### Learn more
- Topic: Semantic HTML and accessible controls
- Practice:
  1. Use button for actions.
  2. Use anchor for page navigation.
  3. Add aria-label when icon-only controls are used.

## 4. Keyboard and Responsive Behavior Corrected

### What changed
- Sidebar now closes on Escape only.
- Removed unsafe global behavior like closing on Backspace.
- Aligned responsive breakpoint logic with CSS behavior.

### Why this was changed
- Backspace can conflict with expected browser behavior.
- Mixed breakpoints between CSS and JS cause inconsistent UI behavior.

### Why this is better
- Predictable keyboard behavior.
- Fewer accidental interactions.
- Better consistency between visual breakpoints and script behavior.

### Learn more
- Topic: Progressive enhancement and keyboard accessibility
- Practice:
  1. Define one breakpoint strategy.
  2. Reuse it in both CSS and JS.
  3. Keep keyboard shortcuts simple and standard.

## 5. HTML Structure Improved on Every Page

### What changed
Across Home, About, Membership, Meetings, Contact, and Site Map pages:
- Added viewport meta tags for mobile rendering.
- Added main regions and proper top-level headings.
- Cleaned page structure for better readability and semantic hierarchy.

### Why this was changed
- Multiple pages lacked structure landmarks and clear heading hierarchy.
- Mobile responsiveness starts with proper viewport metadata.

### Why this is better
- Improved accessibility and SEO foundations.
- Better readability for users and maintainers.
- Cleaner structure for future content updates.

### Learn more
- Topic: Document outline and semantic landmarks
- Practice:
  1. Ensure each page has one main section.
  2. Start content with one h1.
  3. Use h2 and h3 only as needed under h1.

## 6. Contact Page Validity and Form Design Fixed

### What changed
- Removed invalid nested form structure.
- Converted loose list items into semantic contact content.
- Reworked preference inputs using fieldset and radio buttons.
- Kept feedback flow clearer and more valid.

### Why this was changed
- Nested forms are invalid HTML.
- Checkbox pair for yes/no creates ambiguous submissions.
- Contact details should be semantic and easy to scan.

### Why this is better
- Valid, cleaner form behavior.
- Better data quality from user submissions.
- Better accessibility and readability.

### Learn more
- Topic: Accessible forms and valid form semantics
- Practice:
  1. Use one form for one submission flow.
  2. Group related options with fieldset and legend.
  3. Use radio for one-of-two choices like Yes/No.

## 7. Meetings Table Accessibility Improved

### What changed
- Added caption to the meeting schedule table.
- Added thead, tbody, and scope attributes for table headers.

### Why this was changed
- Tables need clear structure for assistive technologies.
- Explicit table semantics improve clarity for both users and code maintainers.

### Why this is better
- Better screen reader interpretation.
- Better long-term maintainability when rows are updated.

### Learn more
- Topic: Accessible table markup
- Practice:
  1. Use caption to describe purpose.
  2. Use thead and tbody for structure.
  3. Use scope="col" for column headers.

## 8. Membership Page Structural Errors Fixed

### What changed
- Removed duplicate closing tags.
- Removed unmatched closing div.
- Added better heading hierarchy.

### Why this was changed
- Invalid closing tags can break rendering and validator results.

### Why this is better
- Valid HTML document flow.
- More predictable rendering across browsers.

### Learn more
- Topic: HTML validation and parser recovery
- Practice:
  1. Use an HTML validator after edits.
  2. Watch for unmatched opening/closing tags.

## 9. CSS Improvements for Stability and Accessibility

### What changed
- Updated style.css to support button-based nav controls.
- Added clear focus-visible outline styling for keyboard users.
- Removed layout shifting logic caused by body padding-right when sidebar opens.
- Added readable table caption styling.
- Added visible backdrop background for modal-like sidebar context.

### Why this was changed
- Keyboard users need visible focus indicators.
- Layout shifts reduce perceived quality and can disorient users.
- Sidebar interaction should feel clear and intentional.

### Why this is better
- Better usability and accessibility.
- More stable page layout while opening/closing mobile menu.
- Better visual feedback for interaction states.

### Learn more
- Topic: Accessible CSS interaction design
- Practice:
  1. Add focus-visible states to interactive elements.
  2. Avoid shifting full-page layouts during overlays.
  3. Keep transitions smooth but subtle.

## 10. Image CSS Side Effects Reduced

### What changed
- Updated images.css so broad image defaults are scoped more safely to main and nav contexts.

### Why this was changed
- Global image rules can affect future components unexpectedly.

### Why this is better
- Lower risk of style collisions as site features grow.

### Learn more
- Topic: CSS specificity and scope
- Practice:
  1. Prefer scoped selectors over global element selectors.
  2. Keep utility classes explicit and reusable.

## 11. Repo Hygiene Added

### What changed
- Added .gitignore entries for local Visual Studio artifacts and user-specific files.

### Why this was changed
- Local development metadata should not be versioned.

### Why this is better
- Cleaner repository history.
- Fewer noisy diffs and merge conflicts.

### Learn more
- Topic: Git hygiene and repository standards
- Practice:
  1. Keep environment-specific files out of version control.
  2. Review staged files before every commit.

## 12. Validation Report Updated

### What changed
- Updated HTML_VIOLATIONS_REPORT.md to reflect the cleaned and validated HTML state.

### Why this was changed
- Documentation should reflect current code quality, not old issues.

### Why this is better
- Reliable project records.
- Better trust for future maintainers and reviewers.

### Learn more
- Topic: Engineering documentation quality
- Practice:
  1. Update reports after major refactors.
  2. Include both old issue summary and resolved status.

## Page-by-Page Summary of Improvements

### Home
- Added viewport meta.
- Added semantic main and h1.
- Moved nav logic to shared script.
- Replaced action links with buttons.

### About
- Added viewport meta.
- Added meaningful content section with main and h1.
- Switched to shared nav behavior.

### Contact
- Fixed form validity.
- Improved semantic contact details with address.
- Improved yes/no input design.

### Meetings
- Added semantic table structure and caption.
- Added main and h1.
- Unified nav behavior.

### Membership
- Removed invalid closing tags and unmatched div.
- Added h1 and improved heading hierarchy.

### Site Map
- Added main and h1.
- Kept sitemap image with clearer alt text.
- Unified nav behavior.

## Practical Learning Plan (4 Weeks)

### Week 1: HTML Structure and Semantics
- Learn: heading hierarchy, main/nav/section, forms and labels.
- Build: one simple page with fully semantic structure.

### Week 2: Accessibility Basics
- Learn: keyboard focus, aria labels, form grouping.
- Build: one nav drawer with open/close buttons and Escape close.

### Week 3: CSS Architecture
- Learn: scoped selectors, utility classes, focus styles, responsive breakpoints.
- Build: one stylesheet that avoids broad global side effects.

### Week 4: JavaScript Maintainability
- Learn: event listeners, shared modules, reducing duplication.
- Build: one reusable script used by at least three pages.

## Free Learning Resources
- MDN Web Docs (HTML, CSS, JavaScript, Accessibility)
- web.dev (Core web fundamentals and accessibility)
- W3C WAI tutorials (accessibility patterns)
- A11Y Project (practical accessibility checklists)

## Final Result
Lions V5 AI now has significantly improved:
- Validity
- Accessibility
- Maintainability
- Readability
- Consistency across pages

This foundation is much better for future growth, easier team collaboration, and safer content updates.
