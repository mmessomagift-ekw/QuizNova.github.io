// Questions de l'espace Enfants (QuizNova Kids)
// Chaque question : q (texte), choix (4 réponses), bonne (index 0-3 de la bonne réponse), explication (phrase courte).
var QUESTIONS_KIDS = {
  maths: {
    facile: [
      { q: "Combien font 2 + 3 ?", choix: ["5", "4", "6", "7"], bonne: 0, explication: "2 + 3 = 5 : on ajoute 3 à 2." },
      { q: "Combien font 9 − 4 ?", choix: ["3", "5", "4", "6"], bonne: 1, explication: "En retirant 4 à 9, il reste 5." },
      { q: "Combien de côtés a un triangle ?", choix: ["2", "4", "3", "5"], bonne: 2, explication: "Un triangle a trois côtés." },
      { q: "Quel nombre vient juste après 19 ?", choix: ["18", "21", "29", "20"], bonne: 3, explication: "Après 19, on compte 20." },
      { q: "Combien font 2 × 4 ?", choix: ["8", "6", "10", "12"], bonne: 0, explication: "Deux groupes de quatre font huit." },
      { q: "Quelle est la moitié de 10 ?", choix: ["2", "5", "4", "8"], bonne: 1, explication: "Partager 10 en deux parts égales donne 5 par part." }
    ],
    moyen: [
      { q: "Combien font 7 × 8 ?", choix: ["56", "48", "54", "64"], bonne: 0, explication: "Sept fois huit font cinquante-six." },
      { q: "Combien font 144 ÷ 12 ?", choix: ["10", "12", "11", "14"], bonne: 1, explication: "Douze fois douze font 144." },
      { q: "Combien de minutes y a-t-il dans deux heures ?", choix: ["60", "90", "120", "200"], bonne: 2, explication: "Une heure dure 60 minutes, donc deux heures durent 120 minutes." },
      { q: "Quel est le périmètre d’un carré de 5 cm de côté ?", choix: ["10 cm", "15 cm", "25 cm", "20 cm"], bonne: 3, explication: "On additionne les quatre côtés : 4 × 5 = 20 cm." },
      { q: "Combien vaut le quart de 20 ?", choix: ["5", "4", "10", "15"], bonne: 0, explication: "Un quart de 20 correspond à 20 divisé par 4." },
      { q: "Combien font 3,5 + 1,2 ?", choix: ["4,3", "4,7", "3,7", "5,7"], bonne: 1, explication: "On additionne les unités et les dixièmes pour obtenir 4,7." }
    ],
    difficile: [
      { q: "Combien valent 15 % de 200 ?", choix: ["30", "15", "20", "40"], bonne: 0, explication: "10 % de 200 font 20 et 5 % font 10, soit 30 en tout." },
      { q: "Quelle est la solution de 3x + 5 = 20 ?", choix: ["3", "5", "7", "15"], bonne: 1, explication: "On retire 5 puis on divise par 3 : x = 5." },
      { q: "Quelle est l’aire d’un triangle de base 8 cm et de hauteur 5 cm ?", choix: ["13 cm²", "26 cm²", "20 cm²", "40 cm²"], bonne: 2, explication: "L’aire vaut la base multipliée par la hauteur, puis divisée par deux." },
      { q: "Combien vaut 2³ ?", choix: ["5", "6", "9", "8"], bonne: 3, explication: "2³ signifie 2 × 2 × 2, soit 8." },
      { q: "Quelle est la moyenne de 8, 12 et 16 ?", choix: ["12", "10", "14", "18"], bonne: 0, explication: "La somme vaut 36 et 36 divisé par 3 donne 12." },
      { q: "Quelle est la probabilité d’obtenir un nombre pair avec un dé équilibré à six faces numérotées de 1 à 6 ?", choix: ["1 sur 6", "1 sur 2", "1 sur 3", "2 sur 3"], bonne: 1, explication: "Trois faces sur six portent un nombre pair : 2, 4 et 6." }
    ]
  },
  francais: {
    facile: [
      { q: "Quel mot désigne un animal ?", choix: ["Chat", "Table", "Nuage", "Crayon"], bonne: 0, explication: "Le chat est un animal qui miaule." },
      { q: "Quel est le pluriel de « maison » ?", choix: ["Maison", "Maisons", "Maisonx", "Maisones"], bonne: 1, explication: "Au pluriel, on ajoute un s à maison." },
      { q: "Quel est le contraire de « grand » ?", choix: ["Haut", "Long", "Petit", "Géant"], bonne: 2, explication: "Petit est le contraire de grand." },
      { q: "Quelle lettre est une voyelle ?", choix: ["B", "D", "P", "A"], bonne: 3, explication: "La lettre a est une voyelle." },
      { q: "Quel signe termine généralement une question écrite ?", choix: ["Le point d’interrogation", "La virgule", "Le point-virgule", "Les deux-points"], bonne: 0, explication: "Le point d’interrogation indique que l’on pose une question." },
      { q: "Quel mot rime avec « bateau » ?", choix: ["Maison", "Chapeau", "Lapin", "Forêt"], bonne: 1, explication: "Bateau et chapeau se terminent par le même son." }
    ],
    moyen: [
      { q: "Quel est le verbe dans « Le chien attrape la balle » ?", choix: ["Attrape", "Chien", "Balle", "Le"], bonne: 0, explication: "Attrape est le verbe qui indique l’action du chien." },
      { q: "Quel est le pluriel de « cheval » ?", choix: ["Chevals", "Chevaux", "Chevaus", "Chevales"], bonne: 1, explication: "Le nom cheval devient chevaux au pluriel." },
      { q: "Quel mot est un synonyme de « joyeux » ?", choix: ["Triste", "Fâché", "Heureux", "Inquiet"], bonne: 2, explication: "Joyeux et heureux expriment tous deux la joie." },
      { q: "Comment complète-t-on « Nous … au parc » au présent ?", choix: ["allez", "vont", "vais", "allons"], bonne: 3, explication: "Au présent, le verbe aller se conjugue nous allons." },
      { q: "Dans « une robe bleue », quel est l’adjectif ?", choix: ["Bleue", "Une", "Robe", "Aucun"], bonne: 0, explication: "Bleue est l’adjectif qui précise la couleur de la robe." },
      { q: "Quel mot est correctement écrit ?", choix: ["Éléfant", "Éléphant", "Élléphant", "Éléphent"], bonne: 1, explication: "Éléphant s’écrit avec ph pour le son f." }
    ],
    difficile: [
      { q: "Quel temps est employé dans « Elle avait terminé » ?", choix: ["Le plus-que-parfait", "L’imparfait", "Le passé composé", "Le futur antérieur"], bonne: 0, explication: "Le plus-que-parfait associe un auxiliaire à l’imparfait et un participe passé." },
      { q: "Quelle phrase contient une comparaison ?", choix: ["Le vent chante.", "Il court comme un lièvre.", "Cette mer est un miroir.", "La nuit tombe."], bonne: 1, explication: "Le mot comme rapproche ici le coureur d’un lièvre." },
      { q: "Comment complète-t-on « Les lettres que j’ai … » ?", choix: ["écrit", "écrite", "écrites", "écrits"], bonne: 2, explication: "Le participe s’accorde avec lettres, repris par que et placé avant le verbe." },
      { q: "Quelle est la fonction de « à Léa » dans « Je parle à Léa » ?", choix: ["Sujet", "Complément d’objet direct", "Attribut du sujet", "Complément d’objet indirect"], bonne: 3, explication: "On demande « Je parle à qui ? » : à Léa." },
      { q: "Quel mot contient un préfixe exprimant la répétition ?", choix: ["Refaire", "Défaire", "Impossible", "Préhistoire"], bonne: 0, explication: "Dans refaire, le préfixe re- signifie faire à nouveau." },
      { q: "Quel mode est employé dans « Il faut que tu viennes » pour le verbe venir ?", choix: ["L’indicatif", "Le subjonctif", "L’impératif", "L’infinitif"], bonne: 1, explication: "Après il faut que, le verbe venir est ici au subjonctif." }
    ]
  },
  anglais: {
    facile: [
      { q: "Comment dit-on « chat » en anglais ?", choix: ["Cat", "Dog", "Bird", "Fish"], bonne: 0, explication: "Chat se dit cat en anglais." },
      { q: "Que signifie « hello » en français ?", choix: ["Merci", "Bonjour", "Au revoir", "Pardon"], bonne: 1, explication: "Hello est une façon de dire bonjour." },
      { q: "Comment dit-on « rouge » en anglais ?", choix: ["Blue", "Green", "Red", "Yellow"], bonne: 2, explication: "Rouge se dit red en anglais." },
      { q: "Quel mot anglais signifie « un » quand on compte ?", choix: ["Two", "Three", "Four", "One"], bonne: 3, explication: "Pour commencer à compter en anglais, on dit one." },
      { q: "Comment dit-on « merci » en anglais ?", choix: ["Thank you", "Good night", "See you", "Hello"], bonne: 0, explication: "Thank you permet de remercier quelqu’un." },
      { q: "Que signifie « dog » en français ?", choix: ["Chat", "Chien", "Cheval", "Canard"], bonne: 1, explication: "Dog est le mot anglais pour chien." }
    ],
    moyen: [
      { q: "Comment dit-on « pomme » en anglais ?", choix: ["Apple", "Pear", "Peach", "Grape"], bonne: 0, explication: "Une pomme se dit an apple en anglais." },
      { q: "Que signifie « I am hungry » en français ?", choix: ["J’ai soif.", "J’ai faim.", "J’ai froid.", "Je suis fatigué."], bonne: 1, explication: "I am hungry s’utilise quand on a faim." },
      { q: "Comment dit-on « mercredi » en anglais ?", choix: ["Monday", "Thursday", "Wednesday", "Saturday"], bonne: 2, explication: "Mercredi se dit Wednesday en anglais." },
      { q: "Quel est le pluriel anglais de « child » ?", choix: ["Childs", "Childes", "Childrens", "Children"], bonne: 3, explication: "Children est le pluriel irrégulier de child." },
      { q: "Que signifie « Where do you live? » en français ?", choix: ["Où habites-tu ?", "Comment t’appelles-tu ?", "Quel âge as-tu ?", "Que manges-tu ?"], bonne: 0, explication: "Where do you live? permet de demander où quelqu’un habite." },
      { q: "Comment dit-on « Elle aime les livres » en anglais ?", choix: ["He likes books.", "She likes books.", "She likes cats.", "They like books."], bonne: 1, explication: "She signifie elle, et likes books signifie aime les livres." }
    ],
    difficile: [
      { q: "Quel est le prétérit du verbe anglais « go » ?", choix: ["Went", "Goed", "Gone", "Going"], bonne: 0, explication: "Le prétérit de go est went, une forme irrégulière." },
      { q: "Que signifie « I have lived here for two years » ?", choix: ["J’habiterai ici dans deux ans.", "J’habite ici depuis deux ans.", "J’ai habité ici il y a vingt ans.", "Je reste ici pendant deux jours."], bonne: 1, explication: "Avec cette durée, le present perfect relie le passé au présent." },
      { q: "Comment dit-on « Si j’étais toi » en anglais ?", choix: ["If I am you", "When I was you", "If I were you", "If you were me"], bonne: 2, explication: "If I were you sert souvent à donner un conseil." },
      { q: "Quel mot complète « This book is … than that one » pour dire « plus intéressant » ?", choix: ["most interesting", "interesting", "interestinger", "more interesting"], bonne: 3, explication: "Pour comparer avec interesting, on utilise more interesting than." },
      { q: "Que signifie le faux ami anglais « actually » ?", choix: ["En fait", "Actuellement", "Rapidement", "Peut-être"], bonne: 0, explication: "Actually signifie en fait, et non actuellement." },
      { q: "Comment traduit-on « Tu ne dois pas courir » pour exprimer une interdiction ?", choix: ["You do not have to run.", "You must not run.", "You can run.", "You should run."], bonne: 1, explication: "Must not exprime une interdiction en anglais." }
    ]
  },
  sciences: {
    facile: [
      { q: "Quelle partie du corps permet de voir ?", choix: ["Les yeux", "Les oreilles", "Les genoux", "Les coudes"], bonne: 0, explication: "Les yeux captent la lumière et nous permettent de voir." },
      { q: "Que devient de l’eau liquide placée assez longtemps au congélateur ?", choix: ["Du sable", "De la glace", "Du bois", "De l’huile"], bonne: 1, explication: "En refroidissant suffisamment, l’eau liquide devient de la glace." },
      { q: "Quel animal est un insecte ?", choix: ["L’araignée", "L’escargot", "La fourmi", "Le ver de terre"], bonne: 2, explication: "La fourmi est un insecte qui possède six pattes." },
      { q: "Quel astre éclaire naturellement la Terre pendant la journée ?", choix: ["La Lune", "Mars", "Saturne", "Le Soleil"], bonne: 3, explication: "Le Soleil est l’étoile qui éclaire la Terre." },
      { q: "Avec quelle partie une plante absorbe-t-elle surtout l’eau du sol ?", choix: ["Les racines", "Les fleurs", "Les fruits", "Les pétales"], bonne: 0, explication: "Les racines absorbent l’eau présente dans le sol." },
      { q: "Quel sens utilise-t-on pour entendre une chanson ?", choix: ["La vue", "L’ouïe", "Le goût", "L’odorat"], bonne: 1, explication: "L’ouïe permet de percevoir les sons." }
    ],
    moyen: [
      { q: "Quel organe propulse le sang dans le corps ?", choix: ["Le cœur", "L’estomac", "Le cerveau", "Le foie"], bonne: 0, explication: "Le cœur fonctionne comme une pompe qui fait circuler le sang." },
      { q: "Quel gaz de l’air notre corps utilise-t-il pour respirer ?", choix: ["Le dioxyde de carbone", "Le dioxygène", "L’hélium", "Le méthane"], bonne: 1, explication: "Notre corps utilise le dioxygène pour fonctionner." },
      { q: "Combien de planètes compte le Système solaire ?", choix: ["7", "9", "8", "10"], bonne: 2, explication: "Le Système solaire compte huit planètes, de Mercure à Neptune." },
      { q: "Comment appelle-t-on le passage de l’eau liquide à la vapeur ?", choix: ["La solidification", "La fusion", "La condensation", "La vaporisation"], bonne: 3, explication: "La vaporisation transforme l’eau liquide en vapeur d’eau." },
      { q: "Quelle force nous attire vers le sol ?", choix: ["La gravité", "Le magnétisme", "Le frottement", "La poussée du vent"], bonne: 0, explication: "La gravité terrestre attire les objets vers le centre de la Terre." },
      { q: "À quel groupe la baleine appartient-elle ?", choix: ["Aux poissons", "Aux mammifères", "Aux reptiles", "Aux amphibiens"], bonne: 1, explication: "La baleine respire avec des poumons et allaite son petit." }
    ],
    difficile: [
      { q: "Quelle est la formule chimique de l’eau ?", choix: ["H₂O", "CO₂", "O₂", "NaCl"], bonne: 0, explication: "Une molécule d’eau contient deux atomes d’hydrogène et un d’oxygène." },
      { q: "Quelle structure contient l’essentiel de l’ADN dans une cellule humaine possédant un noyau ?", choix: ["La membrane plasmique", "Le noyau", "Le cytoplasme", "Le ribosome"], bonne: 1, explication: "Le noyau abrite la majeure partie de l’ADN de cette cellule." },
      { q: "Quel gaz les plantes libèrent-elles lors de la photosynthèse ?", choix: ["Le méthane", "L’hélium", "Le dioxygène", "Le dihydrogène"], bonne: 2, explication: "Pendant la photosynthèse, les plantes produisent du dioxygène grâce à la lumière." },
      { q: "Quelle unité mesure une résistance électrique ?", choix: ["Le volt", "L’ampère", "Le watt", "L’ohm"], bonne: 3, explication: "La résistance électrique se mesure en ohms." },
      { q: "Pourquoi observe-t-on des saisons sur Terre ?", choix: ["L’axe terrestre est incliné pendant la révolution autour du Soleil.", "La Terre s’arrête de tourner en hiver.", "Le Soleil s’éteint partiellement en hiver.", "La Lune cache le Soleil chaque hiver."], bonne: 0, explication: "L’inclinaison terrestre fait varier la durée du jour et l’ensoleillement au fil de l’année." },
      { q: "Quel est le pH d’une solution neutre à 25 °C ?", choix: ["1", "7", "5", "14"], bonne: 1, explication: "À 25 °C, une solution neutre a un pH égal à 7." }
    ]
  },
  geographie: {
    facile: [
      { q: "Quelle est la capitale de la France ?", choix: ["Paris", "Lyon", "Marseille", "Lille"], bonne: 0, explication: "Paris est la capitale de la France." },
      { q: "Dans quel pays se trouve la ville de Rome ?", choix: ["L’Espagne", "L’Italie", "La France", "La Belgique"], bonne: 1, explication: "Rome est la capitale de l’Italie." },
      { q: "Comment appelle-t-on une grande étendue d’eau salée ?", choix: ["Un étang", "Une mare", "Une mer", "Une rivière"], bonne: 2, explication: "Une mer est une grande étendue d’eau salée." },
      { q: "Quel objet indique les points cardinaux ?", choix: ["Un thermomètre", "Une balance", "Un chronomètre", "Une boussole"], bonne: 3, explication: "La boussole permet de repérer le nord." },
      { q: "Sur quel continent se trouve la France métropolitaine ?", choix: ["L’Europe", "L’Asie", "L’Afrique", "L’Océanie"], bonne: 0, explication: "La France métropolitaine se situe en Europe." },
      { q: "Quel paysage présente de hauts sommets ?", choix: ["La plaine", "La montagne", "La plage", "Le marais"], bonne: 1, explication: "Les montagnes sont des reliefs élevés avec des sommets." }
    ],
    moyen: [
      { q: "Quel est le plus vaste océan du monde ?", choix: ["L’océan Pacifique", "L’océan Atlantique", "L’océan Indien", "L’océan Arctique"], bonne: 0, explication: "Le Pacifique est l’océan qui couvre la plus grande surface." },
      { q: "Quelle est la capitale de l’Espagne ?", choix: ["Barcelone", "Madrid", "Séville", "Lisbonne"], bonne: 1, explication: "Madrid est la capitale de l’Espagne." },
      { q: "Quel fleuve traverse Paris ?", choix: ["La Loire", "Le Rhône", "La Seine", "La Garonne"], bonne: 2, explication: "La Seine traverse Paris et se jette dans la Manche." },
      { q: "Sur quel continent se trouve le Brésil ?", choix: ["L’Afrique", "L’Europe", "L’Asie", "L’Amérique du Sud"], bonne: 3, explication: "Le Brésil est le plus vaste pays d’Amérique du Sud." },
      { q: "Quelle ligne imaginaire sépare les hémisphères Nord et Sud ?", choix: ["L’équateur", "Le méridien de Greenwich", "Le tropique du Cancer", "Le cercle polaire arctique"], bonne: 0, explication: "L’équateur partage la Terre en deux hémisphères, Nord et Sud." },
      { q: "Quel pays a la forme d’une botte sur les cartes ?", choix: ["Le Portugal", "L’Italie", "La Grèce", "La Norvège"], bonne: 1, explication: "La péninsule italienne ressemble à une botte." }
    ],
    difficile: [
      { q: "Quelle est la capitale du Canada ?", choix: ["Ottawa", "Toronto", "Montréal", "Vancouver"], bonne: 0, explication: "Ottawa est la capitale du Canada." },
      { q: "Quel détroit sépare l’Espagne du Maroc ?", choix: ["Le détroit de Béring", "Le détroit de Gibraltar", "Le détroit de Malacca", "Le détroit de Magellan"], bonne: 1, explication: "Le détroit de Gibraltar sépare l’Europe de l’Afrique à cet endroit." },
      { q: "Quelle chaîne de montagnes sépare en grande partie la France de l’Espagne ?", choix: ["Les Alpes", "Les Andes", "Les Pyrénées", "Les Carpates"], bonne: 2, explication: "Les Pyrénées forment une frontière naturelle entre la France et l’Espagne." },
      { q: "Que mesure la latitude d’un lieu ?", choix: ["Sa hauteur au-dessus de la mer", "Sa distance à la côte", "Sa position à l’est ou à l’ouest de Greenwich", "Sa position au nord ou au sud de l’équateur"], bonne: 3, explication: "La latitude se mesure en degrés au nord ou au sud de l’équateur." },
      { q: "Quel est le plus grand désert chaud du monde ?", choix: ["Le Sahara", "Le désert de Gobi", "Le désert du Kalahari", "Le désert d’Atacama"], bonne: 0, explication: "Le Sahara, en Afrique, est le plus vaste désert chaud du monde." },
      { q: "Dans quel pays se situe la ville de Kyoto ?", choix: ["La Chine", "Le Japon", "La Corée du Sud", "La Thaïlande"], bonne: 1, explication: "Kyoto est une ville japonaise qui fut longtemps la capitale du pays." }
    ]
  },
  culture: {
    facile: [
      { q: "Quel personnage de conte perd une pantoufle de verre ?", choix: ["Cendrillon", "Blanche-Neige", "Raiponce", "Le Petit Chaperon rouge"], bonne: 0, explication: "Dans le célèbre conte de Perrault, Cendrillon perd une pantoufle de verre." },
      { q: "Quel instrument possède des touches noires et blanches ?", choix: ["La flûte", "Le piano", "Le violon", "Le tambour"], bonne: 1, explication: "Le clavier du piano comporte des touches noires et blanches." },
      { q: "Dans quel sport frappe-t-on un ballon avec le pied pour marquer dans un but ?", choix: ["Le basket-ball", "Le tennis", "Le football", "La natation"], bonne: 2, explication: "Au football, on cherche à envoyer le ballon dans le but adverse." },
      { q: "Quelle fête est associée au sapin décoré ?", choix: ["Pâques", "Le carnaval", "La fête de la musique", "Noël"], bonne: 3, explication: "Le sapin décoré est une tradition de Noël." },
      { q: "Quel métier consiste notamment à préparer du pain ?", choix: ["Boulanger", "Jardinier", "Coiffeur", "Peintre"], bonne: 0, explication: "Le boulanger prépare et cuit le pain." },
      { q: "Quel objet utilise-t-on pour peindre avec de la gouache ?", choix: ["Une fourchette", "Un pinceau", "Une règle", "Une gomme"], bonne: 1, explication: "Le pinceau permet d’étaler la peinture sur le papier." }
    ],
    moyen: [
      { q: "Qui a écrit la fable « Le Corbeau et le Renard » dans son célèbre recueil français ?", choix: ["Jean de La Fontaine", "Victor Hugo", "Jules Verne", "Molière"], bonne: 0, explication: "Jean de La Fontaine a publié cette fable inspirée d’Ésope." },
      { q: "Combien d’anneaux compte le symbole olympique ?", choix: ["3", "5", "4", "6"], bonne: 1, explication: "Le symbole olympique est composé de cinq anneaux entrelacés." },
      { q: "Qui a peint « La Joconde » ?", choix: ["Claude Monet", "Pablo Picasso", "Léonard de Vinci", "Vincent van Gogh"], bonne: 2, explication: "Léonard de Vinci a peint La Joconde à la Renaissance." },
      { q: "Dans quelle série de bandes dessinées trouve-t-on le chien Idéfix ?", choix: ["Tintin", "Lucky Luke", "Les Schtroumpfs", "Astérix"], bonne: 3, explication: "Idéfix est le petit chien qui accompagne Obélix." },
      { q: "Quel art pratique principalement un sculpteur ?", choix: ["La sculpture", "La danse", "Le cinéma", "Le chant"], bonne: 0, explication: "Un sculpteur crée des œuvres en volume avec différents matériaux." },
      { q: "Combien de cordes possède habituellement un violon ?", choix: ["3", "4", "5", "6"], bonne: 1, explication: "Un violon classique possède quatre cordes." }
    ],
    difficile: [
      { q: "Qui a écrit « Le Petit Prince » ?", choix: ["Antoine de Saint-Exupéry", "Albert Camus", "Jules Verne", "Marcel Pagnol"], bonne: 0, explication: "Antoine de Saint-Exupéry est l’auteur du Petit Prince, publié en 1943." },
      { q: "En quelle année la Révolution française commence-t-elle ?", choix: ["1492", "1789", "1815", "1914"], bonne: 1, explication: "L’année 1789 marque le début de la Révolution française." },
      { q: "Quel compositeur a créé « La Flûte enchantée » ?", choix: ["Ludwig van Beethoven", "Frédéric Chopin", "Wolfgang Amadeus Mozart", "Antonio Vivaldi"], bonne: 2, explication: "La Flûte enchantée est un opéra de Mozart créé en 1791." },
      { q: "À quel mouvement artistique Claude Monet est-il associé ?", choix: ["Le cubisme", "Le surréalisme", "Le pop art", "L’impressionnisme"], bonne: 3, explication: "Monet est un peintre majeur de l’impressionnisme." },
      { q: "Quel texte adopté par l’ONU en 1948 proclame les droits fondamentaux de tous les êtres humains ?", choix: ["La Déclaration universelle des droits de l’homme", "Le Code civil français", "La Déclaration des droits de l’enfant de 1959", "La Constitution française de 1958"], bonne: 0, explication: "L’ONU a adopté la Déclaration universelle des droits de l’homme le 10 décembre 1948." },
      { q: "Dans la mythologie grecque, qui est le dieu de la mer ?", choix: ["Zeus", "Poséidon", "Arès", "Hermès"], bonne: 1, explication: "Poséidon est le dieu grec de la mer, souvent représenté avec un trident." }
    ]
  }
};
