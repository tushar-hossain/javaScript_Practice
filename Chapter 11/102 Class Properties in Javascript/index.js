// Class Properties in Javascript

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.test = function () {
      console.log("I am test function");
    };
  }
  name = "Tushar";
  another = function () {
    console.log("I am another function");
  };
  draw() {
    console.log("Drawing...");
  }
}

let rect = new Rectangle(10, 20);
console.log(rect);
rect.draw();
