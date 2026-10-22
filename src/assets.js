/* Décalco : fonds et stickers, rangés par thème.
 * Les images vivent dans assets/stickers/<theme>/<id>.webp.
 * Le thème "commun" s'ajoute à tous les autres.
 * Seuls les thèmes listés dans THEMES (ceux qui ont un fond) sont jouables.
 * the : nom avec article ("la savane"), bravo : la phrase de fin de page.
 * confetti : les formes qui pleuvent quand la page est terminée (star, heart, flower, leaf, sparkle).
 */
window.THEMES = {
  savane: { name: "Savane", the: "la savane", bravo: "Quelle belle savane !", confetti: ["star", "sparkle", "heart", "flower"],
            scene: { src: "assets/scene.webp", width: 1600, height: 1000 } },
  foret: { name: "Forêt", the: "la forêt", bravo: "Quelle belle forêt !", confetti: ["leaf", "star", "heart", "leaf"],
           scene: { src: "assets/scene-foret.webp", width: 1600, height: 1000 } }
  // jungle, ocean, banquise… : à ajouter avec leur fond
};

window.STICKERS = [
  // Savane : animaux du plus connu au moins connu, puis le décor
  { id: "lion", theme: "savane", name: "Lion", src: "assets/stickers/savane/lion.webp", w: 236, h: 256, scale: 1.1 },
  { id: "elephant", theme: "savane", name: "Éléphant", src: "assets/stickers/savane/elephant.webp", w: 256, h: 241, scale: 1.5 },
  { id: "giraffe", theme: "savane", name: "Girafe", src: "assets/stickers/savane/giraffe.webp", w: 128, h: 256, scale: 1.6 },
  { id: "zebra", theme: "savane", name: "Zèbre", src: "assets/stickers/savane/zebra.webp", w: 202, h: 256, scale: 1.1 },
  { id: "crocodile", theme: "savane", name: "Crocodile", src: "assets/stickers/savane/crocodile.webp", w: 240, h: 256, scale: 1.2 },
  { id: "snake", theme: "savane", name: "Serpent", src: "assets/stickers/savane/snake.webp", w: 195, h: 256, scale: 0.7 },
  { id: "hippo", theme: "savane", name: "Hippopotame", src: "assets/stickers/savane/hippo.webp", w: 238, h: 256, scale: 1.3 },
  { id: "baboon", theme: "savane", name: "Babouin", src: "assets/stickers/savane/baboon.webp", w: 212, h: 256, scale: 0.9 },
  { id: "tortoise", theme: "savane", name: "Tortue", src: "assets/stickers/savane/tortoise.webp", w: 256, h: 238, scale: 0.6 },
  { id: "rhino", theme: "savane", name: "Rhinocéros", src: "assets/stickers/savane/rhino.webp", w: 256, h: 254, scale: 1.3 },
  { id: "ant", theme: "savane", name: "Fourmi", src: "assets/stickers/savane/ant.webp", w: 243, h: 256, scale: 0.4 },
  { id: "flamingo", theme: "savane", name: "Flamant rose", src: "assets/stickers/savane/flamingo.webp", w: 165, h: 256, scale: 0.9 },
  { id: "ostrich", theme: "savane", name: "Autruche", src: "assets/stickers/savane/ostrich.webp", w: 166, h: 256, scale: 1.3 },
  { id: "cheetah", theme: "savane", name: "Guépard", src: "assets/stickers/savane/cheetah.webp", w: 222, h: 256, scale: 1.0 },
  { id: "leopard", theme: "savane", name: "Léopard", src: "assets/stickers/savane/leopard.webp", w: 210, h: 256, scale: 1.0 },
  { id: "lizard", theme: "savane", name: "Lézard", src: "assets/stickers/savane/lizard.webp", w: 234, h: 256, scale: 0.5 },
  { id: "meerkat", theme: "savane", name: "Suricate", src: "assets/stickers/savane/meerkat.webp", w: 160, h: 256, scale: 0.45 },
  { id: "warthog", theme: "savane", name: "Phacochère", src: "assets/stickers/savane/warthog.webp", w: 249, h: 256, scale: 0.8 },
  { id: "hyena", theme: "savane", name: "Hyène", src: "assets/stickers/savane/hyena.webp", w: 215, h: 256, scale: 0.9 },
  { id: "vulture", theme: "savane", name: "Vautour", src: "assets/stickers/savane/vulture.webp", w: 203, h: 256, scale: 0.7 },
  { id: "gazelle", theme: "savane", name: "Gazelle", src: "assets/stickers/savane/gazelle.webp", w: 179, h: 256, scale: 0.9 },
  { id: "antelope", theme: "savane", name: "Antilope", src: "assets/stickers/savane/antelope.webp", w: 197, h: 256, scale: 1.0 },
  { id: "buffalo", theme: "savane", name: "Buffle", src: "assets/stickers/savane/buffalo.webp", w: 221, h: 256, scale: 1.2 },
  { id: "porcupine", theme: "savane", name: "Porc-épic", src: "assets/stickers/savane/porcupine.webp", w: 248, h: 256, scale: 0.5 },
  { id: "scarab", theme: "savane", name: "Scarabée", src: "assets/stickers/savane/scarab.webp", w: 256, h: 251, scale: 0.4 },
  { id: "hornbill", theme: "savane", name: "Calao", src: "assets/stickers/savane/hornbill.webp", w: 206, h: 256, scale: 0.55 },
  { id: "wildebeest", theme: "savane", name: "Gnou", src: "assets/stickers/savane/wildebeest.webp", w: 236, h: 256, scale: 1.1 },
  { id: "jackal", theme: "savane", name: "Chacal", src: "assets/stickers/savane/jackal.webp", w: 207, h: 256, scale: 0.7 },
  { id: "guineafowl", theme: "savane", name: "Pintade", src: "assets/stickers/savane/guineafowl.webp", w: 177, h: 256, scale: 0.45 },
  { id: "marabou", theme: "savane", name: "Marabout", src: "assets/stickers/savane/marabou.webp", w: 176, h: 256, scale: 0.8 },
  { id: "oryx", theme: "savane", name: "Oryx", src: "assets/stickers/savane/oryx.webp", w: 208, h: 256, scale: 1.1 },
  { id: "serval", theme: "savane", name: "Serval", src: "assets/stickers/savane/serval.webp", w: 167, h: 256, scale: 0.7 },
  { id: "tree", theme: "savane", name: "Arbre", src: "assets/stickers/savane/tree.webp", w: 256, h: 218, scale: 1.6 },
  { id: "baobab", theme: "savane", name: "Baobab", src: "assets/stickers/savane/baobab.webp", w: 256, h: 254, scale: 1.7 },
  { id: "bush", theme: "savane", name: "Buisson", src: "assets/stickers/savane/bush.webp", w: 256, h: 239, scale: 0.7 },
  { id: "termite-mound", theme: "savane", name: "Termitière", src: "assets/stickers/savane/termite-mound.webp", w: 194, h: 256, scale: 0.9 },
  { id: "hut", theme: "savane", name: "Case", src: "assets/stickers/savane/hut.webp", w: 252, h: 256, scale: 1.5 },
  { id: "tent", theme: "savane", name: "Tente", src: "assets/stickers/savane/tent.webp", w: 256, h: 200, scale: 1.3 },
  { id: "jeep", theme: "savane", name: "Jeep", src: "assets/stickers/savane/jeep.webp", w: 256, h: 204, scale: 1.5 },

  // Commun (soleil, nuage, rocher : va avec tous les thèmes)
  { id: "rock", theme: "commun", name: "Rocher", src: "assets/stickers/commun/rock.webp", w: 256, h: 239, scale: 0.8 },
  { id: "sun", theme: "commun", name: "Soleil", src: "assets/stickers/commun/sun.webp", w: 249, h: 256, scale: 1.0 },
  { id: "cloud", theme: "commun", name: "Nuage", src: "assets/stickers/commun/cloud.webp", w: 256, h: 188, scale: 1.2 },

  // Forêt européenne : animaux du plus connu au moins connu, puis le décor
  { id: "bear", theme: "foret", name: "Ours", src: "assets/stickers/foret/bear.webp", w: 213, h: 256, scale: 1.3 },
  { id: "wolf", theme: "foret", name: "Loup", src: "assets/stickers/foret/wolf.webp", w: 212, h: 256, scale: 0.9 },
  { id: "fox", theme: "foret", name: "Renard", src: "assets/stickers/foret/fox.webp", w: 192, h: 256, scale: 0.8 },
  { id: "rabbit", theme: "foret", name: "Lapin", src: "assets/stickers/foret/rabbit.webp", w: 154, h: 256, scale: 0.5 },
  { id: "squirrel", theme: "foret", name: "Écureuil", src: "assets/stickers/foret/squirrel.webp", w: 218, h: 256, scale: 0.45 },
  { id: "hedgehog", theme: "foret", name: "Hérisson", src: "assets/stickers/foret/hedgehog.webp", w: 250, h: 256, scale: 0.45 },
  { id: "deer", theme: "foret", name: "Cerf", src: "assets/stickers/foret/deer.webp", w: 163, h: 256, scale: 1.3 },
  { id: "owl", theme: "foret", name: "Hibou", src: "assets/stickers/foret/owl.webp", w: 167, h: 256, scale: 0.6 },
  { id: "frog", theme: "foret", name: "Grenouille", src: "assets/stickers/foret/frog.webp", w: 252, h: 256, scale: 0.4 },
  { id: "mouse", theme: "foret", name: "Souris", src: "assets/stickers/foret/mouse.webp", w: 231, h: 256, scale: 0.4 },
  { id: "boar", theme: "foret", name: "Sanglier", src: "assets/stickers/foret/boar.webp", w: 222, h: 256, scale: 0.9 },
  { id: "doe", theme: "foret", name: "Biche", src: "assets/stickers/foret/doe.webp", w: 180, h: 256, scale: 1.1 },
  { id: "snail", theme: "foret", name: "Escargot", src: "assets/stickers/foret/snail.webp", w: 216, h: 256, scale: 0.4 },
  { id: "ladybug", theme: "foret", name: "Coccinelle", src: "assets/stickers/foret/ladybug.webp", w: 256, h: 218, scale: 0.4 },
  { id: "butterfly", theme: "foret", name: "Papillon", src: "assets/stickers/foret/butterfly.webp", w: 256, h: 234, scale: 0.4 },
  { id: "tawny", theme: "foret", name: "Chouette", src: "assets/stickers/foret/tawny.webp", w: 201, h: 256, scale: 0.6 },
  { id: "spider", theme: "foret", name: "Araignée", src: "assets/stickers/foret/spider.webp", w: 256, h: 220, scale: 0.4 },
  { id: "beaver", theme: "foret", name: "Castor", src: "assets/stickers/foret/beaver.webp", w: 256, h: 248, scale: 0.6 },
  { id: "bat", theme: "foret", name: "Chauve-souris", src: "assets/stickers/foret/bat.webp", w: 256, h: 189, scale: 0.5 },
  { id: "bird", theme: "foret", name: "Oiseau", src: "assets/stickers/foret/bird.webp", w: 256, h: 251, scale: 0.5 },
  { id: "crow", theme: "foret", name: "Corbeau", src: "assets/stickers/foret/crow.webp", w: 256, h: 240, scale: 0.6 },
  { id: "piglet", theme: "foret", name: "Marcassin", src: "assets/stickers/foret/piglet.webp", w: 256, h: 236, scale: 0.6 },
  { id: "roe-deer", theme: "foret", name: "Chevreuil", src: "assets/stickers/foret/roe-deer.webp", w: 171, h: 256, scale: 1.1 },
  { id: "hare", theme: "foret", name: "Lièvre", src: "assets/stickers/foret/hare.webp", w: 189, h: 256, scale: 0.5 },
  { id: "woodpecker", theme: "foret", name: "Pic-vert", src: "assets/stickers/foret/woodpecker.webp", w: 195, h: 256, scale: 0.5 },
  { id: "badger", theme: "foret", name: "Blaireau", src: "assets/stickers/foret/badger.webp", w: 253, h: 256, scale: 0.7 },
  { id: "lynx", theme: "foret", name: "Lynx", src: "assets/stickers/foret/lynx.webp", w: 201, h: 256, scale: 0.9 },
  { id: "grass-snake", theme: "foret", name: "Couleuvre", src: "assets/stickers/foret/grass-snake.webp", w: 256, h: 256, scale: 0.5 },
  { id: "salamander", theme: "foret", name: "Salamandre", src: "assets/stickers/foret/salamander.webp", w: 256, h: 203, scale: 0.4 },
  { id: "fir", theme: "foret", name: "Sapin", src: "assets/stickers/foret/fir.webp", w: 221, h: 256, scale: 1.6 },
  { id: "mushroom", theme: "foret", name: "Champignon", src: "assets/stickers/foret/mushroom.webp", w: 243, h: 256, scale: 0.45 },
  { id: "oak", theme: "foret", name: "Chêne", src: "assets/stickers/foret/oak.webp", w: 242, h: 256, scale: 1.6 },
  { id: "cabin", theme: "foret", name: "Cabane", src: "assets/stickers/foret/cabin.webp", w: 256, h: 224, scale: 1.6 },
  { id: "campfire", theme: "foret", name: "Feu de camp", src: "assets/stickers/foret/campfire.webp", w: 206, h: 256, scale: 0.7 },
  { id: "brambles", theme: "foret", name: "Mûres", src: "assets/stickers/foret/brambles.webp", w: 250, h: 256, scale: 0.7 },
  { id: "leaves", theme: "foret", name: "Feuilles mortes", src: "assets/stickers/foret/leaves.webp", w: 256, h: 232, scale: 0.5 },
  { id: "stump", theme: "foret", name: "Souche", src: "assets/stickers/foret/stump.webp", w: 256, h: 171, scale: 0.6 },
  { id: "nest", theme: "foret", name: "Nid", src: "assets/stickers/foret/nest.webp", w: 256, h: 248, scale: 0.5 },
  { id: "sprout", theme: "foret", name: "Pousse", src: "assets/stickers/foret/sprout.webp", w: 222, h: 256, scale: 0.4 },

  // Jungle (en réserve)
  { id: "gorilla", theme: "jungle", name: "Gorille", src: "assets/stickers/jungle/gorilla.webp", w: 215, h: 256, scale: 1.1 },
  { id: "monkey", theme: "jungle", name: "Singe", src: "assets/stickers/jungle/monkey.webp", w: 209, h: 256, scale: 0.7 },
  { id: "orangutan", theme: "jungle", name: "Orang-outan", src: "assets/stickers/jungle/orangutan.webp", w: 239, h: 256, scale: 0.9 },
  { id: "parrot", theme: "jungle", name: "Perroquet", src: "assets/stickers/jungle/parrot.webp", w: 182, h: 256, scale: 0.6 },
  { id: "palm", theme: "jungle", name: "Palmier", src: "assets/stickers/jungle/palm.webp", w: 192, h: 256, scale: 1.6 },
  { id: "flower", theme: "jungle", name: "Fleur", src: "assets/stickers/jungle/flower.webp", w: 256, h: 253, scale: 0.4 },

  // Désert (en réserve)
  { id: "camel", theme: "desert", name: "Dromadaire", src: "assets/stickers/desert/camel.webp", w: 210, h: 256, scale: 1.4 },
  { id: "scorpion", theme: "desert", name: "Scorpion", src: "assets/stickers/desert/scorpion.webp", w: 206, h: 256, scale: 0.4 },

  // Montagne (en réserve)
  { id: "eagle", theme: "montagne", name: "Aigle", src: "assets/stickers/montagne/eagle.webp", w: 256, h: 207, scale: 0.7 }
];

/* Thème joué : ?theme=foret dans l'adresse, sinon le dernier choisi, sinon la savane. */
(function () {
  var theme = null;
  try { theme = new URLSearchParams(window.location.search).get("theme"); } catch (e) {}
  if (!window.THEMES[theme]) { try { theme = window.localStorage.getItem("decalco-theme"); } catch (e) {} }
  if (!window.THEMES[theme]) theme = "savane";
  window.THEME = theme;
  window.SCENE = window.THEMES[theme].scene;
  // les stickers du thème d'abord, les communs (soleil, nuage, rocher) en fin de planche
  var own = window.STICKERS.filter(function (s) { return s.theme === theme; });
  window.ANIMALS = own.concat(window.STICKERS.filter(function (s) { return s.theme === "commun"; }));
})();
