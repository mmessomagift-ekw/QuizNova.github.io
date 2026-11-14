/* =========================================================
   QuizNova — logique de l'application
   Apprendre. Jouer. Évoluer.
   ========================================================= */

// ---------- 1. Données de configuration ----------

var CATEGORIES = {
  kids: [
    { cle: "maths", nom: "Mathématiques", icone: "🔢" },
    { cle: "francais", nom: "Français", icone: "📚" },
    { cle: "anglais", nom: "Anglais", icone: "🇬🇧" },
    { cle: "sciences", nom: "Sciences", icone: "🔬" },
    { cle: "geographie", nom: "Géographie", icone: "🌍" },
    { cle: "culture", nom: "Culture générale", icone: "💡" }
  ],
  adultes: [
    { cle: "culture", nom: "Culture générale", icone: "01" },
    { cle: "histoire", nom: "Histoire et géographie", icone: "02" },
    { cle: "sciences", nom: "Sciences et technologies", icone: "03" },
    { cle: "economie", nom: "Économie", icone: "04" },
    { cle: "langues", nom: "Langues", icone: "05" },
    { cle: "logique", nom: "Logique et raisonnement", icone: "06" }
  ]
};

var NIVEAUX = [
  { cle: "facile", nom: "Facile", kids: "🐣 Facile" },
  { cle: "moyen", nom: "Moyen", kids: "🦊 Moyen" },
  { cle: "difficile", nom: "Difficile", kids: "🦁 Difficile" }
];

// Tranche d'âge -> niveau conseillé (modifiable ensuite par l'enfant)
var AGES = [
  { cle: "6-8", nom: "6 – 8 ans", niveau: "facile" },
  { cle: "9-11", nom: "9 – 11 ans", niveau: "moyen" },
  { cle: "12-14", nom: "12 – 14 ans", niveau: "difficile" }
];

// Badges débloqués selon le total d'étoiles
var BADGES = [
  { etoiles: 5, nom: "Petit curieux", icone: "🌱" },
  { etoiles: 20, nom: "Explorateur", icone: "🔍" },
  { etoiles: 40, nom: "Astronaute du savoir", icone: "🚀" },
  { etoiles: 70, nom: "Génie en herbe", icone: "🧠" },
  { etoiles: 100, nom: "Super champion", icone: "👑" }
];

var CLE_HISTORIQUE = "quiznova_historique";
var CLE_ETOILES = "quiznova_etoiles";

// ---------- 2. État de l'application ----------

var choixKids = { age: null, categorie: null, niveau: null };
var choixAdultes = { categorie: null, niveau: null };

var quiz = {
  espace: null,      // "kids" ou "adultes"
  categorie: null,
  niveau: null,
  questions: [],     // questions mélangées
  index: 0,
  score: 0,
  reponses: []       // { question, choisie, bonne }
};

// ---------- 3. Petits outils ----------

function $(id) { return document.getElementById(id); }

function creer(tag, classe, texte) {
  var el = document.createElement(tag);
  if (classe) el.className = classe;
  if (texte !== undefined) el.textContent = texte;
  return el;
}

// Mélange de Fisher–Yates
function melanger(liste) {
  var copie = liste.slice();
  for (var i = copie.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = copie[i]; copie[i] = copie[j]; copie[j] = tmp;
  }
  return copie;
}

function trouverCategorie(espace, cle) {
  return CATEGORIES[espace].find(function (c) { return c.cle === cle; });
}
function nomNiveau(cle) {
  return NIVEAUX.find(function (n) { return n.cle === cle; }).nom;
}

// ---------- 4. LocalStorage ----------

function lireHistorique() {
  try { return JSON.parse(localStorage.getItem(CLE_HISTORIQUE)) || []; }
  catch (e) { return []; }
}
function sauverHistorique(liste) {
  localStorage.setItem(CLE_HISTORIQUE, JSON.stringify(liste));
}
function lireEtoiles() {
  return parseInt(localStorage.getItem(CLE_ETOILES), 10) || 0;
}
function ajouterEtoiles(n) {
  localStorage.setItem(CLE_ETOILES, String(lireEtoiles() + n));
}

