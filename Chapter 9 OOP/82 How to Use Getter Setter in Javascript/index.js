// How to Use Getter Setter in Javascript

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    x: 10,
    y: 30,
  };
  var print = function () {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  }.bind(this);
  this.draw = function () {
    console.log("I am Rectangle");
    print();
    console.log("Position x = " + position.x + " y = " + position.y);
  };
  //   this.getposition = function () {
  //     return position;
  //   };

  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    set: function (value) {
      position = value;
    },
  });
};

var rect = new Rectangle(10, 20);
rect.draw();
// console.log(rect.getposition());
console.log(rect.position);
rect.position = {
  x: 100,
  y: -123,
};
console.log(rect.position);
