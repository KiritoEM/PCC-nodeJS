const cities = require("../utils/cities_data");

const CalculatePCC = (start, end) => {
  //Variable
  let PCC = {};
  const predecessors = {};
  const visited = {};
  const queue = [];

  //Initialisation par défaut les sommets par non visités
  for (const city of cities) {
    PCC[city.name] = Infinity;
    predecessors[city.name] = null;
    visited[city.name] = false;
  }

  //initialiser le PCC du origin à 0
  PCC[start] = 0;

  // Ajout de la ville de départ dans la file d'attente queue
  queue.push({ name: start, distance: 0 });

  //Tant que la file d' attente est positive
  while (queue.length > 0) {
    //Récupérer la ville de distance minimale
    const currentCity = queue.shift();

    if (visited[currentCity.name]) continue;
    visited[currentCity.name] = true;

    //filtrer le cities par le currenCity.name
    const CitiesSuccessor =
      cities.find((city) => city.name === currentCity.name)?.successor || [];

    // Mise à jour des distances des successeurs
    for (const successor of CitiesSuccessor) {
      const newPCC = PCC[currentCity.name] + successor.distance;

      //comparer si la nouvelle distance est inférieure à la distance du successeur
      if (newPCC < PCC[successor.name]) {
        PCC[successor.name] = newPCC;
        predecessors[successor.name] = currentCity.name;
        queue.push({ name: successor.name, distance: newPCC });
      }
    }
  }

  // Reconstruction du chemin
  const PCCpath = [];
  let currentCity = end;

  //tant que currentCity est différent de null
  while (currentCity !== null) {
    //ajouter currentCity dans le path
    PCCpath.unshift(currentCity);
    //ville actuelle est le prédécesseur
    currentCity = predecessors[currentCity];
  }

  // La distance minimale entre start et end
  const minDistance = PCC[end];

  return { minDistance, PCCpath };
};

module.exports = { CalculatePCC };
