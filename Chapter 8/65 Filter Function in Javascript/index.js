// Filter Function in Javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var newArr = arr.filter(function (value) {
  //   return value % 2 == 0;
  //   return value % 2 == 1;
  //   return value >4;
  return value < 4;
});

console.log(newArr);

// Filter function Implementation

function filter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

var result = filter(arr, function (value) {
  return value % 2 === 0;
});
console.log(result);

var result2 = filter(arr, function (value) {
  return value % 2 === 1;
});
console.log(result2);

var result3 = filter(arr, function (value) {
  return value > 4;
});
console.log(result3);
