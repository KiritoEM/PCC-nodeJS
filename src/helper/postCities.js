const citiesModel = require("./../models/cities.model.js");

const postCitiesHelper = async (data) => {
  for (const city of data) {
    const newCity = new citiesModel({
      name: city.name,
      successor: city.successor,
    });

    await newCity.save();
  }
};

module.exports = { postCitiesHelper };
