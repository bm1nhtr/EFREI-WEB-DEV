// ============================================================================
// TP JAVASCRIPT - RAPPELS POUR REACT
// ============================================================================

// Imports en tête de fichier (obligatoire en ES modules).
import { readFileSync } from "fs";
import Car from "./Car.js";

console.log("=== TP JAVASCRIPT - EXERCICES 1 À 8 ===\n");

// ============================================================================
// 1. LECTURE ET MANIPULATION DE FICHIERS JSON
// ============================================================================
// Énoncé : Lisez le fichier JSON 'voitures.json' et affichez son contenu
// sous différentes formes (raw, parsé, stringifié).
// Pour cela vous pourrez utiliser la méthode readFileSync du module fs de Node,
// et l'objet JSON natifs à Javascript : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON

console.log("=== 1. Lecture et manipulation de fichiers JSON ===");

// On lit le fichier voitures.json de manière synchrone (readFileSync = lecture bloquante).
// Le 2e argument "utf-8" indique que le contenu doit être interprété comme du texte en UTF-8.
// Sans "utf-8", on obtiendrait un Buffer (données brutes) au lieu d'une chaîne de caractères.
const contenuRaw = readFileSync("voitures.json", "utf-8");

// 1) Forme "raw" (brute) : c'est exactement ce qui est dans le fichier, une longue chaîne de caractères JSON.
console.log("--- Contenu RAW (chaîne lue du fichier) ---");
console.log(contenuRaw);

// JSON.parse() transforme une chaîne de caractères JSON en objet JavaScript utilisable dans le code.
// On peut ensuite accéder aux propriétés (ex: donnees[0].modele.nom) et les manipuler.
const donneesParsees = JSON.parse(contenuRaw);

// 2) Forme parsée : on affiche l'objet JavaScript (tableau d'objets voiture).
console.log("\n--- Contenu PARSÉ (objet JavaScript) ---");
console.log(donneesParsees);
console.log("\n--- Affichage d'une propriété spécifique (ex: modèle de la 1ère voiture) ---");
console.log(donneesParsees[0].modele.nom);

// JSON.stringify() fait l'inverse de parse : il convertit un objet JavaScript en chaîne JSON.
// Utile pour sauvegarder des données ou les envoyer (ex: API). Le 2e argument (null) et le 3e (2) servent à formater la sortie (indentation de 2 espaces pour une lecture plus lisible).
const contenuStringifie = JSON.stringify(donneesParsees, null, 2);

// 3) Forme stringifiée : on reconvertit en texte JSON, cette fois bien indenté pour la lisibilité.
console.log("\n--- Contenu STRINGIFIÉ (JSON formaté) ---");
console.log(contenuStringifie);

// ============================================================================
// 2. CRÉATION ET IMPORT DE CLASSE
// ============================================================================
// Énoncé : Créez une classe Car dans un fichier séparé (Car.js). 
// Cette classe devra avoir la meme structure que les objets présents dans voitures.json. 
// Elle devra obligatoirement contenir les paramètres : 
// id, modelName, ownerFirstName, ownerLastName, age et topSpeed.
// age et topSpeed pourront avoir des valeurs par défaut de 0.
// Définissez une méthode permettant d'afficher de manière lisible les atributs d'un objet de type Car.
// Ensuite ajouter une méthode statique pour décrire à quoi sert l'objet Car. 
// Enfin importez-la et instanciez-la pour constater que tout fonctionne.

console.log("\n=== 2. Création et import de classe ===");

// La classe Car est importée en haut du fichier (import Car from "./Car.js").

// On crée une instance de Car pour tester que tout fonctionne.
const maVoiture = new Car(101, "Clio", "Jean", "Dupont", 30, 180);
console.log("Instance de Car créée :");
console.log(maVoiture);
// On utilise la méthode d'affichage des infos de la voiture.
maVoiture.printEssentialCarInfos();
// Méthode statique : décrit à quoi sert la classe Car.
Car.decrire();
Car.sayHello();


// ============================================================================
// 3. TRANSFORMATION DE DONNÉES
// ============================================================================
// Énoncé : À partir des données du JSON, créez un tableau d'instances de Car

console.log("\n=== 3. Transformation de données ===");

