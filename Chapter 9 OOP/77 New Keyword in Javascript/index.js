// New Keyword in Javascript

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("I am a Rectangle");
    this.print();
  };
  this.print = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
}

// var rect1 = new Rectangle(10, 5);
// console.log(rect1);

function myNew(constructor) {
  var obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  var argsArr = Array.prototype.slice.apply(arguments);
  constructor.apply(obj, argsArr.slice(1));
  return obj;
}

var rect2 = myNew(Rectangle, 10, 20);
rect2.draw();