// ---------- 5. Navigation entre les écrans ----------

function afficherEcran(nom) {
  document.querySelectorAll(".screen").forEach(function (s) { s.hidden = true; });
  $("screen-" + nom).hidden = false;

  // Le thème visuel suit l'espace en cours
  var theme = "accueil";
  if (nom === "kids") theme = "kids";
  if (nom === "adultes") theme = "adultes";
  if (nom === "quiz" || nom === "resultats") theme = quiz.espace;
  document.body.setAttribute("data-theme", theme);

  if (nom === "kids") afficherRecompenses();
  if (nom === "historique") afficherHistorique("tous");
  window.scrollTo(0, 0);
}

// ---------- 6. Construction des écrans de configuration ----------

// Crée une rangée de boutons "pilule" ; un seul peut être sélectionné
function rangeeOptions(conteneur, options, libelle, auClic) {
  conteneur.innerHTML = "";
  options.forEach(function (opt) {
    var b = creer("button", "option-btn", libelle(opt));
    b.type = "button";
    b.dataset.cle = opt.cle;
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () { auClic(opt.cle); });
    conteneur.appendChild(b);
  });
}

function marquerSelection(conteneur, cle) {
  conteneur.querySelectorAll("[data-cle]").forEach(function (b) {
    var actif = b.dataset.cle === cle;
    b.classList.toggle("is-selected", actif);
    b.setAttribute("aria-pressed", actif ? "true" : "false");
  });
}

function grilleCategories(conteneur, espace, auClic) {
  conteneur.innerHTML = "";
  CATEGORIES[espace].forEach(function (cat) {
    var col = creer("div", "col-6 col-md-4");
    var b = creer("button", "category-card");
    b.type = "button";
    b.dataset.cle = cat.cle;
    b.setAttribute("aria-pressed", "false");
    b.appendChild(creer("span", "category-icon", cat.icone));
    b.appendChild(creer("span", "category-name", cat.nom));
    b.addEventListener("click", function () { auClic(cat.cle); });
    col.appendChild(b);
    conteneur.appendChild(col);
  });
}

function construireKids() {
  rangeeOptions($("kids-ages"), AGES, function (a) { return a.nom; }, function (cle) {
    choixKids.age = cle;
    marquerSelection($("kids-ages"), cle);
    // Niveau conseillé selon l'âge
    var age = AGES.find(function (a) { return a.cle === cle; });
    choixKids.niveau = age.niveau;
    marquerSelection($("kids-levels"), age.niveau);
    majBoutonKids();
  });
  grilleCategories($("kids-categories"), "kids", function (cle) {
    choixKids.categorie = cle;
    marquerSelection($("kids-categories"), cle);
    majBoutonKids();
  });
  rangeeOptions($("kids-levels"), NIVEAUX, function (n) { return n.kids; }, function (cle) {
    choixKids.niveau = cle;
    marquerSelection($("kids-levels"), cle);
    majBoutonKids();
  });
  $("kids-start").addEventListener("click", function () {
    demarrerQuiz("kids", choixKids.categorie, choixKids.niveau);
  });
}

function majBoutonKids() {
  $("kids-start").disabled = !(choixKids.age && choixKids.categorie && choixKids.niveau);
}

function construireAdultes() {
  grilleCategories($("adultes-categories"), "adultes", function (cle) {
    choixAdultes.categorie = cle;
    marquerSelection($("adultes-categories"), cle);
    majBoutonAdultes();
  });
  rangeeOptions($("adultes-levels"), NIVEAUX, function (n) { return n.nom; }, function (cle) {
    choixAdultes.niveau = cle;
    marquerSelection($("adultes-levels"), cle);
    majBoutonAdultes();
  });
  $("adultes-start").addEventListener("click", function () {
    demarrerQuiz("adultes", choixAdultes.categorie, choixAdultes.niveau);
  });
}

