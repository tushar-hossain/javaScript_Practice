// Class in Javascript

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log("My width is " + this.width);
    console.log("My height is " + this.height);
    console.log("Drawing....");
  }
}

let rect = new Rectangle(10, 20);
console.log(rect);
rect.draw();

rect2 = new Rectangle(40, 50);
console.log(rect2);
rect2.draw();

console.log(typeof Rectangle);
