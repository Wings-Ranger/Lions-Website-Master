# Harcourt Lions Website - Client Proposal and Repository Documentation

Prepared: March 19, 2026

## 1. Proposal Summary

This document presents the current Lions v3 website package as a client-ready proposal. It explains what is included, what each file does, and how the deliverable supports a maintainable, easy-to-update club website.

The website is a static, multi-page build using HTML and CSS, designed for simple hosting and low ongoing maintenance overhead.

## Authorship and AI Attribution

This repository includes AI-assisted changes made during the Lions v4 to Lions V5 AI upgrade.

For a file-by-file index of AI-attributed source changes, see `AI_CREDIT_SUMMARY.md`.

## 2. Project Goals

- Deliver a clear online presence for Harcourt Lions.
- Provide simple navigation across club information pages.
- Keep content update workflows approachable for non-developers.
- Maintain compatibility with standard web hosting (no build pipeline required).

## 3. Scope of Delivery

Included in this delivery:
- Public-facing website pages.
- Core stylesheets.
- Image assets.
- End-user and client documentation.
- Development environment metadata currently present in the repository.

Not included in this package:
- A backend application runtime.
- CMS platform integration.
- Automated deployment pipeline.

## 4. File-by-File Documentation (Complete Repository Coverage)

### 4.1 Website Pages and Styling

| File | Purpose | Client Relevance |
|---|---|---|
| `Home.html` | Landing page and primary entry point for site visitors. | High |
| `about-us.html` | Club background and organizational information page. | High |
| `membership.html` | Membership details and onboarding information. | High |
| `meetings.html` | Meeting schedule/content page for club events. | High |
| `contact-us.html` | Contact form/details page for visitor enquiries. | High |
| `sitemap.html` | Human-readable site map page and navigational aid. | Medium |
| `style.css` | Main visual theme, layout, and responsive behavior styles. | High |
| `images.css` | Supplemental styling specific to image handling/presentation. | Medium |

### 4.2 Media Assets

| File | Purpose | Client Relevance |
|---|---|---|
| `images/lions-logo.jpg` | Official Lions branding/logo asset used across pages. | High |
| `images/lions-billboard.jpg` | Hero/banner visual used on the home page. | High |
| `images/sitemap.png` | Graphic asset used by the sitemap page. | Medium |

### 4.3 Root Documentation

| File | Purpose | Client Relevance |
|---|---|---|
| `README.md` | Primary project proposal and technical overview (this file). | High |
| `AI_CREDIT_SUMMARY.md` | Index of V4 to V5 AI-attributed source changes and their related change-log references. | Low |

### 4.4 Supporting Documentation Package

| File | Purpose | Client Relevance |
|---|---|---|
| `readme/README.md` | Supplementary technical notes for maintainers. | Medium |
| `readme/README_FOR_CLIENTS_CHANGES.md` | Client-focused guide for safe content changes. | High |
| `readme/README_FOR_NON_DEVS.md` | Plain-language instructions for non-technical editors. | High |
| `readme/README_FOR_ABSOLUTE_BEGINNERS.md` | Zero-technical-knowledge quick-start guide for first-time editors. | High |
| `readme/original_files.zip` | Archived snapshot/reference copy of earlier project files. | Low |

### 4.5 Project and Tooling Metadata

| File | Purpose | Client Relevance |
|---|---|---|
| `.github/agents/documentation-agent.agent.md` | VS Code/GitHub Copilot agent configuration for documentation workflows. | Low |
| `.vs/slnx.sqlite` | Visual Studio local workspace database/cache. | Low (development only) |
| `.vs/VSWorkspaceState.json` | Visual Studio local workspace state settings. | Low (development only) |
| `.vs/Lions.slnx/config/applicationhost.config` | Local IIS Express host configuration for development/testing. | Low (development only) |
| `.vs/Lions.slnx/FileContentIndex/0b7786b5-d122-4b0c-92d2-bc39ea255b8e.vsidx` | Visual Studio internal file index cache. | Low (development only) |
| `.vs/Lions.slnx/FileContentIndex/9d22bed8-6290-490a-a555-d8f71b4cb0c4.vsidx` | Visual Studio internal file index cache. | Low (development only) |
| `.vs/Lions.slnx/FileContentIndex/facb7592-72f6-439c-aacb-261d1448de6b.vsidx` | Visual Studio internal file index cache. | Low (development only) |
| `.vs/Lions.slnx/v18/DocumentLayout.json` | Local editor tab/pane layout metadata. | Low (development only) |

## 5. Information Architecture

Proposed visitor flow:
1. Start at `Home.html`.
2. Learn about the club in `about-us.html`.
3. Review joining details in `membership.html`.
4. Confirm schedules through `meetings.html`.
5. Contact the club using `contact-us.html`.
6. Use `sitemap.html` for full page overview.

## 6. Hosting and Maintenance Model

- Hosting requirement: any standard static web host.
- Runtime requirement: none for normal site operation.
- Content update path: direct HTML/CSS edits or guided updates via docs in `readme/`.
- Backup recommendation: keep versioned copies of `images/`, page files, and `style.css` before large edits.

## 7. Quality and Readiness Notes

Current package is ready for static deployment. During review, two page-title inconsistencies were observed and should be corrected before final production handoff:

- `contact-us.html` currently reports `<title>About Us</title>`.
- `sitemap.html` currently reports `<title>Meetings</title>`.

Correcting these titles will improve browser tab labeling, accessibility context, and search clarity.

## 8. Acceptance Checklist

- All pages open successfully from `Home.html`.
- Navigation links resolve correctly between all HTML pages.
- Image assets load on desktop and mobile.
- Styling remains consistent and responsive.
- Client documentation in `readme/` is available to non-technical users.

## 9. Proposed Next Steps

1. Approve this repository structure and documentation baseline.
2. Confirm final copy and branding updates per page.
3. Apply final QA pass across major browsers.
4. Publish to agreed hosting environment.