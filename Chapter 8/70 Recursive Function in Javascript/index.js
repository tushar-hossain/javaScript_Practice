// Recursive Function in Javascript

function sayHi(n) {
  if (n === 0) {
    return;
  }
  console.log(n + " I am Recursive function.");
  sayHi(n - 1);
}
sayHi(10);

function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}

console.log(fact(5));

var arr = [1, 2, 3, 4, 5];

function sumOfArray(arr, lastInd) {
  if (lastInd < 0) {
    return 0;
  }
  return arr[lastInd] + sumOfArray(arr, lastInd - 1);
}

console.log(sumOfArray(arr, arr.length - 1));
