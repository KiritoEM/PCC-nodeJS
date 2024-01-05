const  cities  = require("./../utils/cities_data.js");
const citiesModel = require("./../models/cities.model.js");

const addCities = async (req, res) => {
  try {
    for (const city of cities) {
      const newCity = new citiesModel({
        name: city.name,
        successors: city.successor,
      });

      await newCity.save();
    }

    return res.status(200).json("Villes ajoutées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout des villes :", error);
  }
};

module.exports = { addCities };
