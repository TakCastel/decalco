# Décalco

Un jeu de décalcomanies : on choisit des stickers d'animaux et on les colle sur un paysage (pour l'instant la savane).

## Jouer

Le jeu tourne directement dans le navigateur : ouvrir `index.html` via un serveur web (GitHub Pages, ou en local avec `python3 -m http.server` puis http://localhost:8000).

## Fichiers

- `index.html` : le jeu
- `src/assets.js` : les thèmes (fond de chaque thème) et la liste de tous les stickers, chacun avec son thème
- `assets/stickers/<theme>/*.webp` : les stickers, un dossier par thème
- `assets/scene.webp` : le fond de la savane (`assets/scene.jpg` sert d'aperçu og:image)
- `tools/decouper.py` : découpe une planche ChatGPT en stickers
- `build.py` : crée une version en un seul fichier (`dist/decalco.html`), utile pour l'envoyer par mail

Images générées avec ChatGPT, voir `assets/CREDITS.md`.

## Thèmes

| Dossier | Thème | État |
|---|---|---|
| `savane` | Savane | en jeu |
| `commun` | Soleil, nuage, rocher | ajouté à tous les thèmes |
| `foret` | Forêt européenne | en réserve, pas encore de fond |
| `jungle` | Jungle | en réserve |
| `desert` | Désert | en réserve |
| `montagne` | Montagne | en réserve |

Les thèmes à venir (océan, banquise…) auront chacun leur dossier.

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

> Planche de stickers pour enfants, {X} colonnes × {Y} lignes, un sujet par case, bien espacés, aucun ne touche son voisin, fond transparent.
> Style : dessin cartoon arrondi, contour blanc épais autour de chaque sticker, couleurs douces et chaudes, petite ombre interne, vue de trois quarts, en pied (corps entier).
> Tous les animaux ont le même visage : grands yeux ronds brillants, sourire ouvert et joyeux.
> Sujets, dans l'ordre : {liste}.

### À générer pour la savane

- Suricate, babouin (façon Rafiki), guépard, hyène, autruche, vautour, calao (façon Zazu), gazelle de Thomson
- À refaire en souriant, comme les autres : buffle, gnou
- Décor : baobab, termitière, mare
