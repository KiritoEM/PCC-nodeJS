const { CalculatePCC } = require("./../helper/calculatePCC");
const getCities = require("./../helper/getCities");

const findPCC = async (req, res) => {
  const { start, end } = req.body;
  const cities = await getCities();

  if (cities) {
    console.log("cities : ", cities);
  }

  try {
    if (!start || !end) {
      return res
        .status(400)
        .json({ error: "Veuillez fournir les villes de départ et d'arrivée." });
    }

    const { minDistance, PCCpath } = CalculatePCC(start, end, cities);

    if (minDistance !== Infinity && PCCpath.length > 0) {
      res.json({ minDistance, path: PCCpath });
    } else {
      res
        .status(404)
        .json({ error: "Aucun chemin trouvé entre les villes spécifiées." });
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = { findPCC };
