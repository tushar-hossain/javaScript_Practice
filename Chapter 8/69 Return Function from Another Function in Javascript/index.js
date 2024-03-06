// Return Function from Another Function in Javascript

function greet(msg) {
  function greetings(name) {
    return msg + ", " + name + "! ";
  }
  return greetings;
}

var msg = greet("Good Morning");
// console.dir(msg);
var Name = msg("Tushar");
console.log(Name);

var gn = greet("Good Night");
console.log(gn("Tushar"));


// Any number power

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var base10 = base(10);
var pw = base10(2);
console.log(pw);

var base5 = base(5);
console.log(base5(2));
console.log(base5(3));
console.log(base5(5));
