const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");
const { CalculatePCC } = require("../helper/calculatePCC");
const dotenv = require("dotenv").config();
const ConnectDB = require("./../config/db-config");

//connexion with DB
ConnectDB();

// App middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.use("/", require("./../routes/app.routes"));

app.post("/findPCC", (req, res) => {
});

module.exports = app;
