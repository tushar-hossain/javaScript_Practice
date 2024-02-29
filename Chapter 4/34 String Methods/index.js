// String Methods

var a = "I am ";
var b = "Tushar Hossain";

var c = a.concat(b);
console.log(c);
console.log(c.substring(5, 19));
console.log(c.charAt(5));

console.log(c.startsWith("I"));
console.log(c.endsWith("n"));
console.log(c.includes("am"));
console.log(c.toUpperCase());
console.log(c.toLowerCase());

var d = "      abcd         ";
console.log(d.trim());
console.log(d.trimStart());
console.log(d.trimEnd());

console.log(c.split(' '));
