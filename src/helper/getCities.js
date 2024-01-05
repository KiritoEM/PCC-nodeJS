const citiesModel = require("./../models/cities.model");

const getCities = async () => {
  try {
    let cities = await citiesModel.find();
    return cities;
  } catch (error) {
    console.error("Error while fetching cities from the database:", error);
    throw error;
  }
};

module.exports = getCities;
