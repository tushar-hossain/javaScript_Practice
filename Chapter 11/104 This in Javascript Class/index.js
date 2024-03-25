// This in Javascript Class

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  print() {
    console.log(this);
  }
}

let s1 = new Shape(10, 20);
// s1.print();

let test = s1.print;
test(); //output undefine



function Shapes() {
  this.draw = function () {
    console.log(this);
  };
}

let s2 = new Shapes();
let ts = s2.draw;
ts(); //output window object
