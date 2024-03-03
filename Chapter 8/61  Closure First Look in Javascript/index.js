//  Closure First Look in Javascript

function something() {
  var a = 10;

  return function () {
    console.log(a);
  };
}

var result = something();
console.dir(result);
