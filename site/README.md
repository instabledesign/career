# Site du parcours (prototype)

Site statique **Astro** généré à partir de l'historique Git du dépôt parent.

- `src/lib/git.mjs` : lit `git log` (branches locales, hors `backup/*`).
- `src/lib/graph.mjs` : attribue les voies du graphe et calcule les tracés.
- `src/lib/career.mjs` : associe les commits aux missions, calcule durées et années cumulées par techno.
- `src/data/missions.json` : contenu rédigé de chaque mission (texte généralisé, sans numéro de ticket). Le début et la fin viennent des **messages de commit** (`start` / `end`).
- `../.github/workflows/pages.yml` : build + déploiement sur GitHub Pages.

```
npm install
npm run dev        # http://localhost:4321
npm run build      # génère public/ (dossier publié par le workflow GitHub Pages)
CAREER_REPO=/chemin/vers/le/depot npm run build
```

Lien direct vers une mission : `/#tf1`, `/#believe`, …
