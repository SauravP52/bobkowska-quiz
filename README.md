# React Quiz (Vite + TypeScript)
A tiny, clean quizzing app built with React + Vite + TypeScript. Includes GitHub Actions to deploy to GitHub Pages.

## Local Dev
```bash
npm i
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. **Create repo** on GitHub, e.g. `REPO_NAME`.
2. In `vite.config.ts`, set: `base: '/REPO_NAME/'` (or `'/'` if using `username.github.io` root).
3. Push code:
   ```bash
   git init
   git add .
   git commit -m "init: react quiz"
   git branch -M main
   git remote add origin https://github.com/<YOUR_USERNAME>/REPO_NAME.git
   git push -u origin main
   ```
4. Go to **Settings → Pages** and set **Source: GitHub Actions** (if prompted). The provided workflow will build and deploy automatically on each push to `main`.
5. Your site will be live at: `https://<YOUR_USERNAME>.github.io/REPO_NAME/`.

## Customize
- Edit questions in `src/questions.ts`.
- Tweak styling in `src/styles.css`.
- Add features: per-question timers, categories, persistence with `localStorage`, etc.