// Method Overriding in ES6 in Javascript

class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing...");
  }
}

// let s1 = new Shape();
// console.log(s1);

class Circle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  print() {
    console.log("My width is " + this.width);
    console.log("my height is " + this.height);
  }
  draw() {
    console.log("I am Drawing...");
  }
}

let c1 = new Circle("RED", 10, 20);
console.log(c1);
c1.draw();
