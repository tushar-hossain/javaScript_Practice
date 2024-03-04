// Foreach Implementation in Javascript

var arr = [1, 2, 3, 4, 5];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

var sum = 0;
arr.forEach(function (value, index, arr) {
  //   console.log(value, index, arr);
  sum += value;
});
console.log(sum);

arr.forEach(function (value, index, arr) {
  arr[index] = value + 5;
});
console.log(arr);

var arr2 = [];
arr.forEach(function (value, index, arr) {
  arr2.push(value * 2);
});
console.log(arr2);



function forEach(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    cb(arr[i], i, arr);
  }
}

// forEach(arr);
forEach(arr, function (value, index, arr) {
  sum += value + 10;
});
console.log(sum);

