// Object Literal in Javascript

var Rectangle = {
  with: 100,
  height: 50,
  calculateArea: function () {
    return this.with * this.height;
  },
  calculateRange: function () {
    return 2 + this.with * this.height;
  },
};

var rectArea = Rectangle.calculateArea();
console.log(rectArea);

var rectRange = Rectangle.calculateRange();
console.log(rectRange);
