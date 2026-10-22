# Décalco

Un jeu de décalcomanies pour enfants : on choisit un sticker sur la planche, on le place sur un paysage, puis on le frotte pour le décalquer.

- Plusieurs paysages (savane, forêt…), à choisir avec le bouton 🗺️ Paysage. Chacun garde ses décalcos.
- On peut décoller une décalco posée, la passer devant ou derrière les autres.
- Sur téléphone : grande scène avec zoom et déplacement, planche en carrousel en bas.
- La page est enregistrée dans le navigateur.

## Jouer

Ouvrir `index.html` via un serveur web : GitHub Pages, ou en local avec `python3 -m http.server` puis http://localhost:8000.

`?theme=foret` dans l'adresse ouvre directement un paysage.

`python3 build.py` crée une version en un seul fichier, `dist/decalco.html`, pratique à envoyer par mail.

## Fichiers

- `index.html` : le jeu
- `src/assets.js` : les paysages (`window.THEMES`) et tous les stickers (`window.STICKERS`), chacun rattaché à un thème. L'ordre de la liste est l'ordre de la planche.
- `assets/stickers/<theme>/*.webp` : les stickers, un dossier par thème. Ceux de `commun` (soleil, nuage, rocher) vont avec tous les paysages.
- `assets/scene.webp`, `assets/scene-<theme>.webp` : les fonds (`assets/scene.jpg` sert d'aperçu og:image)
- `tools/` : outils pour préparer les images générées avec ChatGPT (voir plus bas)

Images générées avec ChatGPT, voir `assets/CREDITS.md`.

## Ajouter un paysage

Un paysage est jouable dès qu'il est déclaré dans `window.THEMES` avec son fond. Ses stickers sont ceux dont le `theme` porte le même nom.

### Le fond

1. Le générer dans ChatGPT avec le prompt ci-dessous, en joignant `assets/scene.jpg` comme référence de style.
2. Le préparer : `python3 tools/fond.py fond.png foret` (recadre en 16:10, 1600 × 1000, écrit `assets/scene-foret.webp`).

> Garde exactement le même style que l'image jointe (dessin cartoon pour enfants, couleurs chaudes et lumineuses, même cadrage).
> Paysage de {thème}, format paysage 16:10, vide de tout animal et de tout personnage.
> Cadrage : horizon dans le quart haut de l'image, avec un peu de ciel ; tout le reste est un grand sol dégagé et plat, pour y coller des stickers.
> Les éléments de décor (arbres, rochers, plantes) restent sur les bords et au loin ; le centre et le bas de l'image sont libres.

### Les stickers

1. Générer une planche dans ChatGPT avec le prompt ci-dessous, en joignant un sticker existant comme référence (par exemple `assets/stickers/savane/lion.webp`).
2. Si ChatGPT a dessiné un faux damier gris au lieu d'un fond transparent : `python3 tools/damier.py planche.png planche-ok.png`.
3. La découper :
   ```
   python3 tools/decouper.py planche.png 4 2 foret deer fox boar squirrel badger frog mushroom fir
   ```
   Les ids se lisent de gauche à droite, ligne par ligne (`-` pour sauter une case). Les stickers arrivent dans `assets/stickers/<theme>/`.
4. Coller les lignes affichées dans `src/assets.js`, puis corriger le nom français et le `scale` (taille relative : 1 = animal moyen, 1.6 = girafe, 0.4 = insecte).

> Garde exactement le même style que l'image jointe (trait, couleurs, contour blanc).
> Planche de stickers pour enfants, {X} colonnes × {Y} lignes, un sujet par case, bien espacés, aucun ne touche son voisin, fond transparent (PNG).
> Style : dessin cartoon arrondi, contour blanc épais autour de chaque sticker, couleurs douces et chaudes, vue de trois quarts, corps entier.
> Sujets, dans l'ordre, avec des expressions variées : {liste, avec une expression pour chacun : grand sourire, sourire bouche fermée, air curieux…}.

Les planches et images d'origine ne sont pas gardées dans le dépôt.
