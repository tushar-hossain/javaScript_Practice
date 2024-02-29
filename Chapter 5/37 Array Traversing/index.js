// Array Traversing

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Main array change
for (var i = 0; i < arr.length; i++) {
  arr[i] = arr[i] + 2;
}
console.log(arr);

// array value summation
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// array value Even or Odd number

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    console.log("Even number of array " + arr[i]);
  }
}

for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log("Odd number of array " + arr[i]);
  }
}
