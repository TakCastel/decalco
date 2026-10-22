# Crédits — Décalco

## Stickers (assets/stickers/<theme>/*.webp) et fonds (assets/scene.webp, assets/scene-<theme>.webp, assets/scene.jpg pour og:image)

Toutes les images ont été générées avec ChatGPT (OpenAI) à partir d'octobre 2026, pour ce projet.

- Les planches de stickers sont découpées avec `tools/decouper.py` : chaque sticker est recadré sur son contenu, réduit à 256 px maximum de côté, puis compressé en WebP (qualité 80, alpha sans perte). Les planches d'origine ne sont pas gardées.
- Les fonds sont recadrés au format 16:10 et redimensionnés en 1600 × 1000 (`tools/fond.py`).
