"""Découpe une planche ChatGPT (fond transparent, grille X colonnes × Y lignes) en stickers.

    python3 tools/decouper.py planche.png <colonnes> <lignes> <theme> id1 id2 id3 ...

Les ids se lisent de gauche à droite, ligne par ligne ; "-" saute une case.
Chaque case est recadrée sur son contenu, réduite à 256 px de côté au plus,
puis enregistrée dans assets/stickers/<theme>/<id>.webp.
Le script affiche les lignes à coller dans src/assets.js (nom et scale à ajuster).
La planche d'origine n'est pas gardée dans le dépôt.
"""
import pathlib, sys
import numpy as np
from PIL import Image
from scipy import ndimage

ROOT = pathlib.Path(__file__).resolve().parent.parent
MAX = 256
ALPHA_MIN = 24  # ignore les pixels presque transparents (halo, bruit) pour le recadrage


def main():
    if len(sys.argv) < 6:
        sys.exit(__doc__)
    sheet, cols, rows, theme, ids = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4], sys.argv[5:]
    if len(ids) > cols * rows:
        sys.exit(f"{len(ids)} ids pour {cols * rows} cases")
    im = Image.open(sheet).convert("RGBA")
    px = np.array(im)
    # Les dessins débordent souvent de leur case : on repère chaque forme d'un seul
    # tenant, puis on la range dans la case qui contient son centre.
    solid = px[..., 3] >= ALPHA_MIN
    labels, n = ndimage.label(ndimage.binary_dilation(solid, iterations=4))
    labels[px[..., 3] == 0] = 0
    sizes = ndimage.sum(solid, labels, range(1, n + 1))
    centres = ndimage.center_of_mass(solid, labels, range(1, n + 1))
    cw, ch = im.width / cols, im.height / rows
    best = {}
    for k, ((cy, cx), size) in enumerate(zip(centres, sizes), start=1):
        cell = int(cy // ch) * cols + int(cx // cw)
        if size > best.get(cell, (0, 0))[1]:
            best[cell] = (k, size)
    out = ROOT / "assets" / "stickers" / theme
    out.mkdir(parents=True, exist_ok=True)
    for i, id_ in enumerate(ids):
        if id_ == "-":
            continue
        if i not in best:
            print(f"!! case {i + 1} ({id_}) vide", file=sys.stderr)
            continue
        mask = labels == best[i][0]
        part = px.copy()
        part[~mask] = 0  # efface ce qui appartient aux voisins
        ys, xs = np.nonzero(mask & solid)
        cell = Image.fromarray(part[ys.min():ys.max() + 1, xs.min():xs.max() + 1])
        cell.thumbnail((MAX, MAX), Image.LANCZOS)
        dest = out / f"{id_}.webp"
        cell.save(dest, "WEBP", quality=80, alpha_quality=100, method=6)
        src = dest.relative_to(ROOT).as_posix()
        print(f'  {{ id: "{id_}", theme: "{theme}", name: "{id_}", src: "{src}", '
              f'w: {cell.width}, h: {cell.height}, scale: 1.0 }},')


if __name__ == "__main__":
    main()
