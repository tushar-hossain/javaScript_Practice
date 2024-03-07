// Constructor Property in Javascript

var rectangle = function (width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log("Drawing....");
    },
  };
};

var rect1 = rectangle(10, 20);
rect1.draw();
console.log(rect1.constructor);

// constructor Property

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log("Drawing...");
  };
}

var rect2 = new Rectangle(10, 20);
rect2.draw();
console.log(rect2.constructor);