// On transforme chaque objet du JSON en instance de Car.
// IMPORTANT — Correspondance JSON ↔ Car (pourquoi clioCar.model a "name" et pas "nom") :
//   - Le JSON (voitures.json) utilise : modele (nom, marque, id_modele, numero_serie, vitesse_de_pointe_kmH), proprietaire (prenom, nom, age).
//   - La classe Car utilise : model (name, brand, modeleId, serialNumber, topSpeed), owner (firstName, lastName, age).
//   - Ici on ne passe que 6 arguments au constructeur ; seuls sont remplis : model.name, model.topSpeed, owner.*. Les champs JSON marque, id_modele, numero_serie ne sont pas copiés → dans clioCar.model ils restent "", null, null.
// ?? 0 ou ?? "" pour les champs optionnels (ex. âge ou nom manquants dans le JSON).
const tableauVoitures = donneesParsees.map(
  (v) =>
    new Car(
      v.id,
      v.modele.nom,
      v.proprietaire.prenom ?? "",
      v.proprietaire.nom ?? "",
      v.proprietaire.age ?? 0,
      v.modele.vitesse_de_pointe_kmH ?? 0
    )
);
console.log("Tableau d'instances Car créé à partir du JSON :", tableauVoitures.length, "voiture(s).");
console.log(tableauVoitures);
console.log("\n--- Affichage de la 1ère voiture du tableau ---");
tableauVoitures[0].printEssentialCarInfos();
console.log("\n--- Affichage du modèle de la 1ère voiture du tableau --- [model.name]---", tableauVoitures[0].model.name);

const tableauVoitures2 = [101,"Clio","Renault",1203,12345678,180]
console.log("Tableau d'instances Car créé à partir du JSON :", tableauVoitures2.length, "voiture(s).");
console.log(tableauVoitures2);  

// ============================================================================
// 4. UTILISATION DES MÉTHODES DE TABLEAUX
// ============================================================================
// Énoncé : Utilisez différentes méthodes sur les tableaux
// pour effectuer des opérations sur les données des voitures

console.log("\n=== 4. Utilisation des méthodes de tableaux ===");

// 4.1. Afficher les informations de chaque voiture du tableau (forEach appelle une fonction pour chaque élément).
tableauVoitures.forEach((car) => car.printEssentialCarInfos());

// 4.2. Récupérer la voiture du modèle Clio (find renvoie le premier élément qui satisfait la condition).
const voitureClio = tableauVoitures.find((c) => c.model.name === "Clio");
console.log("\n--- Voiture Clio trouvée ---");
console.log(voitureClio);

// 4.3. Somme des âges des propriétaires (reduce accumule une valeur en parcourant le tableau).
const sommeAges = tableauVoitures.reduce((acc, c) => acc + (c.owner.age ?? 0), 0);
console.log("\nSomme des âges des propriétaires :", sommeAges);

// 4.4. Vitesse de pointe moyenne (reduce pour la somme, puis division par le nombre de voitures).
const moyenneVitesse =
  tableauVoitures.reduce((acc, c) => acc + (c.model.topSpeed ?? 0), 0) / tableauVoitures.length;
console.log("Vitesse de pointe moyenne (km/h) :", moyenneVitesse);

// ============================================================================
// 5. DESTRUCTURATION
// ============================================================================
// Énoncé : Utilisez la destructuration pour extraire des valeurs de tableaux
// et d'objets.

console.log("\n=== 5. Destructuration ===");

// 5.1. Destructuration du tableau : on extrait les 3 voitures dans des variables distinctes.
const [clioCar, alpineCar, ferrariCar] = tableauVoitures;
console.log("Clio (destructurée) :", clioCar?.model?.name, "| Alpine :", alpineCar?.model?.name, "| Ferrari :", ferrariCar?.model?.name);

// 5.2. Destructuration du propriétaire de l'Alpine : prénom, nom et âge en variables.
const { firstName: prenomAlpine, lastName: nomAlpine, age: ageAlpine } = alpineCar.owner;
console.log("\nPropriétaire Alpine :", prenomAlpine, nomAlpine, "âge :", ageAlpine);

