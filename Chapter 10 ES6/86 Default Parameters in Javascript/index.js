// Default Parameters in Javascript

function sqr(n = 1) {
  //   if (!n) {
  //     n = 1;
  //   }
  return n * n;
}
console.log(sqr());
console.log(sqr(5));

function sqr2(n) {
  n = n || 1;
  return n * n;
}
console.log(sqr2());
console.log(sqr2(10));

function test(name = "Enter your Name") {
  console.log(name);
}

test();
test("tushar");
