//  Getter & Setter in ES6

let _radius = new WeakMap();
let _name = new WeakMap();

class Circle {
  constructor(radius, name) {
    _radius.set(this, radius);
    _name.set(this, name);
  }
  prin() {
    console.log("Drawing...");
    console.log(_radius.get(this), _name.get(this));
  }
  //   getRadius() {
  //     return _radius.get(this);
  //   }
  get radius() {
    return _radius.get(this);
  }
  set radius(v) {
    _radius.set(this, v);
  }
}

let c1 = new Circle(20, "CRED");
c1.prin();

// console.log(c1.getRadius());

console.log(c1.radius);

c1.radius = 100;

console.log(c1.radius);
