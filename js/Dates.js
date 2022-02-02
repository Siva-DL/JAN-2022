// Date

var date = new Date();

console.log(date);

// 2/2/2022
// [0, 1, 2, 3, 4, 5, 6];
console.log(date.getDate());
console.log(date.getMonth());
console.log(date.getFullYear());

var shortDate =
  date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

console.log(shortDate);

var time = new Date().getTime(); // get your number
var date = new Date(time); // create Date object

console.log(date.toString());
