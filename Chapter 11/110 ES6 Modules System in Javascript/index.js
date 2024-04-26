// ES6 Modules System in Javascript

import Circle from "./Circle.js";

let c1 = new Circle("Green", 40, 10);
console.log(c1);
c1.draw();

import * as func from "./func.js";

// console.log(func);
console.log(func.add(45, 10));
console.log(func.mult(45, 10));

import { add, div } from "./func.js";

console.log(add(45, 10));
console.log(div(45, 10));
