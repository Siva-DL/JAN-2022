//

console.log(this);

var obj = {
  name: "somex",
  age: this.name,
  fullName() {
    console.log(this);
  },
};

console.log(obj.fullName());

var demo = function () {
  console.log(this);
};

demo();

function demo1() {
  console.log(this);
}

demo1();
