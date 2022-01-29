// = - asign
// == - comparison
// === - comparision also checks for typeof operator

var userID = "siva";
var userEnteredValue = "siva";

console.log(userEnteredValue == userID); // true
console.log(10 === "10"); // false

// if, if-else, if-elseif-else
console.log(typeof userID);
var typeCheck = typeof userID;

if (typeCheck !== Number && userID === userEnteredValue) {
  // sucess

  console.log("Hello" + " " + userID);
} else {
  console.log("Hey you enterd wrong details");
}

//
// ||
// true true - true
// true false - true
// false  true - true
// false false - false

// &&
// true true - true
// true false - false
// false  true - false
// false false - false

var _name = "xyz";
var _num = 1234;
var _email = "test@test.com";

// if (_name == "xyz") {
//   console.log(_name);
// } else if (_num !== 1234) {
//   console.log(_num);
// } else if (_email !== "test@test.com") {
//   console.log(_email);
// } else {
//   alert("error");
// }

if (_name == "") {
  console.log(_name);
} else if (_num == "") {
  console.log(_num);
} else if (_email == "") {
  console.log(_email);
} else {
  alert("success");
}
