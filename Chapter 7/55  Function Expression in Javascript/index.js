//  Function Expression in Javascript

var addition = function (a, b) {
  return a + b;
};

var result = addition(10, 20);
console.log(result);

var result = addition;
var another = result;
console.log(another(10, 20));

setTimeout(function () {
  console.log("I will called after 3 second");
}, 3000);

