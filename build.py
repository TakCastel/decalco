"""Assemble index.html + scripts + images into one self-contained page: dist/decalco.html."""
import base64, mimetypes, pathlib, re

ROOT = pathlib.Path(__file__).parent
OUT = ROOT / "dist" / "decalco.html"


def data_uri(rel):
    path = ROOT / rel
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    return f"data:{mime};base64," + base64.b64encode(path.read_bytes()).decode()


def inline_assets(js):
    # Swap every "assets/..." image path for an embedded data URI.
    def swap(m):
        if not (ROOT / m.group(2)).exists():
            print(f"manquant, laissé tel quel : {m.group(2)}")
            return m.group(0)
        return m.group(1) + data_uri(m.group(2)) + m.group(1)
    return re.sub(r'(["\'])(assets/[^"\']+\.(?:png|jpe?g|webp))\1', swap, js)


def inline_script(m):
    src = m.group(1)
    if src.startswith(("http:", "https:", "//")):
        return m.group(0)
    if "mock" in src:
        return ""  # mock assets are only for local testing
    js = inline_assets((ROOT / src).read_text())
    return "<script>\n" + js.replace("</script", "<\\/script") + "\n</script>"


html = (ROOT / "index.html").read_text()
# Image preloads are pointless once images are inlined (and would duplicate them).
html = re.sub(r'<link\s+rel="preload"\s+as="image"[^>]*>\n?', "", html)
html = re.sub(r'<script\s+src="([^"]+)"\s*>\s*</script>', inline_script, html)
html = inline_assets(html)
OUT.parent.mkdir(exist_ok=True)
OUT.write_text(html)
print(f"{OUT} {OUT.stat().st_size / 1024:.0f} KB")
