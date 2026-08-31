# Rafayel Ghazaryan — Developer Portfolio

My personal portfolio — a single-page React application with an interactive 3D
UI, presenting my skills, projects and CV.

**Live:** <https://ghrafayel.github.io/>

<!-- Optional: add docs/screenshot.png and uncomment
![Portfolio screenshot](docs/screenshot.png)
-->

---

## ✨ Features

- **3D particle background** that reacts to the colour theme (`three.js` / React Three Fiber)
- **3D skills constellation** — skill icons orbiting a distorted core sphere, auto-rotating and draggable
- **3D "cover-flow" projects carousel** — click a side card, use the arrows, swipe, arrow keys or the dots to bring a project to the centre
- **Light / dark mode** toggle, driven by a `.dark` class on `<html>` and a custom Tailwind variant
- **Scroll-reveal animations** (AOS) and micro-interactions (Framer Motion)
- **Content-driven** — every skill, project, language and nav link lives in one file: [`portfolio/src/components/data.jsx`](portfolio/src/components/data.jsx)
- **Downloadable CV** (English) and **Lebenslauf** (German)
- Fully **responsive**, mobile-first

---

## 🛠️ Tech stack

| Area | Tooling |
|------|---------|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vite.dev/) (`rolldown-vite`) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite` |
| 3D | [three.js](https://threejs.org/), [@react-three/fiber](https://r3f.docs.pmnd.rs/), [@react-three/drei](https://github.com/pmndrs/drei) |
| Animation | [AOS](https://michalsnik.github.io/aos/), [Framer Motion](https://www.framer.com/motion/) |
| Icons | [lucide-react](https://lucide.dev/), [react-icons](https://react-icons.github.io/react-icons/) |
| Linting | ESLint 9 (flat config) |
| Hosting | GitHub Pages |

**Requirements:** Node.js `20.19+` or `22+`.

---

## 📂 Repository layout

```text
GhRafayel.github.io/
├─ index.html          # published build entry (served by GitHub Pages)
├─ assets/             # published build output (JS, CSS, images)
└─ portfolio/          # ← the source application
   ├─ index.html
   ├─ vite.config.js
   ├─ public/
   └─ src/
      ├─ main.jsx
      ├─ App.jsx        # composes every section + the 3D background
      ├─ index.css      # Tailwind entry + dark-mode variant
      ├─ assets/        # images, icons, CV / Lebenslauf PDFs
      └─ components/
         ├─ Navbar.jsx      # fixed nav, theme toggle, mobile menu, scroll-spy
         ├─ Hero.jsx        # intro, photo, embeds the skills scene
         ├─ About.jsx       # bio, highlight grid, core stack, CV downloads
         ├─ Projects.jsx    # 3D cover-flow carousel of project cards
         ├─ Skills.jsx      # wraps the 3D skills constellation
         ├─ Footer.jsx      # contact / social links, back-to-top
         ├─ data.jsx        # nav items, languages, projects, skills
         └─ three/
            ├─ ParticleField.jsx       # animated particle background
            ├─ TechConstellation.jsx   # 3D sphere of skill icons
            └─ ProjectsHeaderScene.jsx # wireframe grid floor behind the heading
```

> The repository root is the **deployed site**. All development happens inside `portfolio/`.

---

## 🚀 Getting started

```bash
cd portfolio
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
```

Other scripts:

```bash
npm run build    # production build → portfolio/dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

---

## ✏️ Editing the content

All copy and data is centralised in [`portfolio/src/components/data.jsx`](portfolio/src/components/data.jsx):

| Key | Drives |
|-----|--------|
| `navItems` | navigation links and scroll-spy targets |
| `languages` | spoken-language flags in the hero |
| `projects.low_level` | project cards — `title`, `desc`, `image`, `tags`, `href` |
| `skills` | skill nodes in the 3D constellation — `name` + `icon` (image) or `Icon` (react-icons component) |

To add a project: import its image at the top of the file and push a new object
into `projects.low_level`. No component changes needed.

---

## 📦 Deployment

GitHub Pages serves this repo from its **root**, so a deploy means building in
`portfolio/` and copying the output up one level.

```bash
cd portfolio
npm run build
rm -rf ../assets ../index.html
mv dist/assets dist/index.html ../
rm -r dist
cd ..
git add .
git commit -m "deploy: update site"
git push
```

The site is live at <https://ghrafayel.github.io/> a minute or two after the push.

> Build assets are referenced with absolute paths (`/assets/...`), which is
> correct because the site is served from the domain root.

---

## 📫 Contact

- **Portfolio:** <https://ghrafayel.github.io/>
- **GitHub:** [@GhRafayel](https://github.com/GhRafayel)
- **LinkedIn:** [rafayel-ghazaryan](https://www.linkedin.com/in/rafayel-ghazaryan-b1623426a)
- **Email:** ghazarysnrafayel@gmail.com

---

<sub>© Rafayel Ghazaryan. Code is MIT-licensed; personal content, images and CV are not.</sub>
