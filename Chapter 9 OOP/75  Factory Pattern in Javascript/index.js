//  Factory Pattern in Javascript

var reactangle = function (width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log("I am a Rectangle");
      this.print();
    },
    print: function () {
      console.log("My width is " + this.width);
      console.log("My height is " + this.height);
    },
  };
};

var rect1 = reactangle(10, 20);
rect1.draw();
rect1.print();

var rect2 = reactangle(5, 2);
rect2.draw();
rect2.print();
