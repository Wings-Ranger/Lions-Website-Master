# Website Hosting and Editing Requirements

Prepared: March 25, 2026
Prepared by: Volunteer web support (external to Lions Club)

## 1. Context

This website has been developed as volunteer support for a small local Lions club.

Important:
- The preparer is not a Lions Club member and is acting in a volunteer capacity.
- Ongoing website editing must be possible by nominated local club representatives without requiring a developer for every content update.

## 2. Purpose of This Document

This document defines the minimum hosting and backend requirements needed so the website can:
- remain secure,
- be easy to update,
- and be maintained by local club volunteers after handover.

## 3. Required Outcome

The public website should remain accessible to all visitors, while editing access is restricted to authorised users only.

In simple terms:
- Public pages: anyone can view.
- Editing/admin area: password protected and server controlled.

## 4. Mandatory Requirements (Must Have)

1. Server-side authentication for editing access
- Password protection must be implemented on the backend/server layer.
- Frontend-only password checks (for example JavaScript-only protection) are not acceptable.

2. Role-based access
- Minimum roles required: Admin and Editor.
- Editors can update approved content.
- Admins can manage users and publishing controls.

3. Self-service content editing
- Nominated local club users must be able to update common content without developer intervention.
- Examples: homepage text, meeting details, membership information, contact details, and notices.

4. Staging/preview environment
- A safe preview area is required before publishing to the live website.
- Users should be able to review changes before they are public.

5. Backup and rollback
- Daily backups (or equivalent) must be enabled.
- Previous versions must be recoverable if content is changed by mistake.

6. Audit logging
- The system must record who changed content and when.
- Change history should be available to admins.

7. Account continuity
- At least two local club representatives should hold admin access to prevent lockout.
- A documented password reset/support process must be provided.

## 5. Preferred Content Management Model

Preferred:
- Use a CMS-backed workflow (database or managed content system) with authenticated editing.

Acceptable alternative:
- Structured content files (for example JSON/Markdown) managed via a secure admin interface.

Not acceptable as a long-term model:
- Requiring manual code edits and redeployment for routine content updates.

## 6. Security Baseline

The following security controls are strongly recommended:
- HTTPS only.
- Strong password policy.
- Multi-factor authentication (MFA) for admin users where available.
- Restricted access to admin routes.
- Least-privilege permissions for editor accounts.

## 7. Handover and Support Requirements

At handover, provide:
- Admin URL and login process.
- Named contacts for backend/hosting support.
- Written instructions for adding/removing editor accounts.
- Written instructions for backup restore.
- A short non-technical editor guide for local club volunteers.

## 8. Acceptance Criteria

This requirement is considered met when all statements below are true:

1. Local club editors can log in and update key website content securely.
2. Changes can be previewed before publishing.
3. Changes can be published without developer assistance.
4. Access is server-side protected and role based.
5. Change history and backups are available.

## 9. Decision Request to Hosting Team

Please confirm in writing:
1. Which authentication method will be used.
2. Which CMS/content model will be provided.
3. Which roles/permissions will be configured.
4. Who owns operational support and account recovery.
5. Go-live timeline and handover date.

---

If any of the mandatory requirements cannot be provided, a written alternative workflow and risk statement should be supplied before go-live approval.
