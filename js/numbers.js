// Math.round, Math.ceil, Math.floor, Math.random

console.log(Math.round(10.5)); // 11
console.log(Math.round(10.4)); // 10

// Math.Ceil

console.log(Math.ceil(10.01)); // 11

// Math.ceil

console.log(Math.floor(10.99999)); //10

console.log(Math.ceil(Math.random() * 10));

if (Math.ceil(Math.random() * 10) > 5) {
  alert(" The Number is greater than 5 ");
} else {
  alert(" The Number is less than 5 ");
}
