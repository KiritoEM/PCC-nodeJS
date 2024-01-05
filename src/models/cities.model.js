const mongoose = require("mongoose");

const successorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

const citiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  successor: {
    type: [successorSchema],
    default: [],
  },
});

const citiesModel = mongoose.model("cities", citiesSchema);
module.exports = citiesModel;
