// Private Properties in Javascript

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    x: 50,
    y: -100,
  };

  print = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  }.bind(this);

  this.draw = function () {
    console.log("I am a Rectangle");
    print();
    console.log("position x = " + position.x + " y = " + position.y);
  };
};

var rect = new Rectangle(10, 30);
rect.draw();
