// Currying in Javascript

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

var result = sum(10)(20)(30);
console.log(result);
