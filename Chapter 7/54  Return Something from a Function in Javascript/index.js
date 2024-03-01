//  Return Something from a Function in Javascript

function addAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

var result = addAll(10, 20, 30, 11);
console.log(result);

function person(name, email) {
  return {
    name: name,
    email: email,
  };
}

var p1 = person("Tushar Hossain", "tusharhossain455@gmail.com");
console.log(p1);
