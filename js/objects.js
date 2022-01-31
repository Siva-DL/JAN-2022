// Objects

// var _name, age, fav_color;

// _name = data.name

var pen = {
  "brand name": "parker",
  cost: 100,
  size: 4,
  isAvailbale: true,
  discount: null,
  fullDiscription: function () {
    return this["brand name"] + " cost: " + this.cost;
  },
  colors: { red: "red", blue: "blue" },
};

console.log(pen["brand name"], pen.cost);

console.log(pen.colors.blue);

console.log(pen.fullDiscription());
