# Security Policy

## Security Model

This is a fully static, local-first application. It has no backend, no server,
no database, no authentication, and no external data transmission. All data is
stored in the browser's `localStorage` on the user's device.

The only network requests the app makes are to load its own static assets.
After the initial page load, everything runs offline.

## Scope

Because there is no server or user account system, the attack surface is limited.
Reports are welcome for:

- **Cross-site scripting (XSS)** — any way to execute arbitrary JavaScript via
  the app's UI or data inputs
- **Malicious JSON import** — any way a crafted import file could cause harm
  beyond what React's default output escaping already prevents
- **Dependency vulnerabilities** — known CVEs in bundled npm packages that
  affect this app's functionality
- **Build or supply chain issues** — anything that could cause the distributed
  app to behave differently than the source code

The following are **not** in scope:

- Data loss from clearing browser storage (this is expected browser behavior)
- Shared-device data exposure (documented in the README; users are advised to
  export and clear between sessions)
- GitHub Pages infrastructure or CDN issues

## Reporting a Vulnerability

Please **do not** open a public GitHub issue for security vulnerabilities.

Report vulnerabilities privately using GitHub's built-in security advisory
feature:

1. Go to the **Security** tab of this repository
2. Click **"Report a vulnerability"**
3. Describe the issue, steps to reproduce, and potential impact

I'll respond as soon as possible and work with you on a fix before any public
disclosure.
