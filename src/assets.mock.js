/* Décalco — MOCK assets (same interface as src/assets.js).
 * Generates placeholder images at runtime as data: URLs:
 *   window.SCENE   = { src, width, height }
 *   window.ANIMALS = [ { id, name, src, w, h, scale }, ... ]
 * Used only when the real src/assets.js is missing.
 */
(function () {
  function rng(seed) {
    return function () {
      seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
      var t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  /* ---------- Scene: a simple painted savanna ---------- */
  var W = 1600, H = 1000;
  var c = document.createElement("canvas");
  c.width = W; c.height = H;
  var x = c.getContext("2d");
  var r = rng(7);

  var sky = x.createLinearGradient(0, 0, 0, H * 0.6);
  sky.addColorStop(0, "#8fc6e8");
  sky.addColorStop(0.7, "#f6d9a6");
  sky.addColorStop(1, "#f3c27f");
  x.fillStyle = sky; x.fillRect(0, 0, W, H);

  // sun
  var sun = x.createRadialGradient(1220, 250, 10, 1220, 250, 190);
  sun.addColorStop(0, "rgba(255,240,190,1)");
  sun.addColorStop(0.35, "rgba(255,214,120,.9)");
  sun.addColorStop(1, "rgba(255,214,120,0)");
  x.fillStyle = sun; x.fillRect(900, 0, 700, 600);

  // far hills
  function hills(y, amp, col, seed) {
    var rr = rng(seed);
    x.fillStyle = col; x.beginPath(); x.moveTo(0, H);
    for (var i = 0; i <= 16; i++) x.lineTo((i / 16) * W, y - rr() * amp);
    x.lineTo(W, H); x.closePath(); x.fill();
  }
  hills(560, 70, "#c9a77a", 3);
  hills(600, 40, "#b8925e", 11);

  // ground
  var g = x.createLinearGradient(0, 580, 0, H);
  g.addColorStop(0, "#d9b15e");
  g.addColorStop(1, "#b98a3d");
  x.fillStyle = g; x.fillRect(0, 590, W, H - 590);

  // waterhole
  x.fillStyle = "#6fa7b8";
  x.beginPath(); x.ellipse(430, 830, 260, 60, 0, 0, Math.PI * 2); x.fill();
  x.fillStyle = "rgba(255,255,255,.25)";
  x.beginPath(); x.ellipse(400, 818, 160, 18, 0, 0, Math.PI * 2); x.fill();

  // grass strokes
  for (var i = 0; i < 2200; i++) {
    var gx = r() * W, gy = 600 + Math.pow(r(), 0.8) * 400;
    if (Math.abs(gx - 430) < 250 && Math.abs(gy - 830) < 55) continue;
    var len = 6 + r() * 16 * (gy / H);
    x.strokeStyle = r() < 0.5 ? "rgba(140,110,40,.55)" : "rgba(230,200,110,.6)";
    x.lineWidth = 1.5;
    x.beginPath(); x.moveTo(gx, gy); x.lineTo(gx + (r() - 0.5) * 6, gy - len); x.stroke();
  }

  // acacia trees
  function acacia(tx, ty, s) {
    x.strokeStyle = "#4a3422"; x.lineCap = "round";
    x.lineWidth = 14 * s;
    x.beginPath(); x.moveTo(tx, ty); x.lineTo(tx - 10 * s, ty - 160 * s); x.stroke();
    x.lineWidth = 8 * s;
    x.beginPath(); x.moveTo(tx - 6 * s, ty - 100 * s); x.lineTo(tx + 60 * s, ty - 175 * s); x.stroke();
    x.beginPath(); x.moveTo(tx - 8 * s, ty - 130 * s); x.lineTo(tx - 70 * s, ty - 180 * s); x.stroke();
    x.fillStyle = "#4f6b2b";
    x.beginPath(); x.ellipse(tx - 5 * s, ty - 195 * s, 150 * s, 32 * s, 0, 0, Math.PI * 2); x.fill();
    x.fillStyle = "#62803a";
    x.beginPath(); x.ellipse(tx - 20 * s, ty - 205 * s, 110 * s, 20 * s, 0, 0, Math.PI * 2); x.fill();
  }
  acacia(1150, 700, 1.3);
  acacia(250, 640, 0.75);
  acacia(1480, 640, 0.6);

  // tiny birds
  x.strokeStyle = "rgba(60,50,40,.7)"; x.lineWidth = 3;
  [[600, 180], [640, 200], [690, 170]].forEach(function (p) {
    x.beginPath(); x.moveTo(p[0] - 12, p[1]); x.quadraticCurveTo(p[0] - 5, p[1] - 8, p[0], p[1]);
    x.quadraticCurveTo(p[0] + 5, p[1] - 8, p[0] + 12, p[1]); x.stroke();
  });

  window.SCENE = { src: c.toDataURL("image/jpeg", 0.85), width: W, height: H };

  /* ---------- Stickers: emoji drawn on transparent canvases ---------- */
  var list = [
    ["lion", "Lion", "🦁", 1.1], ["elephant", "Éléphant", "🐘", 1.5], ["giraffe", "Girafe", "🦒", 1.6],
    ["zebra", "Zèbre", "🦓", 1.0], ["rhino", "Rhinocéros", "🦏", 1.25], ["hippo", "Hippopotame", "🦛", 1.2],
    ["cheetah", "Guépard", "🐆", 1.0], ["crocodile", "Crocodile", "🐊", 0.9], ["gorilla", "Gorille", "🦍", 1.0],
    ["monkey", "Singe", "🐒", 0.7], ["buffalo", "Buffle", "🐃", 1.15], ["camel", "Dromadaire", "🐪", 1.3],
    ["warthog", "Phacochère", "🐗", 0.75], ["antelope", "Antilope", "🦌", 0.95], ["goat", "Chèvre", "🐐", 0.6],
    ["snake", "Serpent", "🐍", 0.55], ["lizard", "Lézard", "🦎", 0.45], ["turtle", "Tortue", "🐢", 0.5],
    ["eagle", "Aigle", "🦅", 0.7], ["parrot", "Perroquet", "🦜", 0.5], ["flamingo", "Flamant rose", "🦩", 0.9],
    ["owl", "Hibou", "🦉", 0.5], ["peacock", "Paon", "🦚", 0.8], ["dodo", "Dodo", "🦤", 0.6],
    ["scorpion", "Scorpion", "🦂", 0.4], ["butterfly", "Papillon", "🦋", 0.4], ["bee", "Abeille", "🐝", 0.4],
    ["ladybug", "Coccinelle", "🐞", 0.4], ["hare", "Lièvre", "🐇", 0.5], ["hedgehog", "Hérisson", "🦔", 0.45],
    ["bird", "Oiseau", "🐦", 0.4], ["dove", "Colombe", "🕊️", 0.5], ["mammoth", "Mammouth", "🦣", 1.4],
    ["tree", "Baobab", "🌳", 1.6], ["palm", "Palmier", "🌴", 1.6], ["cactus", "Cactus", "🌵", 0.9]
  ];
  var FS = 200;
  window.ANIMALS = list.map(function (a) {
    var m = document.createElement("canvas").getContext("2d");
    m.font = FS + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif";
    var mt = m.measureText(a[2]);
    var l = mt.actualBoundingBoxLeft || 0, rr = mt.actualBoundingBoxRight || FS;
    var asc = mt.actualBoundingBoxAscent || FS * 0.8, desc = mt.actualBoundingBoxDescent || FS * 0.2;
    var pad = 6;
    var w = Math.max(16, Math.ceil(l + rr) + pad * 2), h = Math.max(16, Math.ceil(asc + desc) + pad * 2);
    var cv = document.createElement("canvas"); cv.width = w; cv.height = h;
    var cx = cv.getContext("2d");
    cx.font = m.font; cx.textBaseline = "alphabetic";
    cx.fillText(a[2], pad + l, pad + asc);
    return { id: a[0], name: a[1], src: cv.toDataURL("image/png"), w: w, h: h, scale: a[3] };
  });
})();
