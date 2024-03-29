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

module.exports =  cities ;
