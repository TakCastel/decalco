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
ALPHA_MIN = 24   # en dessous, pixel ignoré pour le recadrage (bruit du fond)
ALPHA_SOLID = 128  # partie bien opaque : sert à séparer les stickers dont les halos se touchent
HALO = 8         # en pixels : le halo autour de chaque forme lui est rendu
MIN_PART = 300   # en pixels : en dessous, c'est une poussière du fond, pas un bout de sticker
MIN_CORE = 60    # en pixels : plus petit morceau de dessin coloré qui compte
EDGE = 4         # en pixels : bord extérieur ignoré pour repérer le dessin coloré
WHITE = 225     # au-dessus (sur les trois canaux), c'est le blanc du contour


def main():
    if len(sys.argv) < 6:
        sys.exit(__doc__)
    sheet, cols, rows, theme, ids = sys.argv[1], int(sys.argv[2]), int(sys.argv[3]), sys.argv[4], sys.argv[5:]
    if len(ids) > cols * rows:
        sys.exit(f"{len(ids)} ids pour {cols * rows} cases")
    im = Image.open(sheet).convert("RGBA")
    px = np.array(im)
    # Les dessins débordent souvent de leur case : on repère chaque dessin coloré
    # (sans le contour blanc), on le range dans la case qui contient son centre,
    # puis chaque pixel va au dessin le plus proche. Deux stickers dont les contours
    # blancs se touchent sont ainsi séparés à mi-chemin.
    solid = px[..., 3] >= ALPHA_SOLID
    lab, n = ndimage.label(solid)
    sizes = ndimage.sum(solid, lab, range(1, n + 1))
    solid = np.isin(lab, 1 + np.nonzero(sizes >= MIN_PART)[0])   # sans la poussière
    lab, n = ndimage.label(solid)
    # le liseré gris au bord extérieur du contour blanc n'est pas du dessin
    core = solid & (px[..., :3].min(axis=2) < WHITE) & (ndimage.distance_transform_edt(solid) > EDGE)
    # un sticker tout blanc (nuage…) n'a pas de dessin coloré : il compte en entier
    has_core = ndimage.maximum(core, lab, range(1, n + 1))
    core |= np.isin(lab, 1 + np.nonzero(np.asarray(has_core) == 0)[0])
    clab, cn = ndimage.label(core)
    csizes = ndimage.sum(core, clab, range(1, cn + 1))
    centres = ndimage.center_of_mass(core, clab, range(1, cn + 1))
    cw, ch = im.width / cols, im.height / rows
    cell_of = np.full(cn + 1, -1)
    for k, ((cy, cx), size) in enumerate(zip(centres, csizes), start=1):
        if size >= MIN_CORE:
            cell_of[k] = int(cy // ch) * cols + int(cx // cw)
    clab[cell_of[clab] < 0] = 0
    _, (iy, ix) = ndimage.distance_transform_edt(clab == 0, return_indices=True)
    cells = cell_of[clab[iy, ix]]
    # le halo semi-transparent autour de chaque forme lui revient, pas les voiles au loin
    near = ndimage.distance_transform_edt(~solid) <= HALO
    cells = np.where(near & (px[..., 3] > 0), cells, -1)
    best = set(np.unique(cells[cells >= 0]).tolist())
    out = ROOT / "assets" / "stickers" / theme
    out.mkdir(parents=True, exist_ok=True)
    for i, id_ in enumerate(ids):
        if id_ == "-":
            continue
        if i not in best:
            print(f"!! case {i + 1} ({id_}) vide", file=sys.stderr)
            continue
        mask = cells == i
        # on ne garde que les morceaux reliés au dessin de cette case :
        # les bouts de contour blanc du voisin tombés de ce côté partent
        # (liaison par les pixels bien visibles seulement, pas par le voile presque transparent)
        visible = mask & (px[..., 3] >= ALPHA_MIN)
        pieces, _ = ndimage.label(visible)
        mine = np.unique(pieces[(clab > 0) & (cell_of[clab] == i) & visible])
        kept = np.isin(pieces, mine[mine > 0])
        mask &= ndimage.binary_dilation(kept, iterations=HALO)
        part = px.copy()
        part[~mask] = 0  # efface ce qui appartient aux voisins
        ys, xs = np.nonzero(mask & (px[..., 3] >= ALPHA_MIN))
        cell = Image.fromarray(part[ys.min():ys.max() + 1, xs.min():xs.max() + 1])
        cell.thumbnail((MAX, MAX), Image.LANCZOS)
        dest = out / f"{id_}.webp"
        cell.save(dest, "WEBP", quality=80, alpha_quality=100, method=6)
        src = dest.relative_to(ROOT).as_posix()
        print(f'  {{ id: "{id_}", theme: "{theme}", name: "{id_}", src: "{src}", '
              f'w: {cell.width}, h: {cell.height}, scale: 1.0 }},')


if __name__ == "__main__":
    main()
