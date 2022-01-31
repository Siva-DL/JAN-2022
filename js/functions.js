// Functions
var res;
function PI(name, age) {
  //   alert(name + age);
  //   console.log("Hi " + name + " and your age is" + age);
  res = "Hi " + name + " and your age is" + age;
  return "Hi " + name + " and your age is" + age;
}

// demo1();
var demo1 = function () {
  alert("demo1..");
};

// demo1();
// demo();
// console.log(PI("x ", 10) + " and you are from HYD");
// PI("y ", 20);
// PI("z ", 30);

function demo() {
  alert("This is Demo...");
}

// console.log(res);

// (IIFE - Self Invoking) - Encapusulation.
// alert(1);
(function () {
  return 1234;
})();
