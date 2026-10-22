"""Prépare un fond ChatGPT pour un thème : recadré au centre en 16:10, 1600 × 1000, WebP.

    python3 tools/fond.py image.png foret

Écrit assets/scene-<theme>.webp (pour la savane : assets/scene.webp).
L'image d'origine n'est pas gardée dans le dépôt.
"""
import pathlib, sys
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
W, H = 1600, 1000


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    src, theme = sys.argv[1], sys.argv[2]
    im = Image.open(src).convert("RGB")
    w, h = im.size
    if w / h > W / H:   # trop large : on rogne les côtés
        cw = round(h * W / H)
        im = im.crop(((w - cw) // 2, 0, (w - cw) // 2 + cw, h))
    else:               # trop haut : on rogne surtout le ciel, le sol sert aux stickers
        ch = round(w * H / W)
        top = (h - ch) * 2 // 3
        im = im.crop((0, top, w, top + ch))
    im = im.resize((W, H), Image.LANCZOS)
    out = ROOT / "assets" / ("scene.webp" if theme == "savane" else f"scene-{theme}.webp")
    im.save(out, "WEBP", quality=82, method=6)
    print(f"{out.relative_to(ROOT)} {out.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
