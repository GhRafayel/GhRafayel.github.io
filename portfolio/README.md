# portfolio — source app

The React + Vite source for my portfolio site. Full documentation (features,
stack, structure, deployment) lives in the [repository README](../README.md).

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

| Script | Purpose |
|--------|---------|
| `npm run dev` | dev server with HMR |
| `npm run build` | production build → `dist/` |
| `npm run preview` | preview the production build |
| `npm run lint` | run ESLint |

## Deploy

GitHub Pages serves the repository root, so a deploy builds here and copies the
output up one level:

```bash
npm run build
rm -rf ../assets ../index.html
mv dist/assets dist/index.html ../
rm -r dist
cd ..
git add . && git commit -m "deploy: update site" && git push
```

Live at <https://ghrafayel.github.io/>.
