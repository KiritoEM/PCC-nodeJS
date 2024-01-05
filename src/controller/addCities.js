const cities = require("./../utils/cities_data.js");
const { postCitiesHelper } = require("./../helper/postCities.js");

const addCities = async (req, res) => {
  try {
    const response =  postCitiesHelper(cities);

    if (response) {
      return res.status(200).json("Villes ajoutées avec succès !");
    } else {
      return res.status(400).json("Erreur lors de l' ajout des Villes");
    }
  } catch (error) {
    console.error("Erreur lors de l'ajout des villes :", error);
  }
};

module.exports = { addCities };
