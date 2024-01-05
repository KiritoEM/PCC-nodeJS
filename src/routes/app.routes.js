const express = require("express");
const router = express.Router();
const { addCities } = require("../controller/addCities");
const { findPCC } = require("./../controller/findPCC.controller");

// //route pour poster les villes dans le BD
router.post("/post-cities", addCities);

// //route pour trouver le PCC
router.post("/post-cities", findPCC);

module.exports = router;
