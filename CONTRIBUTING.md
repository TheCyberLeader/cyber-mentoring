# Maintenance Guide — Cybersecurity Mentoring Toolkit

This is a personal project maintained solely by Marie Wang. This guide documents the workflow and conventions I follow when making updates, for my own reference and consistency.

---

## Development Workflow

### 1. Issue Tracking

All changes should have a corresponding GitHub Issue created **before** work begins — bug fixes, features, refactors, and documentation updates all count.

Reference the issue number in every commit message:
```
fix: dead links in data files (#12)
feat: add session export to CSV (#15)
docs: update whitelabel guide (#18)
refactor: typescript-migration (#21)
```

---

### 2. All Changes Require a Branch and Pull Request

`main` is branch-protected. **All changes — including small fixes — must go through a feature branch and Pull Request.** Direct pushes to `main` are blocked.

No exceptions. Even a one-line typo fix needs a branch and PR.

---

### 3. Branch and Pull Request Workflow

1. Create a branch following the naming conventions below
2. Make your changes and commit with a signed commit referencing the issue number
3. Push the branch and open a Pull Request
4. Merge the PR — no reviewer approval required (solo project)
5. Delete the branch after merging
6. Run `npm run deploy` after merging if the change affects the webapp

---

### 4. Branch Naming Conventions

| Prefix | Use for |
|---|---|
| `feature/` | New functionality |
| `fix/` | Bug fixes |
| `docs/` | Documentation changes |
| `refactor/` | Code restructuring without behavior changes |

**Examples:** `feature/csv-export`, `fix/navbar-mobile`, `docs/readme-update`, `refactor/typescript-migration`

---

### 5. TypeScript Migration

Before starting a TypeScript migration, always create a branch called `refactor/typescript-migration`. This is a large, cross-cutting change that must go through a Pull Request.

---

### 6. JSON Import Security

The JSON import feature validates file structure and shape but does not sanitize content. Any future changes to import handling should include a content sanitization review.

---

### 7. Pre-Release Checks

Before any release, run the link checker to catch dead external URLs:
```bash
npm run check-links
```

---

### 8. AI-Assisted Development

When using Claude Code (or any AI tool) on this project, the tool must always:

- Show new files **before** creating them
- Show replacements **before** applying them
- Show the plan **before** executing it
- Convert or refactor **one file at a time**, showing each before applying
- **Never apply multiple changes in bulk** without review
- Create GitHub Issues for all changes
- Always use a branch — direct commits to `main` are blocked by branch protection
- Run `npm run check-links` before any release

**No change should be applied to the codebase without the developer reviewing and explicitly approving it first.** This applies to all operations — creates, edits, deletes, and refactors.

---
