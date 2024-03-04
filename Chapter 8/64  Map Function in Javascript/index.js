//  Map Function in Javascript

var arr = [1, 2, 3, 4, 5, 6];

var result = arr.map(function (value, index, arr) {
  //   return value + 2;
  return value * value;
});
console.log(result);
console.log(arr);

// Implementation map function

var arr = [10, 20, 30, 40, 50];

function map(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    var result = cb(arr[i]);
    newArr.push(result);
  }
  return newArr;
}

var result = map(arr, function (value) {
  return value + 2;
});
console.log(result);

var result2 = map(arr, function (value) {
  return value * value;
});
console.log(result2);

var result3 = map(arr, function (value) {
  return value * value * value;
});
console.log(result3);
