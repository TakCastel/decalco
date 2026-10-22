"""Rend transparent le faux damier qu'ajoute parfois ChatGPT au lieu d'un vrai fond transparent.

    python3 tools/damier.py planche.png planche-transparente.png

Les couleurs du damier sont lues sur les bords de l'image (aucun sticker ne doit les toucher).
- Damier gris foncé / gris clair : le contour blanc des stickers s'en distingue ; on efface
  tout le gris rattaché aux bords.
- Damier blanc / gris : les cases blanches ont la couleur du contour. On garde le dessin
  coloré de chaque sticker et on lui redonne son contour blanc, dont l'épaisseur est mesurée
  sur les cases grises (le contour les recouvre, il ne recouvre jamais les cases blanches).
Ensuite, découper la planche obtenue avec tools/decouper.py.
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

SAT_MAX = 22     # écart max entre canaux pour un gris
TOL = 16         # marge autour des deux couleurs du damier
WHITE = 235      # au-dessus, une case du damier est « blanche »
MIN_ART = 400    # en pixels : en dessous, c'est du bruit, pas un dessin


def disk(r):
    y, x = np.ogrid[-r:r + 1, -r:r + 1]
    return x * x + y * y <= r * r


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    im = np.array(Image.open(sys.argv[1]).convert("RGB")).astype(int)
    hi, lo = im.max(axis=2), im.min(axis=2)
    lum = im.mean(axis=2)
    edge = np.concatenate([lum[:3].ravel(), lum[-3:].ravel(), lum[:, :3].ravel(), lum[:, -3:].ravel()])
    c_lo, c_hi = np.percentile(edge, 10), np.percentile(edge, 90)
    checker = (hi - lo <= SAT_MAX) & (lum >= c_lo - TOL) & (lum <= c_hi + TOL)

    if c_hi < WHITE:
        # damier gris : le contour blanc reste hors du damier, on part des bords
        labels, _ = ndimage.label(checker)
        border = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
        keep = ndimage.binary_fill_holes(~np.isin(labels, border[border > 0]))
        mode = "gris"
    else:
        # damier blanc : on garde le dessin, puis on lui rend son contour
        art = ~checker
        labels, n = ndimage.label(art)
        sizes = ndimage.sum(art, labels, range(1, n + 1))
        art = np.isin(labels, 1 + np.nonzero(sizes >= MIN_ART)[0])
        art = ndimage.binary_fill_holes(art)
        dist = ndimage.distance_transform_edt(~art)
        gray_tile = checker & (np.abs(lum - c_lo) <= TOL) & (dist > 0)
        # le contour s'arrête là où les cases grises apparaissent en nombre
        # (on ignore le liseré gris d'1 ou 2 px collé au dessin)
        hist = np.bincount(dist[gray_tile & (dist < 80)].astype(int), minlength=80)
        base = np.median(hist[hist > 0][3:]) if (hist > 0).sum() > 3 else 0
        r = next((d - 1 for d in range(3, 80) if hist[d] > 0.2 * base), 0) if base else 0
        keep = ndimage.binary_fill_holes(ndimage.binary_dilation(art, disk(r)) if r else art)
        mode = f"blanc, contour de {r} px"

    # bord adouci : un pixel de fondu entre le contour et le vide
    alpha = ndimage.uniform_filter(keep.astype(float), 3)
    alpha = np.where(keep, np.maximum(alpha, 0.5), 0)
    out = np.dstack([im, np.round(alpha * 255)]).astype(np.uint8)
    Image.fromarray(out).save(sys.argv[2])
    print(f"{sys.argv[2]} : damier {mode}, {100 * (1 - keep.mean()):.0f} % de fond effacé")


if __name__ == "__main__":
    main()
