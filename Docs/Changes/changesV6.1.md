# Lions V5.3 AI Change Log (V6.1)

## Scope
- Baseline: changesV6.md completion
- Generated: 2026-03-30

## Summary
Added a new maintainer-facing GitHub version control guide and linked it from the main Docs index.

This update improves onboarding quality for new volunteers by documenting safe branch, commit, pull request, and rollback workflows.

---

## Files Changed

### Docs/readme/README_FOR_GITHUB_VERSION_CONTROL.md (NEW)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Created** a dedicated beginner-friendly GitHub guide for maintainers. | Gives new contributors a single source of truth for version control process. |
| 2 | **Added** plain-English definitions of core Git terms (repo, commit, branch, PR, merge, pull, push). | Reduces onboarding friction for non-technical editors joining maintenance. |
| 3 | **Added** recommended team workflow: pull -> branch -> edit -> commit -> push -> PR -> review -> merge. | Encourages safer collaboration and reduces risk of breaking `main`. |
| 4 | **Added** branch naming and commit message examples tailored to this project. | Improves consistency and traceability in project history. |
| 5 | **Added** command-line quick start (PowerShell) and GitHub Desktop workflow steps. | Supports both technical and non-technical maintainers with practical instructions. |
| 6 | **Added** review checklist and rollback guidance using `git revert`. | Promotes safe recovery from mistakes without rewriting shared history. |
| 7 | **Added** suggested repository policy (protect `main`, require review). | Establishes maintainable governance for long-term handover. |

---

### Docs/README.md (UPDATED)

| # | Area / Description of Change | Why it is better |
|---:|---|---|
| 1 | **Added** `readme/README_FOR_GITHUB_VERSION_CONTROL.md` to section 4.4 (Supporting Documentation Package) with purpose and relevance. | Makes the new guide discoverable from the central documentation index. |


---

- V6.1 is documentation-only (no source HTML/CSS/JS behavior changes).
- This release focuses on maintainability and contributor onboarding.
- Keep entries focused on user-visible behavior and maintainability.
