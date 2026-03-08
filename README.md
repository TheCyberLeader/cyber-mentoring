# Cybersecurity Mentoring Toolkit

A local-first web application for structured cybersecurity mentoring programs.

<img width="1006" height="550" alt="Screenshot 2026-03-08 at 12 46 47 PM" src="https://github.com/user-attachments/assets/82717ac0-71cf-4e55-9310-b1236be3ed16" />


## 🚀 Use the App

**No installation needed. Just click and go:**

The app runs entirely in your browser. Nothing is installed, nothing is uploaded, and no account is required.

---

## Who Is This For?

This toolkit is designed for **mentor and mentee pairs** in a structured cybersecurity mentoring program. It helps you:

- Set up your mentor or mentee profile
- Define SMART goals for the program
- Log and track your sessions
- Track milestones like certifications, interviews, and wins
- Access career resources by cybersecurity track
- Generate and send email templates
- Export your data as PDF or JSON for your records

---

## Features

- Role selection (mentor / mentee) with profile setup
- Goal-setting worksheet with SMART goal framework
- Session log and progress tracker (4-session program)
- Milestone tracker for certifications, interviews, and wins
- Role-specific resource library (5 cybersecurity career tracks)
- Email templates with auto-fill from profile data
- Mentor and mentee guides with conversation starters
- PDF and JSON export/import for sharing and backup
- All data stored locally in the browser — no server, no accounts, no tracking

---

## Security & Privacy

See [SECURITY.md](SECURITY.md) for the full security model, privacy details, and how to report vulnerabilities.

---

## Customizing This Toolkit

See [WHITELABEL.md](WHITELABEL.md) for a step-by-step guide to forking and customizing this toolkit.

---

## Local Development

> This section is for developers who want to run or modify the code locally.
```bash
git clone https://github.com/TheCyberLeader/cyber-mentoring.git
cd cyber-mentoring
npm install
npm run dev
```

Open http://localhost:5173/cyber-mentoring/ in your browser.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run deploy` | Build and deploy to GitHub Pages |
| `npm run lint` | Run ESLint |
| `npm run check-links` | Check all external URLs in data files for dead links |

### Project Structure
```
src/
├── components/          Shared UI components
├── data/                Static content (no user data)
├── pages/               Route-level page components
├── utils/               Utility modules
├── App.jsx              Router and layout
├── main.jsx             Entry point
└── index.css            Tailwind config and theme colors
scripts/
└── check-links.mjs      URL health checker for data file links
```

### Tech Stack

React 19 · Vite 7 · Tailwind CSS 4 · jsPDF · localStorage

### Deploy to GitHub Pages
```bash
npm run deploy
```

This builds the app and publishes the `dist/` folder via the `gh-pages` branch.

---

## License

MIT — free to use and adapt for any mentoring program.
