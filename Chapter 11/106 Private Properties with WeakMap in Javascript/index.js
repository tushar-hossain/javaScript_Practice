// Private Properties with WeakMap in Javascript

let _width = new WeakMap();
let _height = new WeakMap();
let _resize = new WeakMap();

class Rectangle {
  constructor(width, height) {
    _width.set(this, width);
    _height.set(this, height);
    this.size = 100;
    _resize.set(this, () => {
      console.log(this.size);
    });
  }
  print() {
    console.log("Drawing...");
    console.log(_width.get(this));
    console.log(_height.get(this));
    _resize.get(this)();
  }
}

let rect = new Rectangle(10, 2);
rect.print();
