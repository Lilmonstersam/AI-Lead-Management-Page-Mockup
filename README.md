# AI Lead Management Page Mockup

A React + Vite + TypeScript mockup for an AI-powered lead management landing page, built with Tailwind CSS v4 and the Google Gemini API.

---

## Prerequisites

- **Node.js** v20+
- **npm** v10+
- A **Gemini API key** — get one at [Google AI Studio](https://aistudio.google.com/)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Set your Gemini API key
cp .env.example .env.local
# then edit .env.local and set GEMINI_API_KEY=your_key_here

# 3. Start the dev server (http://localhost:3000)
npm run dev
```

Other useful scripts:

| Command | Description |
|---|---|
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | TypeScript type-check |
| `npm run clean` | Remove `dist/` folder |

---

## Deployment — GitHub Pages

This repo uses **GitHub Actions** to automatically build and deploy to **GitHub Pages** on every push to `main`.

### One-time setup

1. **Enable GitHub Pages** in your repo settings:
   - Go to **Settings → Pages**
   - Set **Source** to **GitHub Actions**

2. **Add your secret**:
   - Go to **Settings → Secrets and variables → Actions**
   - Add a new secret: `GEMINI_API_KEY` = your Gemini API key

3. Push to `main` — the workflow handles the rest.

The workflow file is at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

---

## Project Structure

```
.
├── src/                   # React source code
├── index.html             # HTML entry point
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript config
├── .env.example           # Environment variable template
└── .github/
    └── workflows/
        └── deploy.yml     # GitHub Actions CI/CD
```

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `GEMINI_API_KEY` | ✅ | Google Gemini API key |

Copy `.env.example` to `.env.local` for local dev. **Never commit `.env.local`** — it's in `.gitignore`.