function majBoutonAdultes() {
  $("adultes-start").disabled = !(choixAdultes.categorie && choixAdultes.niveau);
}

// ---------- 7. Étoiles et badges (enfants) ----------

function afficherRecompenses() {
  var total = lireEtoiles();
  $("kids-stars").textContent = total;
  var zone = $("kids-badges");
  zone.innerHTML = "";
  BADGES.forEach(function (badge) {
    var obtenu = total >= badge.etoiles;
    var el = creer("div", "badge-item" + (obtenu ? " is-earned" : ""));
    el.appendChild(creer("span", "badge-icon", obtenu ? badge.icone : "🔒"));
    el.appendChild(creer("span", "badge-name", badge.nom));
    el.appendChild(creer("span", "badge-goal", obtenu ? "Débloqué !" : badge.etoiles + " ⭐"));
    zone.appendChild(el);
  });
}

// ---------- 8. Déroulement du quiz ----------

function demarrerQuiz(espace, categorie, niveau) {
  var banque = espace === "kids" ? QUESTIONS_KIDS : QUESTIONS_ADULTES;
  var liste = banque[categorie][niveau];

  quiz.espace = espace;
  quiz.categorie = categorie;
  quiz.niveau = niveau;
  quiz.index = 0;
  quiz.score = 0;
  quiz.reponses = [];

  // On mélange l'ordre des questions ET des réponses
  quiz.questions = melanger(liste).map(function (q) {
    var ordre = melanger([0, 1, 2, 3]);
    return {
      q: q.q,
      choix: ordre.map(function (i) { return q.choix[i]; }),
      bonne: ordre.indexOf(q.bonne),
      explication: q.explication
    };
  });

  var cat = trouverCategorie(espace, categorie);
  $("quiz-meta").textContent = cat.nom + " · " + nomNiveau(niveau);
  afficherEcran("quiz");
  afficherQuestion();
}

function afficherQuestion() {
  var total = quiz.questions.length;
  var q = quiz.questions[quiz.index];

  var pourcentage = Math.round((quiz.index / total) * 100);
  $("quiz-progress-fill").style.width = pourcentage + "%";
  $("quiz-progress").setAttribute("aria-valuenow", pourcentage);
  $("quiz-counter").textContent = "Question " + (quiz.index + 1) + " sur " + total;
  $("quiz-score").textContent = quiz.score;
  $("quiz-question").textContent = q.q;

  var zone = $("quiz-choices");
  zone.innerHTML = "";
  q.choix.forEach(function (texte, i) {
    var b = creer("button", "choice-btn");
    b.type = "button";
    b.appendChild(creer("span", "choice-letter", "ABCD"[i]));
    b.appendChild(creer("span", "choice-text", texte));
    b.addEventListener("click", function () { validerReponse(i); });
    zone.appendChild(b);
  });

  $("quiz-feedback").hidden = true;
  $("quiz-next").hidden = true;
}

function validerReponse(choisie) {
  var q = quiz.questions[quiz.index];
  var juste = choisie === q.bonne;
  if (juste) quiz.score++;
  quiz.reponses.push({ question: q, choisie: choisie, juste: juste });

  // Correction immédiate : on colore les réponses et on bloque les boutons
  var boutons = $("quiz-choices").querySelectorAll(".choice-btn");
  boutons.forEach(function (b, i) {
    b.disabled = true;
    if (i === q.bonne) b.classList.add("is-correct");
    else if (i === choisie) b.classList.add("is-wrong");
  });

  var kids = quiz.espace === "kids";
  var fb = $("quiz-feedback");
  fb.className = "feedback " + (juste ? "is-correct" : "is-wrong");
  $("quiz-feedback-title").textContent = juste
    ? (kids ? "Bravo ! +1 ⭐" : "Bonne réponse")
    : (kids ? "Oups ! La bonne réponse était : " : "Mauvaise réponse — la bonne était : ") + (juste ? "" : q.choix[q.bonne]);
  $("quiz-feedback-text").textContent = q.explication;
  fb.hidden = false;

  $("quiz-score").textContent = quiz.score;
  var derniere = quiz.index === quiz.questions.length - 1;
  $("quiz-next").textContent = derniere ? "Voir mes résultats →" : "Question suivante →";
  $("quiz-next").hidden = false;
  $("quiz-next").focus();
}