// 5.3. Fonction qui prend un objet owner (avec firstName, lastName, age) et affiche ses infos en utilisant la destructuration dans les paramètres.
function afficherProprietaire(owner) {
  const { firstName: prenom, lastName: nom, age } = owner;
  console.log(`Propriétaire : ${prenom} ${nom}, âge : ${age ?? "non renseigné"}`);
}
afficherProprietaire(alpineCar.owner);

// 5.4. Fonction qui prend une voiture et affiche ses infos sans utiliser l'objet passé directement (destructuration).
function afficherVoiture(voiture) {
  const { id, model, owner } = voiture;
  const { name: nomModele, topSpeed } = model;
  const { firstName: prenom, lastName: nom, age } = owner;
  console.log(`Voiture #${id} : ${nomModele}, vitesse max ${topSpeed} km/h — ${prenom} ${nom}, ${age} ans`);
}
console.log("\n--- Infos voiture 103 (Ferrari) via destructuration ---");
afficherVoiture(ferrariCar);


// ============================================================================
// 6. SPREAD OPERATOR
// ============================================================================
// Énoncé : Comprenez la différence entre l'assignation par référence et 
// la copie avec le spread operator sur les tableaux et objets

console.log("\n=== 6. Spread Operator ===");

// 6.1. Assignation par référence : "voitures" pointe vers le MÊME tableau que tableauVoitures.
// Si on modifie "voitures", tableauVoitures est aussi modifié (même référence en mémoire).
const voitures = tableauVoitures;
voitures.push(new Car(999, "Test", "A", "B", 0, 100)); // On ajoute un élément
console.log("Longueur de voitures après modification :", voitures.length);
console.log("Longueur de tableauVoitures après modification :", tableauVoitures.length);
console.log("Constation : les deux ont la même longueur car ils désignent le même tableau (référence).");

// On retire l'élément ajouté pour ne pas perturber les exercices suivants (même tableau).
voitures.pop();

// 6.2. Copie distincte avec le spread operator [...]. Chaque élément est le même objet en référence,
// mais le tableau "automobiles" est un NOUVEAU tableau. Modifier automobiles (push/pop) ne modifie pas tableauVoitures.
const automobiles = [...tableauVoitures];
console.log("Copie 'automobiles' créée avec spread. automobiles === tableauVoitures ?", automobiles === tableauVoitures);
console.log("Premier élément identique (même référence) ?", automobiles[0] === tableauVoitures[0]);

// ============================================================================
// 7. HIGHER ORDER FUNCTIONS ET FONCTIONS COMME VALEURS
// ============================================================================
// Énoncé : Explorez les fonctions en tant que valeurs de première classe,
// les fonctions anonymes, et les higher order functions

console.log("\n=== 7. Higher Order Functions et fonctions comme valeurs ===");

// 7.0. Fonction anonyme (sans nom) affectée à une variable ; idem avec une arrow function.
const maFonctionAnonyme = function (x) {
  return x * 2;
};
const maArrowFunction = (x) => x * 2;
console.log("Fonction anonyme (3 * 2) :", maFonctionAnonyme(3));
console.log("Arrow function (3 * 2) :", maArrowFunction(3));

// ============================================================================
// 7.1. HIGHER ORDER FUNCTION POUR FORMATER LES STRINGS
// ============================================================================
// On crée une fonction qui reçoit un objet et une fonction de formatage (formatter).
// Elle applique le formatter à toutes les valeurs de type string au premier niveau.
// Object.entries(objet) donne [[clé1, val1], [clé2, val2], ...].

console.log("\n--- 7.1. Higher order function pour formater les strings :");

function formaterStringsPremierNiveau(objet, formatter) {
  const resultat = {};
  for (const [cle, valeur] of Object.entries(objet)) {
    resultat[cle] = typeof valeur === "string" ? formatter(valeur) : valeur;
  }
  return resultat;
}

// Exemple d'utilisation de formaterStringsPremierNiveau :
// On part d'un objet avec des champs string et number. On applique un formatter
// (ex. tout en majuscules) uniquement sur les strings du premier niveau.
const objetExemple = { prenom: "jean", nom: "dupont", age: 30 };
const objetFormate = formaterStringsPremierNiveau(objetExemple, (s) => s.toUpperCase());
console.log("--- 7.1. Exemple formaterStringsPremierNiveau ---");
console.log("Objet avant :", objetExemple);
console.log("Objet après (strings en MAJ) :", objetFormate);
// age (number) est inchangé ; prenom et nom (strings) sont passés en majuscules.

