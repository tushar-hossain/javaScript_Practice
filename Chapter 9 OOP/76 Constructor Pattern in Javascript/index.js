// Constructor Pattern in Javascript

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("I am a Rectangle");
    console.log(this);
    this.print();
  };
  this.print = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  };
}

var rect = new Rectangle(10, 20);
console.log(rect);
rect.draw();
rect.print();
