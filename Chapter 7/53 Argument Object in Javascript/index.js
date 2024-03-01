// Argument Object in Javascript

function test(a, b, c) {
  console.log(arguments);
}
// test();
// test(10, 20, 30);

function test2(a, b, c) {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
// test2(10, 20, 30);

// function test3() {
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// test3(10, 20, 30);

function test3() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
test3(10, 20, 30);
test3(10, 20, 30, 40, 50);
test3(10, 20, 30, 40, 50, 60, 70);
