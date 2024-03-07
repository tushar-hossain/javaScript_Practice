// Bind, Call, Apply in Javascript

function myFunc() {
  console.log(this.a + this.b);
}
myFunc.call({ a: 10, b: 20 });

function myFunction(c, d) {
  console.log(this.a + this.b + c + d);
}
myFunction.apply({ a: 10, b: 20 }, [10, 20]);

function myFunction2(c, d) {
  console.log(this.a + this.b + c + d);
}
var sum = myFunction2.bind({ a: 10, b: 20 });
sum(20, 30);
