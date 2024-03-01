//  Function Arguments and Parameters in Javascript

function add(a, b) {
  var result = a + b;
  console.log(result);
}

add(10, 20);
add(500, 700);

var arr1 = [1, 2, 3];
var arr2 = [5, 7, 9];
var arr3 = [9, 7, 1];

function sumOfArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

var result1 = sumOfArray(arr1);
console.log(result1);

var result2 = sumOfArray(arr2);
console.log(result2);

var result3 = sumOfArray(arr3);
console.log(result3);
