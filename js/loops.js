// for, for-in, while, do-while

var arr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (var j in arr) {
  console.log(arr[j]);
}

var x = 0;
while (x < arr.length) {
  console.log(arr[x]);
  x++;
}

var y = 0;
do {
  console.log(arr[y]);
  y++;
} while (y < arr.length);
