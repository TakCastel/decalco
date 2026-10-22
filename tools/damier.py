"""Rend transparent le faux damier qu'ajoute parfois ChatGPT au lieu d'un vrai fond transparent.

    python3 tools/damier.py planche.png planche-transparente.png

Le damier est fait de gris moyens ; le contour des stickers est blanc. On part des bords
de l'image et on efface tout le gris qui s'y rattache, sans franchir le contour blanc.
Ensuite, découper la planche obtenue avec tools/decouper.py.
"""
import sys
import numpy as np
from PIL import Image
from scipy import ndimage

GRAY_MAX = 232   # au-dessus, c'est le blanc du contour
GRAY_MIN = 110   # en dessous, ce n'est plus le damier
SAT_MAX = 22     # écart max entre canaux pour un gris


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    im = np.array(Image.open(sys.argv[1]).convert("RGB")).astype(int)
    hi, lo = im.max(axis=2), im.min(axis=2)
    gray = (hi - lo <= SAT_MAX) & (hi <= GRAY_MAX) & (lo >= GRAY_MIN)
    labels, _ = ndimage.label(gray)
    border = np.unique(np.concatenate([labels[0], labels[-1], labels[:, 0], labels[:, -1]]))
    bg = np.isin(labels, border[border > 0])
    keep = ndimage.binary_fill_holes(~bg)
    # bord adouci : un pixel de fondu entre le contour blanc et le vide
    alpha = ndimage.uniform_filter(keep.astype(float), 3)
    alpha = np.where(keep, np.maximum(alpha, 0.5), 0)
    out = np.dstack([im, np.round(alpha * 255)]).astype(np.uint8)
    Image.fromarray(out).save(sys.argv[2])
    print(f"{sys.argv[2]} : {100 * bg.mean():.0f} % de fond effacé")


if __name__ == "__main__":
    main()
