// Questions de l'espace Adultes (QuizNova Adultes)
// Chaque question : q (texte), choix (4 réponses), bonne (index 0-3 de la bonne réponse), explication (phrase courte).
var QUESTIONS_ADULTES = {
  culture: {
    facile: [
      { q: "Qui a peint La Joconde ?", choix: ["Claude Monet", "Léonard de Vinci", "Pablo Picasso", "Paul Cézanne"], bonne: 1, explication: "Léonard de Vinci a peint La Joconde à la Renaissance." },
      { q: "Quel instrument possède habituellement 88 touches ?", choix: ["Le violon", "La flûte", "Le piano", "La trompette"], bonne: 2, explication: "Un piano standard possède 52 touches blanches et 36 touches noires." },
      { q: "Qui a écrit Les Misérables ?", choix: ["Victor Hugo", "Molière", "Émile Zola", "Albert Camus"], bonne: 0, explication: "Victor Hugo a publié Les Misérables en 1862." },
      { q: "Quel art est traditionnellement appelé le septième art ?", choix: ["La danse", "La sculpture", "La photographie", "Le cinéma"], bonne: 3, explication: "Le cinéma est traditionnellement désigné comme le septième art." },
      { q: "Dans quelle ville se trouve le musée du Louvre ?", choix: ["Lyon", "Paris", "Rome", "Madrid"], bonne: 1, explication: "Le Louvre se trouve à Paris, sur la rive droite de la Seine." },
      { q: "Quel personnage de conte perd une pantoufle de verre ?", choix: ["Blanche-Neige", "Raiponce", "Cendrillon", "La Belle au bois dormant"], bonne: 2, explication: "Dans la version de Charles Perrault, Cendrillon perd une pantoufle de verre." }
    ],
    moyen: [
      { q: "Qui a composé Les Quatre Saisons ?", choix: ["Antonio Vivaldi", "Frédéric Chopin", "Maurice Ravel", "Claude Debussy"], bonne: 0, explication: "Les Quatre Saisons sont quatre concertos pour violon de Vivaldi." },
      { q: "Quel écrivain a créé Sherlock Holmes ?", choix: ["Agatha Christie", "Jules Verne", "Bram Stoker", "Arthur Conan Doyle"], bonne: 3, explication: "Arthur Conan Doyle a créé Sherlock Holmes, apparu en 1887." },
      { q: "À quel mouvement artistique associe-t-on Claude Monet ?", choix: ["Au cubisme", "À l’impressionnisme", "Au surréalisme", "Au futurisme"], bonne: 1, explication: "Monet est une figure majeure de l’impressionnisme." },
      { q: "Qui est l’auteur de L’Étranger ?", choix: ["Jean-Paul Sartre", "André Gide", "Albert Camus", "Marcel Proust"], bonne: 2, explication: "Albert Camus a publié L’Étranger en 1942." },
      { q: "Dans la mythologie grecque, qui est la déesse de la sagesse ?", choix: ["Athéna", "Aphrodite", "Artémis", "Héra"], bonne: 0, explication: "Athéna est notamment la déesse de la sagesse et de la stratégie guerrière." },
      { q: "Quel réalisateur a signé Le Voyage dans la Lune, sorti en 1902 ?", choix: ["Louis Lumière", "Charlie Chaplin", "Fritz Lang", "Georges Méliès"], bonne: 3, explication: "Georges Méliès a réalisé ce film pionnier du cinéma fantastique." }
    ],
    difficile: [
      { q: "Qui a écrit le roman Cent ans de solitude ?", choix: ["Mario Vargas Llosa", "Gabriel García Márquez", "Jorge Luis Borges", "Julio Cortázar"], bonne: 1, explication: "Gabriel García Márquez a publié ce roman en 1967." },
      { q: "Quel compositeur a écrit Le Sacre du printemps ?", choix: ["Gustav Mahler", "Erik Satie", "Igor Stravinsky", "Richard Wagner"], bonne: 2, explication: "Le ballet de Stravinsky a été créé à Paris en 1913." },
      { q: "À quel architecte doit-on la villa Savoye ?", choix: ["Le Corbusier", "Antoni Gaudí", "Gustave Eiffel", "Frank Gehry"], bonne: 0, explication: "Le Corbusier a conçu la villa Savoye avec son cousin Pierre Jeanneret." },
      { q: "Quel auteur a écrit En attendant Godot ?", choix: ["Eugène Ionesco", "Jean Genet", "Bertolt Brecht", "Samuel Beckett"], bonne: 3, explication: "Samuel Beckett a écrit cette pièce, créée en 1953." },
      { q: "Quelle forme poétique japonaise compte traditionnellement 17 mores ?", choix: ["Le sonnet", "Le haïku", "L’alexandrin", "La ballade"], bonne: 1, explication: "Le haïku japonais suit traditionnellement une répartition de 5, 7 et 5 mores." },
      { q: "Quel peintre a réalisé Les Ménines ?", choix: ["Francisco de Goya", "El Greco", "Diego Vélasquez", "Salvador Dalí"], bonne: 2, explication: "Diego Vélasquez a peint Les Ménines en 1656." }
    ]
  },
  histoire: {
    facile: [
      { q: "En quelle année a eu lieu la prise de la Bastille ?", choix: ["1789", "1815", "1914", "1848"], bonne: 0, explication: "La Bastille a été prise le 14 juillet 1789." },
      { q: "Quelle est la capitale du Japon ?", choix: ["Kyoto", "Osaka", "Séoul", "Tokyo"], bonne: 3, explication: "Tokyo est la capitale du Japon ; Séoul est celle de la Corée du Sud." },
      { q: "Sur quel continent se situe le Pérou ?", choix: ["En Asie", "En Amérique du Sud", "En Afrique", "En Europe"], bonne: 1, explication: "Le Pérou se situe sur la côte occidentale de l’Amérique du Sud." },
      { q: "Quel fleuve traverse Paris ?", choix: ["Le Rhône", "La Loire", "La Seine", "La Garonne"], bonne: 2, explication: "La Seine traverse Paris avant de rejoindre la Manche." },
      { q: "Quelle civilisation a construit les pyramides de Gizeh ?", choix: ["Les Égyptiens de l’Antiquité", "Les Aztèques", "Les Vikings", "Les Incas"], bonne: 0, explication: "Les pyramides de Gizeh sont des monuments funéraires de l’Égypte antique." },
      { q: "Quel océan sépare l’Europe de l’Amérique du Nord ?", choix: ["L’océan Indien", "L’océan Pacifique", "L’océan Austral", "L’océan Atlantique"], bonne: 3, explication: "L’Atlantique s’étend entre ces deux continents." }
    ],
    moyen: [
      { q: "En quelle année Napoléon Ier a-t-il été vaincu à Waterloo ?", choix: ["1804", "1815", "1830", "1870"], bonne: 1, explication: "La bataille de Waterloo s’est déroulée le 18 juin 1815." },
      { q: "Quel détroit sépare l’Espagne du Maroc ?", choix: ["Le détroit de Béring", "Le détroit d’Ormuz", "Le détroit de Gibraltar", "Le détroit de Malacca"], bonne: 2, explication: "Le détroit de Gibraltar relie l’Atlantique à la Méditerranée." },
      { q: "Quelle ville fut la capitale de l’Empire byzantin ?", choix: ["Constantinople", "Athènes", "Alexandrie", "Venise"], bonne: 0, explication: "Constantinople fut la capitale de l’Empire byzantin jusqu’en 1453." },
      { q: "Quel pays possède la région de la Patagonie avec l’Argentine ?", choix: ["Le Pérou", "Le Brésil", "La Bolivie", "Le Chili"], bonne: 3, explication: "La Patagonie s’étend dans le sud de l’Argentine et du Chili." },
      { q: "Quel texte anglais de 1215 a limité le pouvoir du roi ?", choix: ["Le Code civil", "La Magna Carta", "L’édit de Nantes", "Le traité de Versailles"], bonne: 1, explication: "La Magna Carta a imposé des limites au pouvoir de Jean sans Terre." },
      { q: "Quelle chaîne montagneuse sépare naturellement la France de l’Espagne ?", choix: ["Les Alpes", "Les Carpates", "Les Pyrénées", "Les Apennins"], bonne: 2, explication: "Les Pyrénées forment une frontière naturelle entre la France et l’Espagne." }
    ],
    difficile: [
      { q: "Quels traités de 1648 ont mis fin à la guerre de Trente Ans ?", choix: ["Les traités de Westphalie", "Les traités d’Utrecht", "Les traités de Tilsit", "Les traités de Rome"], bonne: 0, explication: "Les traités de Westphalie ont mis fin à la guerre de Trente Ans dans le Saint-Empire." },
      { q: "Quel souverain malien a effectué un célèbre pèlerinage à La Mecque en 1324 ?", choix: ["Soundiata Keïta", "Sonni Ali", "Askia Mohammed", "Mansa Moussa"], bonne: 3, explication: "Mansa Moussa est célèbre pour ce pèlerinage et les richesses de son empire." },
      { q: "Quel pays est entièrement enclavé dans l’Afrique du Sud ?", choix: ["L’Eswatini", "Le Lesotho", "Le Botswana", "La Namibie"], bonne: 1, explication: "Le Lesotho est entièrement entouré par le territoire sud-africain." },
      { q: "Quel événement est conventionnellement associé à l’année 476 en Europe ?", choix: ["La chute de Constantinople", "Le sacre de Charlemagne", "La fin de l’Empire romain d’Occident", "La bataille de Hastings"], bonne: 2, explication: "La déposition de Romulus Augustule en 476 marque conventionnellement cette fin." },
      { q: "Quel lac est le plus profond du monde ?", choix: ["Le lac Baïkal", "Le lac Victoria", "Le lac Léman", "Le lac Titicaca"], bonne: 0, explication: "Le lac Baïkal, en Sibérie, atteint environ 1 642 mètres de profondeur." },
      { q: "Quelle conférence de 1884-1885 a fixé des règles de la colonisation européenne en Afrique ?", choix: ["La conférence de Yalta", "La conférence de Bandung", "La conférence de Munich", "La conférence de Berlin"], bonne: 3, explication: "La conférence de Berlin a notamment défini des règles d’occupation coloniale en Afrique." }
    ]
  },
  sciences: {
    facile: [
      { q: "Quelle est la formule chimique de l’eau ?", choix: ["CO₂", "H₂O", "O₂", "NaCl"], bonne: 1, explication: "Une molécule d’eau contient deux atomes d’hydrogène et un atome d’oxygène." },
      { q: "Quelle planète est surnommée la planète rouge ?", choix: ["Vénus", "Jupiter", "Mars", "Neptune"], bonne: 2, explication: "Les oxydes de fer présents à sa surface donnent à Mars sa couleur rougeâtre." },
      { q: "Quel organe propulse le sang dans le corps humain ?", choix: ["Le cœur", "Le foie", "L’estomac", "La rate"], bonne: 0, explication: "Le cœur se contracte pour propulser le sang dans les vaisseaux." },
      { q: "Quelle unité mesure une durée ?", choix: ["Le mètre", "Le kilogramme", "L’ampère", "La seconde"], bonne: 3, explication: "La seconde est l’unité de base de durée dans le Système international." },
      { q: "Quel gaz les plantes absorbent-elles pour la photosynthèse ?", choix: ["L’hélium", "Le dioxyde de carbone", "Le néon", "Le méthane"], bonne: 1, explication: "La photosynthèse utilise le dioxyde de carbone pour produire de la matière organique." },
      { q: "Combien de pattes possède un insecte adulte typique ?", choix: ["Quatre", "Huit", "Six", "Dix"], bonne: 2, explication: "Les insectes possèdent trois paires de pattes attachées au thorax." }
    ],
    moyen: [
      { q: "Quelle particule porte une charge électrique négative ?", choix: ["L’électron", "Le proton", "Le neutron", "Le photon"], bonne: 0, explication: "L’électron porte une charge négative, opposée à celle du proton." },
      { q: "Quel organite produit l’essentiel de l’ATP lors de la respiration d’une cellule animale ?", choix: ["Le noyau", "Le lysosome", "Le ribosome", "La mitochondrie"], bonne: 3, explication: "La mitochondrie produit une grande partie de l’ATP par phosphorylation oxydative." },
      { q: "Que signifie HTTP en informatique ?", choix: ["High Transfer Text Program", "Hypertext Transfer Protocol", "Hardware Transmission Test Process", "Hyperlink Text Translation Program"], bonne: 1, explication: "HTTP signifie Hypertext Transfer Protocol, un protocole d’échange utilisé sur le Web." },
      { q: "Quel phénomène explique principalement les saisons terrestres ?", choix: ["La variation quotidienne du vent", "Les phases de la Lune", "L’inclinaison de l’axe terrestre", "La rotation du Soleil"], bonne: 2, explication: "L’inclinaison de l’axe terrestre fait varier l’éclairement et la durée du jour au cours de l’année." },
      { q: "Quel est le pH d’une solution neutre à 25 °C ?", choix: ["7", "1", "10", "14"], bonne: 0, explication: "À 25 °C, une solution neutre a un pH de 7." },
      { q: "Quelle molécule porte l’information génétique des cellules humaines ?", choix: ["Le glucose", "L’amidon", "Le cholestérol", "L’ADN"], bonne: 3, explication: "La séquence des nucléotides de l’ADN porte l’information génétique." }
    ],
    difficile: [
      { q: "Quelle loi relie tension U, résistance R et intensité I par U = RI ?", choix: ["La loi de Boyle-Mariotte", "La loi d’Ohm", "La loi de Kepler", "La loi de Hooke"], bonne: 1, explication: "La loi d’Ohm décrit cette relation pour un conducteur ohmique." },
      { q: "Quels atomes sont des isotopes d’un même élément ?", choix: ["Ceux ayant le même nombre de neutrons uniquement", "Ceux ayant des nombres de protons différents", "Ceux ayant le même nombre de protons mais des nombres de neutrons différents", "Ceux ayant toujours la même masse"], bonne: 2, explication: "Le nombre de protons définit l’élément ; les isotopes diffèrent par leurs neutrons." },
      { q: "Quelle est la dérivée de x² par rapport à x ?", choix: ["2x", "x", "x³", "2"], bonne: 0, explication: "La règle de dérivation des puissances donne la dérivée de x² : 2x." },
      { q: "Dans le vide, quelle onde se propage à la vitesse de la lumière ?", choix: ["Une onde sonore", "Une vague marine", "Une onde sismique", "Une onde radio"], bonne: 3, explication: "Les ondes radio sont des ondes électromagnétiques, comme la lumière visible." },
      { q: "Quel mécanisme augmente la fréquence d’un caractère héréditaire favorisant la reproduction ?", choix: ["La sublimation", "La sélection naturelle", "La réfraction", "La fermentation"], bonne: 1, explication: "La sélection naturelle favorise les caractères héréditaires associés à un meilleur succès reproducteur." },
      { q: "Quelle est la complexité temporelle d’une recherche dichotomique dans un tableau trié de taille n ?", choix: ["O(n²)", "O(n)", "O(log n)", "O(2ⁿ)"], bonne: 2, explication: "Chaque étape divise approximativement par deux l’espace de recherche." }
    ]
  },
  economie: {
    facile: [
      { q: "Que désigne l’inflation ?", choix: ["Une hausse générale et durable des prix", "Une baisse de tous les salaires", "Une hausse de la population", "La disparition de la monnaie"], bonne: 0, explication: "L’inflation correspond à une hausse générale et durable du niveau des prix." },
      { q: "Qu’est-ce qu’un budget à l’équilibre ?", choix: ["Des dépenses supérieures aux recettes", "Des recettes nulles", "Des dépenses nulles", "Des recettes égales aux dépenses"], bonne: 3, explication: "Un budget est à l’équilibre lorsque les recettes couvrent exactement les dépenses." },
      { q: "Que signifie PIB ?", choix: ["Prix intérieur brut", "Produit intérieur brut", "Patrimoine individuel bancaire", "Prélèvement international de base"], bonne: 1, explication: "Le produit intérieur brut mesure la richesse produite sur un territoire pendant une période." },
      { q: "Qu’est-ce que l’épargne ?", choix: ["Un impôt sur les achats", "Un emprunt obligatoire", "La part du revenu qui n’est pas consommée", "Une réduction de prix"], bonne: 2, explication: "L’épargne est la partie du revenu disponible qui n’est pas consacrée à la consommation." },
      { q: "Qu’est-ce qu’un salaire brut ?", choix: ["Le salaire avant déduction des cotisations salariales", "Le salaire après tous les prélèvements", "Le montant des seuls pourboires", "Le bénéfice annuel de l’entreprise"], bonne: 0, explication: "Le salaire brut est calculé avant déduction des cotisations salariales." },
      { q: "Que représente un taux d’intérêt pour un emprunteur ?", choix: ["Le nombre de ses achats", "La durée de ses congés", "Le montant de ses impôts locaux", "Le coût du crédit exprimé en pourcentage du capital"], bonne: 3, explication: "Le taux d’intérêt exprime le coût des intérêts relativement au capital emprunté sur une période donnée." }
    ],
    moyen: [
      { q: "Que désigne le coût d’opportunité d’un choix ?", choix: ["La somme de toutes les dépenses passées", "La valeur de la meilleure option à laquelle on renonce", "Le prix le plus bas du marché", "Une taxe sur les occasions"], bonne: 1, explication: "Choisir une option implique de renoncer au bénéfice de la meilleure autre option disponible." },
      { q: "Qu’est-ce qu’une action d’entreprise ?", choix: ["Un prêt accordé à l’État", "Une facture commerciale", "Une part de propriété de l’entreprise", "Un contrat d’assurance"], bonne: 2, explication: "Une action représente une fraction du capital d’une société." },
      { q: "Qu’est-ce qu’une obligation financière classique ?", choix: ["Un titre de dette", "Une part de stock de marchandises", "Une pièce de monnaie", "Un droit de vote politique"], bonne: 0, explication: "L’émetteur d’une obligation emprunte des fonds et s’engage à les rembourser selon des modalités définies." },
      { q: "Qu’est-ce qu’un monopole sur un marché ?", choix: ["Une multitude de vendeurs identiques", "L’absence de tout acheteur", "Deux vendeurs seulement", "Un seul offreur face à des acheteurs"], bonne: 3, explication: "Un monopole correspond à la présence d’un seul offreur sur un marché." },
      { q: "À quoi sert principalement la diversification d’un portefeuille ?", choix: ["À garantir un rendement positif", "À réduire le risque lié à un placement particulier", "À supprimer tous les impôts", "À rendre les pertes impossibles"], bonne: 1, explication: "Répartir les placements limite l’exposition à un actif particulier, sans éliminer tous les risques." },
      { q: "Si le prix augmente de 100 € à 110 €, quelle est la hausse en pourcentage ?", choix: ["5 %", "20 %", "10 %", "11 %"], bonne: 2, explication: "La hausse est de 10 € sur une base de 100 €, soit 10 %." }
    ],
    difficile: [
      { q: "Quel exemple illustre une externalité négative ?", choix: ["La pollution d’une usine imposant des coûts aux riverains", "Un salaire versé à un employé", "Un achat payé au prix affiché", "Un dividende versé à un actionnaire"], bonne: 0, explication: "La pollution impose à des tiers un coût qui n’est pas nécessairement pris en compte dans le prix." },
      { q: "Quel critère définit un bien public pur ?", choix: ["Il est toujours gratuit et abondant", "Il est uniquement produit par une entreprise", "Il est rival et excluable", "Il est non rival et non excluable"], bonne: 3, explication: "Sa consommation ne réduit pas celle des autres et il est impossible d’en exclure les utilisateurs." },
      { q: "Selon le principe de l’avantage comparatif, un pays se spécialise dans la production dont il a…", choix: ["Le prix de vente le plus élevé", "Le coût d’opportunité le plus faible", "La consommation intérieure la plus faible", "Le nombre d’usines le plus élevé"], bonne: 1, explication: "L’avantage comparatif repose sur les coûts d’opportunité relatifs, pas uniquement sur la productivité absolue." },
      { q: "Un placement de 1 000 € rapporte 10 % par an, capitalisés. Quelle somme obtient-on après deux ans, sans frais ni impôts ?", choix: ["1 100 €", "1 200 €", "1 210 €", "1 020 €"], bonne: 2, explication: "Après un an, le capital vaut 1 100 € ; après deux ans, il vaut 1 100 × 1,10 = 1 210 €." },
      { q: "Qu’est-ce que le PIB réel corrige par rapport au PIB nominal ?", choix: ["Les variations du niveau des prix", "Les différences de superficie", "Le nombre de jours fériés uniquement", "Le taux de change uniquement"], bonne: 0, explication: "Le PIB réel est calculé en volume pour neutraliser l’effet des variations des prix." },
      { q: "Si une hausse du prix de 1 % réduit la quantité demandée de 2 %, quelle est l’élasticité-prix de la demande ?", choix: ["2", "0,5", "−0,5", "−2"], bonne: 3, explication: "L’élasticité-prix est le rapport de la variation relative de la quantité à celle du prix : −2 % / 1 %." }
    ]
  },
  langues: {
    facile: [
      { q: "Comment dit-on « chat » en anglais ?", choix: ["Dog", "Cat", "Bird", "Horse"], bonne: 1, explication: "Le mot anglais « cat » signifie « chat »." },
      { q: "Que signifie « gracias » en espagnol ?", choix: ["Bonjour", "Pardon", "Merci", "Demain"], bonne: 2, explication: "« Gracias » est la formule espagnole pour remercier." },
      { q: "Comment dit-on « bonjour » en allemand pendant la journée ?", choix: ["Guten Tag", "Gute Nacht", "Auf Wiedersehen", "Danke"], bonne: 0, explication: "« Guten Tag » signifie « bonjour » ; « Gute Nacht » signifie « bonne nuit »." },
      { q: "Quel est le pluriel anglais de « child » ?", choix: ["Childs", "Childes", "Childrens", "Children"], bonne: 3, explication: "« Child » possède le pluriel irrégulier « children »." },
      { q: "Que signifie « libro » en espagnol ?", choix: ["Libre", "Livre", "Arbre", "Crayon"], bonne: 1, explication: "« Libro » désigne un livre en espagnol." },
      { q: "Quel mot allemand signifie « eau » ?", choix: ["Feuer", "Brot", "Wasser", "Haus"], bonne: 2, explication: "« Wasser » signifie « eau » en allemand." }
    ],
    moyen: [
      { q: "Complétez en anglais : « She … to school every day. »", choix: ["goes", "go", "going", "gone"], bonne: 0, explication: "Au présent simple, le verbe prend ici la terminaison de troisième personne du singulier : « goes »." },
      { q: "Comment dit-on « Je m’appelle Ana » en espagnol ?", choix: ["Tengo Ana", "Soy llamo Ana", "Me llama Ana", "Me llamo Ana"], bonne: 3, explication: "« Me llamo Ana » utilise le verbe pronominal « llamarse »." },
      { q: "Quel article défini accompagne le nom allemand « Sonne » au nominatif singulier ?", choix: ["der", "die", "das", "den"], bonne: 1, explication: "« Sonne » est un nom féminin : on dit « die Sonne »." },
      { q: "Que signifie « library » en français ?", choix: ["Librairie", "Laboratoire", "Bibliothèque", "Papeterie"], bonne: 2, explication: "« Library » signifie « bibliothèque » ; une librairie se dit « bookshop » ou « bookstore »." },
      { q: "Quel est le prétérit anglais de « go » ?", choix: ["went", "goed", "gone", "going"], bonne: 0, explication: "« Go » est irrégulier : son prétérit est « went »." },
      { q: "Que signifie le préfixe grec « bio- » dans « biologie » ?", choix: ["La terre", "Le temps", "La lumière", "La vie"], bonne: 3, explication: "Le préfixe « bio- » vient du grec « bios », qui signifie « vie »." }
    ],
    difficile: [
      { q: "Complétez : « If I had known, I … have called you. »", choix: ["will", "would", "can", "do"], bonne: 1, explication: "Cette hypothèse passée irréelle se construit avec « would have » suivi du participe passé." },
      { q: "En espagnol, quelle forme complète « Quiero que tú … » avec le verbe « venir » ?", choix: ["vienes", "vendrás", "vengas", "venías"], bonne: 2, explication: "Après « quiero que », on emploie le subjonctif : « vengas »." },
      { q: "Quel cas suit toujours la préposition allemande « mit » ?", choix: ["Le datif", "L’accusatif", "Le génitif", "Le nominatif"], bonne: 0, explication: "La préposition « mit » régit le datif." },
      { q: "De quelle langue le français a-t-il emprunté le mot « algèbre » ?", choix: ["Du japonais", "Du russe", "Du suédois", "De l’arabe"], bonne: 3, explication: "« Algèbre » vient de l’arabe « al-jabr », un terme lié au rétablissement ou à la restauration." },
      { q: "Quel mot anglais est le participe passé de « write » ?", choix: ["wrote", "written", "writing", "writes"], bonne: 1, explication: "Les formes principales sont « write », « wrote », « written »." },
      { q: "En allemand, quel ordre convient après « weil » dans une proposition subordonnée déclarative ?", choix: ["Le verbe conjugué est toujours premier", "Le sujet est toujours dernier", "Le verbe conjugué est en position finale", "Le verbe conjugué disparaît"], bonne: 2, explication: "Dans la construction standard avec « weil », le verbe conjugué se place à la fin de la subordonnée." }
    ]
  },
  logique: {
    facile: [
      { q: "Quel nombre complète la suite des nombres pairs : 2, 4, 6, 8, … ?", choix: ["10", "9", "11", "12"], bonne: 0, explication: "Chaque terme augmente de 2 : après 8 vient 10." },
      { q: "Tous les chats sont des mammifères. Minou est un chat. Que peut-on conclure ?", choix: ["Minou est un oiseau", "Tous les mammifères sont des chats", "Minou n’est pas un mammifère", "Minou est un mammifère"], bonne: 3, explication: "Minou appartient à la catégorie des chats, elle-même incluse dans celle des mammifères." },
      { q: "Dans une course sans ex æquo, vous dépassez la personne en deuxième position. Quelle place occupez-vous aussitôt ?", choix: ["La première", "La deuxième", "La troisième", "La quatrième"], bonne: 1, explication: "Vous prenez la place de la personne dépassée, donc la deuxième." },
      { q: "Combien font trois douzaines d’œufs ?", choix: ["24", "30", "36", "48"], bonne: 2, explication: "Une douzaine vaut 12 : 3 × 12 = 36." },
      { q: "Si demain est jeudi, quel jour sommes-nous aujourd’hui ?", choix: ["Mercredi", "Mardi", "Vendredi", "Dimanche"], bonne: 0, explication: "Le jour qui précède jeudi est mercredi." },
      { q: "Une boîte contient uniquement 3 billes rouges et 2 bleues. Combien contient-elle de billes ?", choix: ["2", "3", "6", "5"], bonne: 3, explication: "On additionne les deux quantités : 3 + 2 = 5." }
    ],
    moyen: [
      { q: "La suite commence à 3 et chaque terme est le double du précédent : 3, 6, 12, 24, … Quel est le suivant ?", choix: ["36", "48", "30", "42"], bonne: 1, explication: "On multiplie 24 par 2 pour obtenir 48." },
      { q: "Tous les A sont B. Aucun B n’est C. Quelle conclusion est nécessaire ?", choix: ["Tous les C sont A", "Certains A sont C", "Aucun A n’est C", "Tous les B sont A"], bonne: 2, explication: "Puisque les A sont des B et qu’aucun B n’est C, aucun A ne peut être C." },
      { q: "Une boîte contient des billes rouges et bleues. Combien faut-il en tirer sans regarder pour garantir deux billes de même couleur ?", choix: ["3", "2", "4", "5"], bonne: 0, explication: "Avec deux couleurs, trois billes contiennent nécessairement au moins une paire de même couleur." },
      { q: "Un père a 40 ans et son fils 10 ans. Dans combien d’années le père aura-t-il deux fois l’âge du fils ?", choix: ["10 ans", "15 ans", "30 ans", "20 ans"], bonne: 3, explication: "Dans 20 ans, le père aura 60 ans et le fils 30 ans." },
      { q: "Cinq machines identiques fabriquent cinq pièces en cinq minutes. Combien de temps faut-il à cent machines pour fabriquer cent pièces au même rythme ?", choix: ["100 minutes", "5 minutes", "20 minutes", "1 minute"], bonne: 1, explication: "Chaque machine fabrique une pièce en cinq minutes ; cent machines en fabriquent donc cent dans ce délai." },
      { q: "Un article coûte 80 €. Son prix augmente de 25 %, puis baisse de 25 %. Quel est son prix final ?", choix: ["80 €", "60 €", "75 €", "100 €"], bonne: 2, explication: "Après la hausse, le prix atteint 100 € ; la baisse de 25 % le ramène à 75 €." }
    ],
    difficile: [
      { q: "On lance deux dés équilibrés à six faces, indépendants. Quelle est la probabilité d’obtenir une somme de 7 ?", choix: ["1/6", "1/12", "1/36", "1/3"], bonne: 0, explication: "Six couples de résultats sur 36 donnent une somme de 7." },
      { q: "Une seule de ces trois affirmations est vraie : A dit « Le trésor est dans B » ; B dit « Le trésor n’est pas dans B » ; C dit « Le trésor n’est pas dans A ». Le trésor est dans une seule boîte. Où est-il ?", choix: ["Dans B", "Dans C", "Impossible à déterminer", "Dans A"], bonne: 3, explication: "Les affirmations de A et B sont opposées : exactement l’une est vraie. Celle de C doit donc être fausse, et le trésor est dans A." },
      { q: "Une horloge avance de 5 minutes par heure réelle. Réglée à midi, quelle heure indique-t-elle après six heures réelles ?", choix: ["18 h 05", "18 h 30", "17 h 30", "18 h 25"], bonne: 1, explication: "En six heures réelles, elle gagne 6 × 5 = 30 minutes." },
      { q: "Quel est le plus petit entier positif laissant un reste de 1 lorsqu’on le divise par 2, par 3 et par 4, tout en étant divisible par 5 ?", choix: ["5", "15", "25", "35"], bonne: 2, explication: "Les nombres laissant ces restes sont de la forme 12k + 1 ; le premier multiple positif de 5 parmi eux est 25." },
      { q: "On tire deux cartes sans remise dans un jeu de 52 cartes contenant quatre as. Sachant que la première carte est un as, quelle est la probabilité que la seconde soit un as ?", choix: ["1/17", "1/13", "2/13", "4/51"], bonne: 0, explication: "Il reste trois as parmi 51 cartes, soit 3/51 = 1/17." },
      { q: "Une suite vérifie u₁ = 1 et uₙ₊₁ = 2uₙ + 1. Quelle est la valeur de u₅ ?", choix: ["15", "16", "63", "31"], bonne: 3, explication: "Les cinq premiers termes sont 1, 3, 7, 15 et 31." }
    ]
  }
};
