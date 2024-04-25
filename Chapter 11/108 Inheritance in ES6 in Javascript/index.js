// Inheritance in ES6 in Javascript

class Shape {
  constructor(color) {
    this.color = color;
  }
  draw() {
    console.log("Drawing...");
  }
}

class Circle extends Shape {
  constructor(color, width, height) {
    super(color);
    this.width = width;
    this.height = height;
  }
  print() {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
  }
}

let c1 = new Circle("RED", 10, 20);
console.log(c1);
c1.print();
c1.draw();