// ============================================================================
// 7.2. FONCTIONS DE TRANSFORMATION DE STRINGS
// ============================================================================
const enMajuscules = (str) => str.toUpperCase();
const enMinuscules = (str) => str.toLowerCase();

console.log("\n--- 7.2. Fonctions de transformation :");
console.log("enMajuscules('hello') :", enMajuscules("hello"));
console.log("enMinuscules('WORLD') :", enMinuscules("WORLD"));

// ============================================================================
// 7.3. APPLICATION SUR LE PROPRIÉTAIRE DE L'ALPINE
// ============================================================================
// On applique le formatter (ex. enMajuscules) sur l'objet owner de alpineCar.
// On travaille sur une copie pour ne pas modifier l'objet original si besoin.

console.log("\n--- 7.3. Application de formatage sur un sous-objet :");
const ownerAlpineFormate = formaterStringsPremierNiveau(alpineCar.owner, enMajuscules);
console.log("Propriétaire Alpine (strings en majuscules) :", ownerAlpineFormate);

// ============================================================================
// 7.4. APPLICATION SUR UN OBJET COMPLET (ex. une voiture)
// ============================================================================
// Pour un objet avec des sous-objets (model, owner), on applique le formatter
// récursivement ou sur chaque sous-objet. Ici : formater tous les champs string
// de model et owner en une fois en parcourant les clés du premier niveau et en
// traitant les sous-objets s'ils existent.

console.log("\n--- 7.4. Application sur un objet complet :");

function formaterStringsObjetComplet(objet, formatter) {
  const resultat = {};
  for (const [cle, valeur] of Object.entries(objet)) {
    if (typeof valeur === "string") {
      resultat[cle] = formatter(valeur);
    } else if (typeof valeur === "object" && valeur !== null && !Array.isArray(valeur)) {
      resultat[cle] = formaterStringsPremierNiveau(valeur, formatter);
    } else {
      resultat[cle] = valeur;
    }
  }
  return resultat;
}

console.log(clioCar.model);
// clioCar est une instance Car → on utilise .model et .owner (pas .modele / .proprietaire du JSON).
const clioFormate = formaterStringsObjetComplet(
  { id: clioCar.id, model: clioCar.model, owner: clioCar.owner },
  enMajuscules
);
console.log("Clio avec strings formatées (MAJ) :", clioFormate);


// ============================================================================
// 8. GESTION DES ERREURS
// ============================================================================

console.log("\n=== EXERCICE 8 : GESTION DES ERREURS ===\n");

// ============================================================================
// 8.1. Try-Catch basique
// ============================================================================
// Énoncé : Créez une fonction parseCarData(jsonString) qui prend une chaîne 
// JSON et retourne l'objet parsé. Si le parsing échoue, la fonction doit 
// capturer l'erreur et retourner null tout en affichant un message d'erreur 
// dans la console.

console.log("--- 8.1. Try-Catch basique ---");

// parseCarData tente de parser une chaîne JSON. En cas d'échec (JSON invalide),
// on attrape l'erreur dans le catch, on affiche un message, et on retourne null.
function parseCarData(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (erreur) {
    console.error("Erreur de parsing JSON :", erreur.message);
    return null;
  }
}

// Tests
const validJson = '{"modele": "Clio", "prix": 15000}';
const invalidJson = '{modele: "Clio", prix: 15000}'; // JSON invalide (manque guillemets)

console.log("Parsing JSON valide :", parseCarData(validJson));
console.log("Parsing JSON invalide :", parseCarData(invalidJson));

// ============================================================================
// 8.2. Erreurs personnalisées
// ============================================================================
// Énoncé : Créez une classe d'erreur personnalisée CarValidationError qui 
// étend Error. Ensuite, créez une fonction validateCar(car) qui vérifie 
// qu'un objet voiture possède bien les propriétés id, model et owner. 
// Si une propriété manque, lancez une CarValidationError avec un message explicite.

console.log("\n--- 8.2. Erreurs personnalisées ---");

