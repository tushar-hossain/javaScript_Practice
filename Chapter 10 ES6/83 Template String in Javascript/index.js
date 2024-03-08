// Template String in Javascript

var name = "Tushar Hossain";
var age = 13;

console.log(`My name is ${name} and I am ${age} years old.`);

console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? "not " : ""}adult.`);

console.log(name.padStart(15));
console.log(name.padEnd());
console.log(name.repeat(2));
