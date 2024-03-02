// First Class Function Rules

function add(a, b) {
  return a + b;
}

// => A function can be stored in a variable
var sum = add;
console.log(sum(10, 20));

// => A function can be stored in an array

var arr = [sum];
console.log(arr[0](10, 40));

// => A function can be stored in an object
var obj = {
  sum: add,
};
console.log(obj.sum(20, 50));

// => we can create function as need
setTimeout(function () {
  console.log("We can create function as need.");
}, 2000);

/* last 2 part higher order function concept */

// => we can pass function as an arguments

// => we can return functions from another functions
