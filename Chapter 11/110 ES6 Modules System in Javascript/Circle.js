import Shape from "./Shape.js";

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
  draw() {
    console.log("I am Drawing from Circle.");
  }
}
export default Circle;