// Classe d'erreur personnalisée qui étend Error. Permet d'identifier les erreurs
// de validation de voiture (propriété manquante) et d'afficher un message clair.
class CarValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "CarValidationError";
  }
}

// validateCar vérifie que l'objet possède id, model et owner. Si une propriété
// manque, on lance CarValidationError avec un message explicite.
function validateCar(car) {
  if (car.id === undefined) {
    throw new CarValidationError("La propriété 'id' est manquante.");
  }
  if (!car.model) {
    throw new CarValidationError("La propriété 'model' est manquante.");
  }
  if (!car.owner) {
    throw new CarValidationError("La propriété 'owner' est manquante.");
  }
}

// Tests
const incompleteCar = { id: 1, model: { name: "Clio" } }; // manque owner
const completeCar = { id: 1, model: { name: "Clio" }, owner: { firstName: "Jean" } };

try {
    validateCar(incompleteCar);
    console.log("Voiture incomplète validée (ne devrait pas s'afficher)");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

try {
    validateCar(completeCar);
    console.log("Voiture complète validée avec succès !");
} catch (error) {
    console.error(`${error.name}: ${error.message}`);
}

// ============================================================================
// 8.3. Finally et nettoyage de ressources
// ============================================================================
// Énoncé : Créez une fonction loadCarsFromFile(filename) qui :
// - Ouvre et lit un fichier JSON de voitures
// - Parse les données
// - Gère les erreurs potentielles (fichier inexistant, JSON invalide)
// - Utilise finally pour afficher un message "Opération de lecture terminée" 
//   dans tous les cas

console.log("\n--- 8.3. Finally et nettoyage de ressources ---");

// loadCarsFromFile lit un fichier JSON, parse les données. try/catch pour gérer
// fichier inexistant ou JSON invalide. finally s'exécute dans tous les cas pour
// afficher le message de fin d'opération.
function loadCarsFromFile(filename) {
  try {
    const contenu = readFileSync(filename, "utf-8");
    const donnees = JSON.parse(contenu);
    console.log(`Fichier '${filename}' chargé :`, Array.isArray(donnees) ? `${donnees.length} élément(s)` : donnees);
    return donnees;
  } catch (erreur) {
    console.error(`Erreur lors du chargement de '${filename}' :`, erreur.message);
    return null;
  } finally {
    console.log("Opération de lecture terminée.");
  }
}

// Tests
loadCarsFromFile("voitures.json"); // Fichier existant
loadCarsFromFile("fichier_inexistant.json"); // Fichier inexistant

// ============================================================================
// 8.4. Propagation d'erreurs
// ============================================================================
// Énoncé : Créez une fonction calculateAverageSpeed(cars) qui :
// - Vérifie que le paramètre est bien un tableau (sinon lance une TypeError)
// - Calcule la vitesse moyenne des voitures
// - Si une voiture n'a pas de topSpeed défini, lance une erreur personnalisée 
//   MissingDataError
//
// Ensuite, créez une fonction safeCalculateAverageSpeed(cars) qui appelle 
// calculateAverageSpeed et gère toutes les erreurs possibles en retournant 
// un objet { success: boolean, result?: number, error?: string }.

console.log("\n--- 8.4. Propagation d'erreurs ---");

// Classe d'erreur pour une voiture sans topSpeed (données manquantes).
class MissingDataError extends Error {
  constructor(message) {
    super(message);
    this.name = "MissingDataError";
  }
}

// calculateAverageSpeed vérifie que cars est un tableau, puis calcule la vitesse
// moyenne. Si une voiture n'a pas de topSpeed défini, on lance MissingDataError.
function calculateAverageSpeed(cars) {
  if (!Array.isArray(cars)) {
    throw new TypeError("Le paramètre doit être un tableau.");
  }
  if (cars.length === 0) {
    return 0;
  }
  let somme = 0;
  for (let i = 0; i < cars.length; i++) {
    const speed = cars[i].model?.topSpeed;
    if (speed === undefined || speed === null) {
      throw new MissingDataError(`Voiture à l'index ${i} n'a pas de topSpeed défini.`);
    }
    somme += speed;
  }
  return somme / cars.length;
}

// safeCalculateAverageSpeed appelle calculateAverageSpeed et retourne un objet
// { success, result? ou error? } pour éviter de propager l'exception.
function safeCalculateAverageSpeed(cars) {
  try {
    const result = calculateAverageSpeed(cars);
    return { success: true, result };
  } catch (error) {
    return { success: false, error: `${error.name}: ${error.message}` };
  }
}

// Tests
console.log("Calcul avec données valides :", safeCalculateAverageSpeed(tableauVoitures));
console.log("Calcul avec paramètre invalide :", safeCalculateAverageSpeed("pas un tableau"));
console.log("Calcul avec tableau vide :", safeCalculateAverageSpeed([]));

const carsWithMissingData = [
  tableauVoitures[0],
  { id: 999, model: {}, owner: {} }, // Voiture sans topSpeed
];
console.log("Calcul avec données manquantes :", safeCalculateAverageSpeed(carsWithMissingData));

// ============================================================================
// 8.6. Chaînage d'erreurs et contexte (bonus difficile)
// ============================================================================
// Énoncé : Créez une fonction processCarBatch(carDataArray) qui :
// - Prend un tableau de données brutes de voitures
// - Pour chaque voiture, tente de la valider puis de la transformer en instance de Car
// - Collecte toutes les erreurs rencontrées sans interrompre le traitement
// - Retourne un objet contenant les voitures réussies et les erreurs avec 
//   leur contexte (index, données originales, message d'erreur)

console.log("\n--- 8.6. Chaînage d'erreurs et contexte ---");

// processCarBatch parcourt le tableau de données brutes. Pour chaque élément :
// - on vérifie que c'est un objet avec id, modele, proprietaire (format JSON du TP),
// - on crée une instance Car. Les erreurs sont collectées (index, données, message)
// sans interrompre le traitement. Retourne { successful: Car[], failed: [...] }.
function processCarBatch(carDataArray) {
  const successful = [];
  const failed = [];
  for (let index = 0; index < carDataArray.length; index++) {
    const data = carDataArray[index];
    try {
      if (typeof data !== "object" || data === null) {
        throw new Error("Données invalides : pas un objet");
      }
      const modele = data.modele ?? {};
      const prop = data.proprietaire ?? {};
      if (!modele || typeof modele.nom !== "string") throw new Error("Modèle ou nom de modèle manquant");
      const id = data.id ?? modele.nom ?? index;
      const nom = modele.nom ?? "";
      const prenom = prop.prenom ?? "";
      const nomProp = prop.nom ?? "";
      const age = prop.age ?? 0;
      const topSpeed = modele.vitesse_de_pointe_kmH ?? 0;
      const car = new Car(id, nom, prenom, nomProp, age, topSpeed);
      successful.push(car);
    } catch (error) {
      failed.push({ index, data, error: error.message });
    }
  }
  return { successful, failed };
}

// Données de test avec plusieurs cas d'erreur
const batchData = [
    // Voiture valide
    {
        id: 1,
        modele: { nom: "Clio", vitesse_de_pointe_kmH: 180 },
        proprietaire: { prenom: "Jean", nom: "Dupont", age: 30 }
    },
    // Voiture sans ID
    {
        modele: { nom: "Alpine" },
        proprietaire: { prenom: "Marie", nom: "Martin" }
    },
    // Voiture sans modèle
    {
        id: 3,
        proprietaire: { prenom: "Pierre", nom: "Durand" }
    },
    // Données invalides (non-objet)
    "données invalides",
    // Voiture valide
    {
        id: 5,
        modele: { nom: "Ferrari", vitesse_de_pointe_kmH: 340 },
        proprietaire: { prenom: "Luc", nom: "Bernard", age: 45 }
    },
    // Voiture sans propriétaire
    {
        id: 6,
        modele: { nom: "Porsche", vitesse_de_pointe_kmH: 310 }
    }
];

// Tests
const result = processCarBatch(batchData);

console.log(`\n✅ Voitures traitées avec succès : ${result.successful.length}`);
result.successful.forEach((car, i) => {
  console.log(`  ${i + 1}. ${car.model.name} (ID: ${car.id})`);
});

console.log(`\n❌ Voitures en erreur : ${result.failed.length}`);
result.failed.forEach((failure) => {
  console.log(`  Index ${failure.index}: ${failure.error}`);
  console.log(`    Données : ${JSON.stringify(failure.data)}`);
});