function questionSuivante() {
  if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    afficherQuestion();
  } else {
    terminerQuiz();
  }
}

// ---------- 9. Résultats ----------

function messageResultat(pct, kids) {
  if (pct === 100) return kids ? "Parfait ! Tu es un champion ! 🏆" : "Sans faute, impressionnant !";
  if (pct >= 80) return kids ? "Excellent travail ! 🎉" : "Excellent résultat";
  if (pct >= 60) return kids ? "Très bien, continue ! 💪" : "Bon résultat";
  if (pct >= 40) return kids ? "Pas mal, tu progresses ! 🌱" : "Peut mieux faire";
  return kids ? "Ne lâche rien, réessaie ! 🌈" : "Continuez à vous entraîner";
}

function terminerQuiz() {
  var total = quiz.questions.length;
  var pct = Math.round((quiz.score / total) * 100);
  var kids = quiz.espace === "kids";
  var cat = trouverCategorie(quiz.espace, quiz.categorie);

  $("quiz-progress-fill").style.width = "100%";

  // Étoiles : 1 par bonne réponse + 2 bonus si sans faute
  var etoilesGagnees = 0;
  var badgeNouveau = null;
  if (kids) {
    var avant = lireEtoiles();
    etoilesGagnees = quiz.score + (pct === 100 ? 2 : 0);
    ajouterEtoiles(etoilesGagnees);
    var apres = lireEtoiles();
    badgeNouveau = BADGES.filter(function (b) { return avant < b.etoiles && apres >= b.etoiles; }).pop() || null;
  }

  // Sauvegarde dans l'historique
  var historique = lireHistorique();
  historique.unshift({
    date: new Date().toISOString(),
    espace: quiz.espace,
    categorie: cat.nom,
    niveau: nomNiveau(quiz.niveau),
    score: quiz.score,
    total: total,
    pourcentage: pct,
    etoiles: etoilesGagnees
  });
  sauverHistorique(historique.slice(0, 100));

  // Affichage
  $("result-percent").textContent = pct + " %";
  $("result-ring").style.setProperty("--pct", pct);
  $("result-title").textContent = messageResultat(pct, kids);
  $("result-score").textContent = quiz.score + " bonne" + (quiz.score > 1 ? "s" : "") + " réponse" + (quiz.score > 1 ? "s" : "") +
    " sur " + total + " · " + cat.nom + " (" + nomNiveau(quiz.niveau) + ")";

  var zoneEtoiles = $("result-stars");
  zoneEtoiles.hidden = !kids;
  if (kids) {
    zoneEtoiles.textContent = "+" + etoilesGagnees + " ⭐ gagnées" + (pct === 100 ? " (bonus sans faute !)" : "");
  }
  var zoneBadge = $("result-badge");
  zoneBadge.hidden = !badgeNouveau;
  if (badgeNouveau) {
    zoneBadge.textContent = "Nouveau badge débloqué : " + badgeNouveau.icone + " " + badgeNouveau.nom;
  }

  // Correction détaillée
  var liste = $("result-review");
  liste.innerHTML = "";
  quiz.reponses.forEach(function (r) {
    var li = creer("li", "review-item " + (r.juste ? "is-correct" : "is-wrong"));
    li.appendChild(creer("p", "review-q", r.question.q));
    var rep = r.juste
      ? "✔ " + r.question.choix[r.choisie]
      : "✘ " + r.question.choix[r.choisie] + "  →  ✔ " + r.question.choix[r.question.bonne];
    li.appendChild(creer("p", "review-a", rep));
    li.appendChild(creer("p", "review-e", r.question.explication));
    liste.appendChild(li);
  });

  afficherEcran("resultats");
}

