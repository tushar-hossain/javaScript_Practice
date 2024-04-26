//  How to Store Result from Async Function in Javascript

function sayHi(name) {
  let Result;
  setTimeout(() => {
      Result = name;
      console.log("I have done");
  }, 3000);
  return Result;
}

// let output = sayHi("message");
// console.log(output);

function sayHi(name) {
  setTimeout(() => {
      console.log("I have done");
      console.log(name);
  }, 3000);

}
let output2 = sayHi("message");
console.log(output2);