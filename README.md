# Décalco

Un jeu de décalcomanies : on choisit des stickers d'animaux et on les colle sur un paysage. Le bouton 🗺️ Paysage change de thème ; chaque paysage garde ses décalcos.

## Jouer

Le jeu tourne directement dans le navigateur : ouvrir `index.html` via un serveur web (GitHub Pages, ou en local avec `python3 -m http.server` puis http://localhost:8000).

## Fichiers

- `index.html` : le jeu
- `src/assets.js` : les thèmes (fond de chaque thème) et la liste de tous les stickers, chacun avec son thème
- `assets/stickers/<theme>/*.webp` : les stickers, un dossier par thème
- `assets/scene.webp` : le fond de la savane (`assets/scene.jpg` sert d'aperçu og:image)
- `assets/scene-<theme>.webp` : le fond des autres thèmes
- `tools/decouper.py` : découpe une planche ChatGPT en stickers
- `tools/fond.py` : prépare un fond ChatGPT (16:10, 1600 × 1000, WebP)
- `build.py` : crée une version en un seul fichier (`dist/decalco.html`), utile pour l'envoyer par mail

Images générées avec ChatGPT, voir `assets/CREDITS.md`.

## Thèmes

| Dossier | Thème | État |
|---|---|---|
| `savane` | Savane | en jeu |
| `commun` | Soleil, nuage, rocher | ajouté à tous les thèmes |
| `foret` | Forêt européenne | en jeu |
| `jungle` | Jungle | en réserve |
| `desert` | Désert | en réserve |
| `montagne` | Montagne | en réserve |

Les thèmes à venir (océan, banquise…) auront chacun leur dossier.

Un thème est jouable dès qu'il est dans `window.THEMES` (`src/assets.js`) avec son fond. On peut ouvrir directement un thème avec `?theme=foret` dans l'adresse.

## Ajouter un fond

1. Générer le fond dans ChatGPT avec le prompt ci-dessous, en joignant `assets/scene.jpg` comme référence de style.
2. Le préparer : `python3 tools/fond.py fond.png foret` (écrit `assets/scene-foret.webp`).
3. Ne pas garder l'image d'origine dans le dépôt.

### Prompt ChatGPT (fond)

> Garde exactement le même style que l'image jointe (dessin cartoon pour enfants, couleurs chaudes et lumineuses, même cadrage).
> Paysage de {thème}, format paysage 16:10, vide de tout animal et de tout personnage.
> Cadrage : horizon dans le quart haut de l'image, avec un peu de ciel ; tout le reste est un grand sol dégagé et plat, pour y coller des stickers.
> Les éléments de décor (arbres, rochers, plantes) restent sur les bords et au loin ; le centre et le bas de l'image sont libres.

## Ajouter des stickers

1. Générer une planche dans ChatGPT avec le prompt ci-dessous (X colonnes × Y lignes).
2. La découper :
   ```
   python3 tools/decouper.py planche.png 4 2 savane meerkat baboon cheetah hyena ostrich vulture hornbill gazelle
   ```
   Les ids se lisent de gauche à droite, ligne par ligne (`-` pour sauter une case).
   Les stickers arrivent dans `assets/stickers/savane/`.
3. Coller les lignes affichées dans `src/assets.js`, puis corriger le nom français et le `scale` (taille relative : 1 = animal moyen, 1.6 = girafe, 0.4 = insecte).
4. Ne pas garder la planche dans le dépôt.

### Prompt ChatGPT

Joindre un sticker existant (par exemple `assets/stickers/savane/lion.webp`) comme référence de style.

> Garde exactement le même style que l'image jointe (trait, couleurs, contour blanc).
> Planche de stickers pour enfants, {X} colonnes × {Y} lignes, un sujet par case, bien espacés, aucun ne touche son voisin, fond transparent (PNG).
> Style : dessin cartoon arrondi, contour blanc épais autour de chaque sticker, couleurs douces et chaudes, vue de trois quarts, corps entier.
> Sujets, dans l'ordre, avec des expressions variées : {liste, avec une expression pour chacun : grand sourire, sourire bouche fermée, air curieux…}.

### À générer pour la savane

- Fait (planche 1) : suricate, babouin, guépard, hyène, autruche, vautour, calao, gazelle
- Fait (planche 2) : chacal, serval, oryx, marabout, pintade, porc-épic, baobab, termitière

### À générer pour la forêt

- Fait : fond (clairière d'automne)
- Fait (planche 1) : cerf, renard, sanglier, écureuil, blaireau, grenouille, champignon, sapin
