// Find and FindIndex Function in Javascript

var arr = [4, 5, 3, 2, 1, 7, 9, 8, 55, 12];

var newArr = arr.find(function (value) {
  return value === 55;
});
console.log(newArr);

var newArr2 = arr.findIndex(function (value) {
  return value === 9;
});
console.log(newArr2);



// find and findIndex function implementation

function findAndFindIndex(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i)) {
      //   return arr[i];
      return i;
    }
  }
}

var result = findAndFindIndex(arr, function (value) {
  //   return value === 9;
  return value === 55;
});
console.log(result);
