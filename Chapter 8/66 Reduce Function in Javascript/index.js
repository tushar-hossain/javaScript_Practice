// Reduce Function in Javascript

var arr = [1, 2, 3, 4, 5, 6, 7, 8];

var newArr = arr.reduce(function (prev, curr) {
  return prev + curr;
}, 100);
console.log(newArr);

// Reduce Function Implementation
function reduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

var sum = reduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(sum);

var max = reduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
console.log(max);

var min = reduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);
console.log(min);
