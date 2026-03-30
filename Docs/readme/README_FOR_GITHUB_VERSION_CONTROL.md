# GitHub Version Control Guide For New Maintainers

This guide explains how to use GitHub version control to safely maintain the Harcourt Lions website.

## 1) What version control means

Version control is a history of changes to your files.

With Git and GitHub you can:
- See exactly what changed and when.
- See who made each change.
- Restore earlier versions if something breaks.
- Work on improvements without affecting the live site until ready.

## 2) Why this matters for this website

This site has many related files (`.html`, `.css`, `.js`, and docs). A small edit in one file can affect others.

Using GitHub helps you:
- Avoid accidental loss of work.
- Review changes before publishing.
- Keep a clear handover for new volunteers.
- Collaborate without overwriting each other.

## 3) Tools you can use

Use one of these methods:
- GitHub Desktop (easiest for beginners).
- Git command line (more control).

You can use either method with the same repository.

## 4) Basic terms (plain English)

- Repository (repo): The project folder tracked by Git.
- Commit: A saved snapshot of changes with a message.
- Branch: A separate line of work (safe place to make changes).
- Pull Request (PR): A request to review and merge branch changes.
- Merge: Combine approved branch changes into main.
- Pull: Download latest changes from GitHub.
- Push: Upload your commits to GitHub.

## 5) Recommended team workflow

1. Pull latest changes.
2. Create a new branch for your task.
3. Make and test your edits locally.
4. Commit with a clear message.
5. Push branch to GitHub.
6. Open a Pull Request.
7. Review and merge after approval.

This protects the main branch from untested edits.

## 6) Branch naming examples

Use short, meaningful names:
- `fix/footer-layout`
- `content/update-contact-details`
- `docs/add-github-guide`
- `feature/new-events-section`

## 7) Good commit message examples

Use clear, action-based messages:
- `Fix sticky footer on short pages`
- `Update contact page with correct phone and email`
- `Add gallery page placeholder content`
- `Document GitHub workflow for maintainers`

Avoid vague messages like `changes` or `update stuff`.

## 8) Command-line quick start (PowerShell)

Run these inside the project folder.

## First time only

```powershell
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

## Daily workflow

```powershell
# 1) Make sure you are in the repo folder
cd "C:\Users\lachl\source\repos\Lions V5.3 AI"

# 2) Get latest changes
git pull origin main

# 3) Create and switch to a new branch
git checkout -b docs/add-github-guide

# 4) See what changed
git status

# 5) Stage files
git add Docs/readme/README_FOR_GITHUB_VERSION_CONTROL.md

# 6) Commit
git commit -m "Add GitHub version control guide for maintainers"

# 7) Push branch to GitHub
git push -u origin docs/add-github-guide
```

Then open GitHub in a browser and create a Pull Request.

## 9) GitHub Desktop workflow (no terminal)

1. Open repo in GitHub Desktop.
2. Click Current Branch -> New Branch.
3. Make your file edits.
4. Review changed files in Desktop.
5. Add a summary and description.
6. Click Commit to branch.
7. Click Publish branch / Push origin.
8. Click Create Pull Request.

## 10) How to review before merging

Before approving a PR, check:
- Does the page still load on desktop and mobile?
- Do nav links still work?
- Did any unrelated files change by accident?
- Is the commit message clear?
- Is documentation updated if behavior changed?

## 11) How to roll back safely

If a recent change caused issues:

### Option A: Revert commit on GitHub (recommended)
- Open the commit on GitHub.
- Click Revert.
- Merge the revert PR.

### Option B: Revert from command line

```powershell
# Revert a specific commit by hash
git revert <commit-hash>

# Push the new revert commit
git push
```

Use `git revert` instead of deleting history. It is safer for team projects.

## 12) Do and do not list

Do:
- Pull before starting work.
- Use a branch for each change.
- Commit small logical changes.
- Write clear commit messages.
- Open a PR for review.

Do not:
- Work directly on `main` for major changes.
- Commit unrelated file changes together.
- Force-push shared branches unless everyone agrees.
- Delete commit history to hide mistakes.

## 13) Suggested maintainer policy for this project

- Protect `main` branch on GitHub.
- Require at least one review before merge.
- Require all discussions to be resolved before merge.
- Use PR titles that describe the user-facing change.
- Keep docs in `Docs/` updated whenever behavior changes.

## 14) Quick cheat sheet

```text
Pull latest -> New branch -> Edit -> Test -> Commit -> Push -> PR -> Review -> Merge
```

If each maintainer follows this cycle, the website stays stable, traceable, and easy to hand over to future volunteers.
