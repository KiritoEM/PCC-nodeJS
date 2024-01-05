const { CalculatePCC } = require("./../helper/calculatePCC");

const findPCC = (req, res) => {
  const { start, end } = req.body;
  if (!start || !end) {
    return res
      .status(400)
      .json({ error: "Veuillez fournir les villes de départ et d'arrivée." });
  }

  const { minDistance, PCCpath } = CalculatePCC(start, end);

  if (minDistance !== Infinity && PCCpath.length > 0) {
    res.json({ minDistance, path: PCCpath });
  } else {
    res
      .status(404)
      .json({ error: "Aucun chemin trouvé entre les villes spécifiées." });
  }
};

module.exports = { findPCC };
