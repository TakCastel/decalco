/* Décalco : fonds et stickers, rangés par thème.
 * Les images vivent dans assets/stickers/<theme>/<id>.webp.
 * Le thème "commun" s'ajoute à tous les autres.
 * Pour l'instant seul le thème "savane" a un fond, donc le jeu ne montre que lui.
 */
window.THEMES = {
  savane: { name: "Savane", scene: { src: "assets/scene.webp", width: 1600, height: 1000 } }
  // ocean, banquise, foret… : à ajouter avec leur fond
};

window.STICKERS = [
  // Savane
  { id: "lion", theme: "savane", name: "Lion", src: "assets/stickers/savane/lion.webp", w: 236, h: 256, scale: 1.1 },
  { id: "elephant", theme: "savane", name: "Éléphant", src: "assets/stickers/savane/elephant.webp", w: 256, h: 241, scale: 1.5 },
  { id: "giraffe", theme: "savane", name: "Girafe", src: "assets/stickers/savane/giraffe.webp", w: 128, h: 256, scale: 1.6 },
  { id: "zebra", theme: "savane", name: "Zèbre", src: "assets/stickers/savane/zebra.webp", w: 202, h: 256, scale: 1.1 },
  { id: "rhino", theme: "savane", name: "Rhinocéros", src: "assets/stickers/savane/rhino.webp", w: 256, h: 254, scale: 1.3 },
  { id: "hippo", theme: "savane", name: "Hippopotame", src: "assets/stickers/savane/hippo.webp", w: 238, h: 256, scale: 1.3 },
  { id: "buffalo", theme: "savane", name: "Buffle", src: "assets/stickers/savane/buffalo.webp", w: 221, h: 256, scale: 1.2 },
  { id: "wildebeest", theme: "savane", name: "Gnou", src: "assets/stickers/savane/wildebeest.webp", w: 236, h: 256, scale: 1.1 },
  { id: "antelope", theme: "savane", name: "Antilope", src: "assets/stickers/savane/antelope.webp", w: 197, h: 256, scale: 1.0 },
  { id: "leopard", theme: "savane", name: "Léopard", src: "assets/stickers/savane/leopard.webp", w: 210, h: 256, scale: 1.0 },
  { id: "warthog", theme: "savane", name: "Phacochère", src: "assets/stickers/savane/warthog.webp", w: 249, h: 256, scale: 0.8 },
  { id: "flamingo", theme: "savane", name: "Flamant rose", src: "assets/stickers/savane/flamingo.webp", w: 165, h: 256, scale: 0.9 },
  { id: "meerkat", theme: "savane", name: "Suricate", src: "assets/stickers/savane/meerkat.webp", w: 160, h: 256, scale: 0.45 },
  { id: "baboon", theme: "savane", name: "Babouin", src: "assets/stickers/savane/baboon.webp", w: 212, h: 256, scale: 0.9 },
  { id: "cheetah", theme: "savane", name: "Guépard", src: "assets/stickers/savane/cheetah.webp", w: 222, h: 256, scale: 1.0 },
  { id: "hyena", theme: "savane", name: "Hyène", src: "assets/stickers/savane/hyena.webp", w: 215, h: 256, scale: 0.9 },
  { id: "ostrich", theme: "savane", name: "Autruche", src: "assets/stickers/savane/ostrich.webp", w: 166, h: 256, scale: 1.3 },
  { id: "vulture", theme: "savane", name: "Vautour", src: "assets/stickers/savane/vulture.webp", w: 203, h: 256, scale: 0.7 },
  { id: "hornbill", theme: "savane", name: "Calao", src: "assets/stickers/savane/hornbill.webp", w: 206, h: 256, scale: 0.55 },
  { id: "gazelle", theme: "savane", name: "Gazelle", src: "assets/stickers/savane/gazelle.webp", w: 179, h: 256, scale: 0.9 },
  { id: "jackal", theme: "savane", name: "Chacal", src: "assets/stickers/savane/jackal.webp", w: 207, h: 256, scale: 0.7 },
  { id: "serval", theme: "savane", name: "Serval", src: "assets/stickers/savane/serval.webp", w: 167, h: 256, scale: 0.7 },
  { id: "oryx", theme: "savane", name: "Oryx", src: "assets/stickers/savane/oryx.webp", w: 208, h: 256, scale: 1.1 },
  { id: "marabou", theme: "savane", name: "Marabout", src: "assets/stickers/savane/marabou.webp", w: 176, h: 256, scale: 0.8 },
  { id: "guineafowl", theme: "savane", name: "Pintade", src: "assets/stickers/savane/guineafowl.webp", w: 177, h: 256, scale: 0.45 },
  { id: "porcupine", theme: "savane", name: "Porc-épic", src: "assets/stickers/savane/porcupine.webp", w: 248, h: 256, scale: 0.5 },
  { id: "crocodile", theme: "savane", name: "Crocodile", src: "assets/stickers/savane/crocodile.webp", w: 240, h: 256, scale: 1.2 },
  { id: "snake", theme: "savane", name: "Serpent", src: "assets/stickers/savane/snake.webp", w: 195, h: 256, scale: 0.7 },
  { id: "tortoise", theme: "savane", name: "Tortue", src: "assets/stickers/savane/tortoise.webp", w: 256, h: 238, scale: 0.6 },
  { id: "lizard", theme: "savane", name: "Lézard", src: "assets/stickers/savane/lizard.webp", w: 234, h: 256, scale: 0.5 },
  { id: "scarab", theme: "savane", name: "Scarabée", src: "assets/stickers/savane/scarab.webp", w: 256, h: 251, scale: 0.4 },
  { id: "ant", theme: "savane", name: "Fourmi", src: "assets/stickers/savane/ant.webp", w: 243, h: 256, scale: 0.4 },
  { id: "tree", theme: "savane", name: "Arbre", src: "assets/stickers/savane/tree.webp", w: 256, h: 218, scale: 1.6 },
  { id: "baobab", theme: "savane", name: "Baobab", src: "assets/stickers/savane/baobab.webp", w: 256, h: 254, scale: 1.7 },
  { id: "termite-mound", theme: "savane", name: "Termitière", src: "assets/stickers/savane/termite-mound.webp", w: 194, h: 256, scale: 0.9 },
  { id: "bush", theme: "savane", name: "Buisson", src: "assets/stickers/savane/bush.webp", w: 256, h: 239, scale: 0.7 },
  { id: "hut", theme: "savane", name: "Case", src: "assets/stickers/savane/hut.webp", w: 252, h: 256, scale: 1.5 },
  { id: "tent", theme: "savane", name: "Tente", src: "assets/stickers/savane/tent.webp", w: 256, h: 200, scale: 1.3 },
  { id: "jeep", theme: "savane", name: "Jeep", src: "assets/stickers/savane/jeep.webp", w: 256, h: 204, scale: 1.5 },

  // Commun (soleil, nuage, rocher : va avec tous les thèmes)
  { id: "rock", theme: "commun", name: "Rocher", src: "assets/stickers/commun/rock.webp", w: 256, h: 239, scale: 0.8 },
  { id: "sun", theme: "commun", name: "Soleil", src: "assets/stickers/commun/sun.webp", w: 249, h: 256, scale: 1.0 },
  { id: "cloud", theme: "commun", name: "Nuage", src: "assets/stickers/commun/cloud.webp", w: 256, h: 188, scale: 1.2 },

  // Forêt européenne (en réserve)
  { id: "bird", theme: "foret", name: "Oiseau", src: "assets/stickers/foret/bird.webp", w: 256, h: 251, scale: 0.5 },
  { id: "owl", theme: "foret", name: "Hibou", src: "assets/stickers/foret/owl.webp", w: 167, h: 256, scale: 0.6 },
  { id: "hedgehog", theme: "foret", name: "Hérisson", src: "assets/stickers/foret/hedgehog.webp", w: 250, h: 256, scale: 0.45 },
  { id: "hare", theme: "foret", name: "Lièvre", src: "assets/stickers/foret/hare.webp", w: 189, h: 256, scale: 0.5 },
  { id: "mouse", theme: "foret", name: "Souris", src: "assets/stickers/foret/mouse.webp", w: 231, h: 256, scale: 0.4 },
  { id: "bat", theme: "foret", name: "Chauve-souris", src: "assets/stickers/foret/bat.webp", w: 256, h: 189, scale: 0.5 },
  { id: "butterfly", theme: "foret", name: "Papillon", src: "assets/stickers/foret/butterfly.webp", w: 256, h: 234, scale: 0.4 },
  { id: "ladybug", theme: "foret", name: "Coccinelle", src: "assets/stickers/foret/ladybug.webp", w: 256, h: 218, scale: 0.4 },
  { id: "spider", theme: "foret", name: "Araignée", src: "assets/stickers/foret/spider.webp", w: 256, h: 220, scale: 0.4 },
  { id: "snail", theme: "foret", name: "Escargot", src: "assets/stickers/foret/snail.webp", w: 216, h: 256, scale: 0.4 },
  { id: "sprout", theme: "foret", name: "Pousse", src: "assets/stickers/foret/sprout.webp", w: 222, h: 256, scale: 0.4 },
  { id: "stump", theme: "foret", name: "Souche", src: "assets/stickers/foret/stump.webp", w: 256, h: 171, scale: 0.6 },
  { id: "nest", theme: "foret", name: "Nid", src: "assets/stickers/foret/nest.webp", w: 256, h: 248, scale: 0.5 },

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

(function () {
  var theme = "savane";
  window.SCENE = window.THEMES[theme].scene;
  window.ANIMALS = window.STICKERS.filter(function (s) { return s.theme === theme || s.theme === "commun"; });
})();
