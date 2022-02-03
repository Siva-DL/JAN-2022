// indexOf, lastIndexOf, search, slice

var str =
  "Lorem, ipsum dolor sit amet consectetur dolor adipisicing elit. Earum, veritatis?";

console.log(str.indexOf("doloqr", 14)); // > 0; | -1;|

// if (str.indexOf("doloqr") > -1) {
//     adasd
// }

console.log(str.lastIndexOf("dolor")); // > 0; | -1;|

console.log(str.search("dolor"));

// to Extarct:
// substring, slice
var e_string = str.substring(13, -10);

// var e_string = str.substring(
//   str.indexOf("dolor"),
//   str.indexOf("dolor") + "dolor".length
// );

console.log(e_string);
