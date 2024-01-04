const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const compression = require("compression");

// App middlewares
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/home", (req, res) => {
  res.status(200).json("Welcome, your app is working well");
});

app.post("/findPCC", (req, res) => {
  const cities = [
    {
      name: "A",
      successor: [
        { name: "B", distance: 3 },
        { name: "D", distance: 2 },
        { name: "E", distance: 4 },
      ],
    },
    {
      name: "B",
      successor: [
        { name: "A", distance: 2 },
        { name: "C", distance: 5 },
      ],
    },
    {
      name: "C",
      successor: [{ name: "G", distance: 3 }],
    },
    {
      name: "D",
      successor: [
        { name: "A", distance: 3 },
        { name: "E", distance: 1 },
        { name: "F", distance: 6 },
      ],
    },
    {
      name: "E",
      successor: [
        { name: "C", distance: 2 },
        { name: "G", distance: 3 },
        { name: "F", distance: 4 },
      ],
    },
    {
      name: "F",
      successor: [{ name: "G", distance: 2 }],
    },
    {
      name: "G",
      successor: [{ name: "C", distance: 4 }],
    },
  ];

  const CalculatePCC = (start, end) => {
    //Variable
    let origin = start;
    let PCC = [];

    //array manipulation
    const getCitiesName = cities.map((city) => city.name);
    const getCitiesSuccessor = cities.find((city) => city.name === "E");
    let sortedCities = getCitiesName.filter((cityName) => cityName !== origin);

    let succesor = getCitiesSuccessor.successor || [];

    if (sortedCities) {
      PCC[origin] = 0;

    //   if ()
    }

    // res.json({ citiesNameArray: getCitiesName });
    // res.json({ origine : origin });
    // res.json({ sortedCities: sortedCities });
    res.json({ succesor: succesor });

    // for (let i=0 ; i<=sortedCities.length ; i++){
    //     if (.includes)
    // }
  };

  CalculatePCC("A", "B");
});

module.exports = app;
