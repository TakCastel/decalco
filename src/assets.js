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
           scene: { src: "assets/scene-foret.webp", width: 1600, height: 1000 } },
  jungle: { name: "Jungle", the: "la jungle", bravo: "Quelle belle jungle !", confetti: ["flower", "leaf", "star", "heart"],
            scene: { src: "assets/scene-jungle.webp", width: 1600, height: 1000 } },
  ferme: { name: "Ferme", the: "la ferme", bravo: "Quelle belle ferme !", confetti: ["flower", "heart", "star", "sparkle"],
           scene: { src: "assets/scene-ferme.webp", width: 1600, height: 1000 } }
  // ocean, banquise… : à ajouter avec leur fond
};

window.STICKERS = [
  // Savane : animaux du plus connu au moins connu, puis le décor
  { id: "lion", theme: "savane", name: "Lion", src: "assets/stickers/savane/lion.webp", w: 236, h: 256, scale: 1.1 },
  { id: "elephant", theme: "savane", name: "Éléphant", src: "assets/stickers/savane/elephant.webp", w: 256, h: 241, scale: 1.5 },
  { id: "giraffe", theme: "savane", name: "Girafe", src: "assets/stickers/savane/giraffe.webp", w: 128, h: 256, scale: 1.6 },
  { id: "zebra", theme: "savane", name: "Zèbre", src: "assets/stickers/savane/zebra.webp", w: 202, h: 256, scale: 1.1 },
  { id: "hippo", theme: "savane", name: "Hippopotame", src: "assets/stickers/savane/hippo.webp", w: 238, h: 256, scale: 1.3 },
  { id: "crocodile", theme: "savane", name: "Crocodile", src: "assets/stickers/savane/crocodile.webp", w: 240, h: 256, scale: 1.2 },
  { id: "baboon", theme: "savane", name: "Babouin", src: "assets/stickers/savane/baboon.webp", w: 212, h: 256, scale: 0.9 },
  { id: "snake", theme: "savane", name: "Serpent", src: "assets/stickers/savane/snake.webp", w: 195, h: 256, scale: 0.7 },
  { id: "rhino", theme: "savane", name: "Rhinocéros", src: "assets/stickers/savane/rhino.webp", w: 256, h: 254, scale: 1.3 },
  { id: "tortoise", theme: "savane", name: "Tortue", src: "assets/stickers/savane/tortoise.webp", w: 256, h: 238, scale: 0.6 },
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
  { id: "jeep", theme: "savane", name: "Jeep", src: "assets/stickers/savane/jeep.webp", w: 256, h: 204, scale: 1.5 },
  { id: "tent", theme: "savane", name: "Tente", src: "assets/stickers/savane/tent.webp", w: 256, h: 200, scale: 1.3 },
  { id: "hut", theme: "savane", name: "Case", src: "assets/stickers/savane/hut.webp", w: 252, h: 256, scale: 1.5 },
  { id: "bush", theme: "savane", name: "Buisson", src: "assets/stickers/savane/bush.webp", w: 256, h: 239, scale: 0.7 },
  { id: "baobab", theme: "savane", name: "Baobab", src: "assets/stickers/savane/baobab.webp", w: 256, h: 254, scale: 1.7 },
  { id: "termite-mound", theme: "savane", name: "Termitière", src: "assets/stickers/savane/termite-mound.webp", w: 194, h: 256, scale: 0.9 },

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
  { id: "butterfly", theme: "foret", name: "Papillon", src: "assets/stickers/foret/butterfly.webp", w: 256, h: 234, scale: 0.4 },
  { id: "ladybug", theme: "foret", name: "Coccinelle", src: "assets/stickers/foret/ladybug.webp", w: 256, h: 218, scale: 0.4 },
  { id: "snail", theme: "foret", name: "Escargot", src: "assets/stickers/foret/snail.webp", w: 216, h: 256, scale: 0.4 },
  { id: "mouse", theme: "foret", name: "Souris", src: "assets/stickers/foret/mouse.webp", w: 231, h: 256, scale: 0.4 },
  { id: "frog", theme: "foret", name: "Grenouille", src: "assets/stickers/foret/frog.webp", w: 252, h: 256, scale: 0.4 },
  { id: "bird", theme: "foret", name: "Oiseau", src: "assets/stickers/foret/bird.webp", w: 256, h: 251, scale: 0.5 },
  { id: "deer", theme: "foret", name: "Cerf", src: "assets/stickers/foret/deer.webp", w: 163, h: 256, scale: 1.3 },
  { id: "owl", theme: "foret", name: "Hibou", src: "assets/stickers/foret/owl.webp", w: 167, h: 256, scale: 0.6 },
  { id: "spider", theme: "foret", name: "Araignée", src: "assets/stickers/foret/spider.webp", w: 256, h: 220, scale: 0.4 },
  { id: "boar", theme: "foret", name: "Sanglier", src: "assets/stickers/foret/boar.webp", w: 222, h: 256, scale: 0.9 },
  { id: "doe", theme: "foret", name: "Biche", src: "assets/stickers/foret/doe.webp", w: 180, h: 256, scale: 1.1 },
  { id: "tawny", theme: "foret", name: "Chouette", src: "assets/stickers/foret/tawny.webp", w: 201, h: 256, scale: 0.6 },
  { id: "beaver", theme: "foret", name: "Castor", src: "assets/stickers/foret/beaver.webp", w: 256, h: 248, scale: 0.6 },
  { id: "bat", theme: "foret", name: "Chauve-souris", src: "assets/stickers/foret/bat.webp", w: 256, h: 189, scale: 0.5 },
  { id: "crow", theme: "foret", name: "Corbeau", src: "assets/stickers/foret/crow.webp", w: 256, h: 240, scale: 0.6 },
  { id: "piglet", theme: "foret", name: "Marcassin", src: "assets/stickers/foret/piglet.webp", w: 256, h: 236, scale: 0.6 },
  { id: "hare", theme: "foret", name: "Lièvre", src: "assets/stickers/foret/hare.webp", w: 189, h: 256, scale: 0.5 },
  { id: "roe-deer", theme: "foret", name: "Chevreuil", src: "assets/stickers/foret/roe-deer.webp", w: 171, h: 256, scale: 1.1 },
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
  { id: "leaves", theme: "foret", name: "Feuilles mortes", src: "assets/stickers/foret/leaves.webp", w: 256, h: 232, scale: 0.5 },
  { id: "brambles", theme: "foret", name: "Mûres", src: "assets/stickers/foret/brambles.webp", w: 250, h: 256, scale: 0.7 },
  { id: "stump", theme: "foret", name: "Souche", src: "assets/stickers/foret/stump.webp", w: 256, h: 171, scale: 0.6 },
  { id: "nest", theme: "foret", name: "Nid", src: "assets/stickers/foret/nest.webp", w: 256, h: 248, scale: 0.5 },
  { id: "sprout", theme: "foret", name: "Pousse", src: "assets/stickers/foret/sprout.webp", w: 222, h: 256, scale: 0.4 },

  // Jungle : animaux du plus connu au moins connu, puis le décor
  { id: "monkey", theme: "jungle", name: "Singe", src: "assets/stickers/jungle/monkey.webp", w: 209, h: 256, scale: 0.7 },
  { id: "tiger", theme: "jungle", name: "Tigre", src: "assets/stickers/jungle/tiger.webp", w: 256, h: 224, scale: 1.1 },
  { id: "panda", theme: "jungle", name: "Panda", src: "assets/stickers/jungle/panda.webp", w: 206, h: 256, scale: 1.0 },
  { id: "parrot", theme: "jungle", name: "Perroquet", src: "assets/stickers/jungle/parrot.webp", w: 182, h: 256, scale: 0.6 },
  { id: "gorilla", theme: "jungle", name: "Gorille", src: "assets/stickers/jungle/gorilla.webp", w: 215, h: 256, scale: 1.1 },
  { id: "panther", theme: "jungle", name: "Panthère noire", src: "assets/stickers/jungle/panther.webp", w: 256, h: 217, scale: 1.0 },
  { id: "jaguar", theme: "jungle", name: "Jaguar", src: "assets/stickers/jungle/jaguar.webp", w: 256, h: 190, scale: 1.0 },
  { id: "toucan", theme: "jungle", name: "Toucan", src: "assets/stickers/jungle/toucan.webp", w: 256, h: 236, scale: 0.6 },
  { id: "caterpillar", theme: "jungle", name: "Chenille", src: "assets/stickers/jungle/caterpillar.webp", w: 256, h: 221, scale: 0.4 },
  { id: "boa", theme: "jungle", name: "Boa", src: "assets/stickers/jungle/boa.webp", w: 256, h: 216, scale: 0.7 },
  { id: "sloth", theme: "jungle", name: "Paresseux", src: "assets/stickers/jungle/sloth.webp", w: 256, h: 192, scale: 0.8 },
  { id: "chameleon", theme: "jungle", name: "Caméléon", src: "assets/stickers/jungle/chameleon.webp", w: 256, h: 213, scale: 0.45 },
  { id: "pink-dolphin", theme: "jungle", name: "Dauphin rose", src: "assets/stickers/jungle/pink-dolphin.webp", w: 211, h: 256, scale: 0.8 },
  { id: "peacock", theme: "jungle", name: "Paon", src: "assets/stickers/jungle/peacock.webp", w: 240, h: 256, scale: 0.8 },
  { id: "piranha", theme: "jungle", name: "Piranha", src: "assets/stickers/jungle/piranha.webp", w: 256, h: 226, scale: 0.4 },
  { id: "hummingbird", theme: "jungle", name: "Colibri", src: "assets/stickers/jungle/hummingbird.webp", w: 256, h: 245, scale: 0.35 },
  { id: "dragonfly", theme: "jungle", name: "Libellule", src: "assets/stickers/jungle/dragonfly.webp", w: 256, h: 226, scale: 0.45 },
  { id: "orangutan", theme: "jungle", name: "Orang-outan", src: "assets/stickers/jungle/orangutan.webp", w: 239, h: 256, scale: 0.9 },
  { id: "lemur", theme: "jungle", name: "Lémurien", src: "assets/stickers/jungle/lemur.webp", w: 248, h: 256, scale: 0.6 },
  { id: "red-panda", theme: "jungle", name: "Panda roux", src: "assets/stickers/jungle/red-panda.webp", w: 221, h: 256, scale: 0.6 },
  { id: "capybara", theme: "jungle", name: "Capybara", src: "assets/stickers/jungle/capybara.webp", w: 256, h: 242, scale: 0.8 },
  { id: "iguana", theme: "jungle", name: "Iguane", src: "assets/stickers/jungle/iguana.webp", w: 256, h: 254, scale: 0.6 },
  { id: "anteater", theme: "jungle", name: "Fourmilier", src: "assets/stickers/jungle/anteater.webp", w: 256, h: 239, scale: 0.9 },
  { id: "armadillo", theme: "jungle", name: "Tatou", src: "assets/stickers/jungle/armadillo.webp", w: 256, h: 250, scale: 0.5 },
  { id: "mantis", theme: "jungle", name: "Mante religieuse", src: "assets/stickers/jungle/mantis.webp", w: 220, h: 256, scale: 0.45 },
  { id: "tapir", theme: "jungle", name: "Tapir", src: "assets/stickers/jungle/tapir.webp", w: 256, h: 248, scale: 1.1 },
  { id: "tamarin", theme: "jungle", name: "Tamarin doré", src: "assets/stickers/jungle/tamarin.webp", w: 224, h: 256, scale: 0.5 },
  { id: "poison-frog", theme: "jungle", name: "Grenouille rouge", src: "assets/stickers/jungle/poison-frog.webp", w: 256, h: 205, scale: 0.4 },
  { id: "okapi", theme: "jungle", name: "Okapi", src: "assets/stickers/jungle/okapi.webp", w: 171, h: 256, scale: 1.2 },
  { id: "bird-of-paradise", theme: "jungle", name: "Oiseau de paradis", src: "assets/stickers/jungle/bird-of-paradise.webp", w: 211, h: 256, scale: 0.6 },
  { id: "palm", theme: "jungle", name: "Palmier", src: "assets/stickers/jungle/palm.webp", w: 192, h: 256, scale: 1.6 },
  { id: "pineapple", theme: "jungle", name: "Ananas", src: "assets/stickers/jungle/pineapple.webp", w: 199, h: 256, scale: 0.4 },
  { id: "coconut", theme: "jungle", name: "Noix de coco", src: "assets/stickers/jungle/coconut.webp", w: 233, h: 256, scale: 0.35 },
  { id: "banana-tree", theme: "jungle", name: "Bananier", src: "assets/stickers/jungle/banana-tree.webp", w: 179, h: 256, scale: 1.3 },
  { id: "treehouse", theme: "jungle", name: "Cabane dans les arbres", src: "assets/stickers/jungle/treehouse.webp", w: 207, h: 256, scale: 1.6 },
  { id: "canoe", theme: "jungle", name: "Pirogue", src: "assets/stickers/jungle/canoe.webp", w: 256, h: 112, scale: 1.0 },
  { id: "bamboo", theme: "jungle", name: "Bambous", src: "assets/stickers/jungle/bamboo.webp", w: 192, h: 256, scale: 1.2 },
  { id: "water-lily", theme: "jungle", name: "Nénuphar", src: "assets/stickers/jungle/water-lily.webp", w: 256, h: 179, scale: 0.7 },
  { id: "temple", theme: "jungle", name: "Temple", src: "assets/stickers/jungle/temple.webp", w: 222, h: 256, scale: 1.5 },

  // Ferme : animaux du plus connu au moins connu, puis le décor
  { id: "cow", theme: "ferme", name: "Vache", src: "assets/stickers/ferme/cow.webp", w: 234, h: 256, scale: 1.2 },
  { id: "pig", theme: "ferme", name: "Cochon", src: "assets/stickers/ferme/pig.webp", w: 189, h: 256, scale: 0.9 },
  { id: "hen", theme: "ferme", name: "Poule", src: "assets/stickers/ferme/hen.webp", w: 181, h: 256, scale: 0.5 },
  { id: "sheep", theme: "ferme", name: "Mouton", src: "assets/stickers/ferme/sheep.webp", w: 205, h: 256, scale: 0.9 },
  { id: "horse", theme: "ferme", name: "Cheval", src: "assets/stickers/ferme/horse.webp", w: 212, h: 256, scale: 1.4 },
  { id: "duck", theme: "ferme", name: "Canard", src: "assets/stickers/ferme/duck.webp", w: 176, h: 256, scale: 0.5 },
  { id: "dog", theme: "ferme", name: "Chien", src: "assets/stickers/ferme/dog.webp", w: 189, h: 256, scale: 0.7 },
  { id: "cat", theme: "ferme", name: "Chat", src: "assets/stickers/ferme/cat.webp", w: 207, h: 256, scale: 0.55 },
  { id: "rooster", theme: "ferme", name: "Coq", src: "assets/stickers/ferme/rooster.webp", w: 203, h: 256, scale: 0.6 },
  { id: "bunny", theme: "ferme", name: "Lapin", src: "assets/stickers/ferme/bunny.webp", w: 161, h: 256, scale: 0.5 },
  { id: "chick", theme: "ferme", name: "Poussin", src: "assets/stickers/ferme/chick.webp", w: 196, h: 256, scale: 0.3 },
  { id: "donkey", theme: "ferme", name: "Âne", src: "assets/stickers/ferme/donkey.webp", w: 181, h: 256, scale: 1.1 },
  { id: "goat", theme: "ferme", name: "Chèvre", src: "assets/stickers/ferme/goat.webp", w: 179, h: 256, scale: 0.8 },
  { id: "bull", theme: "ferme", name: "Taureau", src: "assets/stickers/ferme/bull.webp", w: 240, h: 256, scale: 1.3 },
  { id: "goose", theme: "ferme", name: "Oie", src: "assets/stickers/ferme/goose.webp", w: 153, h: 256, scale: 0.6 },
  { id: "turkey", theme: "ferme", name: "Dinde", src: "assets/stickers/ferme/turkey.webp", w: 225, h: 256, scale: 0.65 },
  { id: "bee", theme: "ferme", name: "Abeille", src: "assets/stickers/ferme/bee.webp", w: 229, h: 256, scale: 0.3 },
  { id: "llama", theme: "ferme", name: "Lama", src: "assets/stickers/ferme/llama.webp", w: 132, h: 256, scale: 1.1 },
  { id: "mole", theme: "ferme", name: "Taupe", src: "assets/stickers/ferme/mole.webp", w: 256, h: 192, scale: 0.45 },
  { id: "dove", theme: "ferme", name: "Colombe", src: "assets/stickers/ferme/dove.webp", w: 256, h: 245, scale: 0.4 },
  { id: "swallow", theme: "ferme", name: "Hirondelle", src: "assets/stickers/ferme/swallow.webp", w: 256, h: 251, scale: 0.4 },
  { id: "magpie", theme: "ferme", name: "Pie", src: "assets/stickers/ferme/magpie.webp", w: 256, h: 233, scale: 0.5 },
  { id: "swan", theme: "ferme", name: "Cygne", src: "assets/stickers/ferme/swan.webp", w: 196, h: 256, scale: 0.8 },
  { id: "guinea-pig", theme: "ferme", name: "Cochon d'Inde", src: "assets/stickers/ferme/guinea-pig.webp", w: 256, h: 234, scale: 0.4 },
  { id: "worm", theme: "ferme", name: "Ver de terre", src: "assets/stickers/ferme/worm.webp", w: 246, h: 256, scale: 0.35 },
  { id: "grasshopper", theme: "ferme", name: "Sauterelle", src: "assets/stickers/ferme/grasshopper.webp", w: 240, h: 256, scale: 0.35 },
  { id: "goldfish", theme: "ferme", name: "Poisson rouge", src: "assets/stickers/ferme/goldfish.webp", w: 256, h: 249, scale: 0.35 },
  { id: "barn", theme: "ferme", name: "Grange", src: "assets/stickers/ferme/barn.webp", w: 256, h: 232, scale: 1.7 },
  { id: "farmhouse", theme: "ferme", name: "Maison de ferme", src: "assets/stickers/ferme/farmhouse.webp", w: 256, h: 223, scale: 1.6 },
  { id: "tractor", theme: "ferme", name: "Tracteur", src: "assets/stickers/ferme/tractor.webp", w: 256, h: 212, scale: 1.2 },
  { id: "windmill", theme: "ferme", name: "Moulin", src: "assets/stickers/ferme/windmill.webp", w: 198, h: 256, scale: 1.7 },
  { id: "apple-tree", theme: "ferme", name: "Pommier", src: "assets/stickers/ferme/apple-tree.webp", w: 212, h: 256, scale: 1.6 },
  { id: "haystack", theme: "ferme", name: "Botte de foin", src: "assets/stickers/ferme/haystack.webp", w: 256, h: 197, scale: 0.8 },
  { id: "scarecrow", theme: "ferme", name: "Épouvantail", src: "assets/stickers/ferme/scarecrow.webp", w: 207, h: 256, scale: 1.1 },
  { id: "fence", theme: "ferme", name: "Barrière", src: "assets/stickers/ferme/fence.webp", w: 256, h: 207, scale: 0.9 },
  { id: "pumpkin", theme: "ferme", name: "Citrouille", src: "assets/stickers/ferme/pumpkin.webp", w: 256, h: 227, scale: 0.6 },
  { id: "henhouse", theme: "ferme", name: "Poulailler", src: "assets/stickers/ferme/henhouse.webp", w: 256, h: 233, scale: 1.0 },
  { id: "beehive", theme: "ferme", name: "Ruche", src: "assets/stickers/ferme/beehive.webp", w: 243, h: 256, scale: 0.6 },
  { id: "pond", theme: "ferme", name: "Mare", src: "assets/stickers/ferme/pond.webp", w: 256, h: 243, scale: 0.9 },

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
