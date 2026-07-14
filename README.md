# Deepika Joshi | Portfolio (React + Vite)

This is your original portfolio, rebuilt in React with the exact same design
(same `style.css` / `responsive.css`, same look, same dark mode). It's a
frontend-only Vite project — no backend, no server.

## 1. Install dependencies

```bash
npm install
```

## 2. Add your images and resume

The original project referenced files that weren't included in the upload.
Drop them into the `public/` folder using these exact paths so the app can
find them:

```
public/
  DeepikaPhoto.jpeg
  DeepikaJoshiResume_.pdf
  images/
    real-estate.png
    ewaste.png
    certificates/
      java.jpg
      dbms.jpg
      genai.jpg
```

(Anything in `public/` is served from the site root, so `public/DeepikaPhoto.jpeg`
becomes `/DeepikaPhoto.jpeg` — matching what the components already expect.)

## 3. Run locally

```bash
npm run dev
```

Opens at `http://localhost:5173`.

## 4. Build for production

```bash
npm run build
```

Outputs static files to `dist/` — deploy that folder anywhere (Netlify,
Vercel, GitHub Pages, etc.).

## Project structure

```
src/
  components/     One component per section (Navbar, Hero, About, Skills,
                   Projects, Experience, Certifications, Footer, ScrollTopButton)
  hooks/          useTheme, useActiveSection, useScrollTop — replace the
                   old script.js logic
  data/           portfolioData.js — all your content (skills, projects,
                   experience, certs, contact info) in one place, so you can
                   edit content without touching component code
  style.css       unchanged from the original
  responsive.css  unchanged from the original
```

## What changed from the original vanilla JS version

- All DOM manipulation from `script.js` is now React state + hooks.
- Fixed a bug: the old `script.js` looked for `#scrollTop` but the button
  never existed in `index.html`, which would throw a console error. It's now
  a real component.
- Content (skills, projects, experience, certifications, contact links) is
  centralized in `src/data/portfolioData.js` — edit that one file to update
  your site instead of hunting through markup.
- Visual design, colors, fonts, and layout are untouched.
