# Décalco

Un jeu de décalcomanies : on choisit des stickers d'animaux et on les colle sur un paysage de savane.

## Jouer

Le jeu tourne directement dans le navigateur : ouvrir `index.html` via un serveur web (GitHub Pages, ou en local avec `python3 -m http.server` puis http://localhost:8000).

## Fichiers

- `index.html` : le jeu
- `src/assets.js` : la liste des stickers et du fond
- `assets/stickers/*.webp`, `assets/scene.webp` : les images (`assets/scene.jpg` sert d’aperçu og:image) (générées avec ChatGPT, voir `assets/CREDITS.md`)
- `build.py` : crée une version en un seul fichier (`dist/decalco.html`), utile pour l'envoyer par mail
