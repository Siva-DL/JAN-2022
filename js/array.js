// Array [], (), {}
0, 1, 2;
var arr = [12, "shiva", 123];
var dummyArray = new Array();

console.log(arr[0]);
console.log(arr.length);

var arr1 = [];

arr1[0] = "newValue";
arr1[1] = "newValue2";

console.log(arr1[1]);

// What values?

var testArr = [
  0,
  "",
  true,
  undefined,
  null,
  { _name: "testArray" },
  [{ colors: ["red", "pink", ["color1", "color2"]] }],
];

console.log(testArr[6][0].colors[2][1]);

// push, pop, shift, unshift, splice, join, split

var fruits = [];

var apple = { fruit_name: "apple", cost: 10, color: "red" };
var oranges = { fruit_name: "oranges", cost: 20, color: "orange" };
var grapes = { fruit_name: "grapes", cost: 20, color: "green" };
var grapes1 = { fruit_name: "grapes12", cost: 20, color: "green" };

// Add values to Array
fruits.push(oranges);
fruits.push(apple);
fruits.unshift(grapes);
fruits.unshift(grapes1);

// Remove Values Array

// fruits.pop();
// fruits.pop();
// fruits.shift();

// fruits.splice(1, 1);

if (fruits[2].fruit_name === "oranges") {
  fruits.splice(2, 1);
}
console.log(fruits);

var joinValu = [12, 32, 42];
var str = " 12 | 32 | 42";
console.log(joinValu.join("|"));

console.log(str.split("|"));