// ---------- 10. Historique et statistiques ----------

function carteStat(valeur, libelle) {
  var col = creer("div", "col-6 col-md-3");
  var carte = creer("div", "stat-card");
  carte.appendChild(creer("span", "stat-value", valeur));
  carte.appendChild(creer("span", "stat-label", libelle));
  col.appendChild(carte);
  return col;
}

function afficherHistorique(filtre) {
  document.querySelectorAll("#history-filters .filter-btn").forEach(function (b) {
    b.classList.toggle("is-active", b.dataset.filter === filtre);
  });

  var tout = lireHistorique();
  var liste = filtre === "tous" ? tout : tout.filter(function (h) { return h.espace === filtre; });

  // Statistiques
  var stats = $("history-stats");
  stats.innerHTML = "";
  var moyenne = liste.length
    ? Math.round(liste.reduce(function (s, h) { return s + h.pourcentage; }, 0) / liste.length) : 0;
  var meilleur = liste.length ? Math.max.apply(null, liste.map(function (h) { return h.pourcentage; })) : 0;
  stats.appendChild(carteStat(String(liste.length), "Quiz terminés"));
  stats.appendChild(carteStat(moyenne + " %", "Réussite moyenne"));
  stats.appendChild(carteStat(meilleur + " %", "Meilleur score"));
  stats.appendChild(carteStat("⭐ " + lireEtoiles(), "Étoiles (enfants)"));

  // Tableau
  var corps = $("history-body");
  corps.innerHTML = "";
  liste.forEach(function (h) {
    var tr = document.createElement("tr");
    var d = new Date(h.date);
    var date = d.toLocaleDateString("fr-FR") + " " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
    [date, h.espace === "kids" ? "Enfants" : "Adultes", h.categorie, h.niveau, h.score + " / " + h.total].forEach(function (t) {
      tr.appendChild(creer("td", "", t));
    });
    var td = creer("td");
    var pill = creer("span", "pct-pill " + (h.pourcentage >= 70 ? "is-good" : h.pourcentage >= 40 ? "is-mid" : "is-low"), h.pourcentage + " %");
    td.appendChild(pill);
    tr.appendChild(td);
    corps.appendChild(tr);
  });

  $("history-empty").hidden = liste.length > 0;
  document.querySelector(".history-table-wrap").hidden = liste.length === 0;
}

// ---------- 11. Démarrage ----------

document.addEventListener("DOMContentLoaded", function () {
  construireKids();
  construireAdultes();

  // Boutons de navigation (logo, menu, liens)
  document.querySelectorAll("[data-go]").forEach(function (b) {
    b.addEventListener("click", function () { afficherEcran(b.dataset.go); });
  });
  // Cartes d'espace sur l'accueil
  document.querySelectorAll("[data-space]").forEach(function (b) {
    b.addEventListener("click", function () { afficherEcran(b.dataset.space); });
  });

  $("quiz-next").addEventListener("click", questionSuivante);
  $("quiz-quit").addEventListener("click", function () {
    if (confirm("Quitter le quiz ? Ta progression sera perdue.")) afficherEcran(quiz.espace);
  });
  $("result-restart").addEventListener("click", function () {
    demarrerQuiz(quiz.espace, quiz.categorie, quiz.niveau);
  });
  $("result-change").addEventListener("click", function () { afficherEcran(quiz.espace); });

  document.querySelectorAll("#history-filters .filter-btn").forEach(function (b) {
    b.addEventListener("click", function () { afficherHistorique(b.dataset.filter); });
  });
  $("history-clear").addEventListener("click", function () {
    if (confirm("Effacer tout l'historique et les étoiles ?")) {
      localStorage.removeItem(CLE_HISTORIQUE);
      localStorage.removeItem(CLE_ETOILES);
      afficherHistorique("tous");
    }
  });

  afficherEcran("accueil");
});
