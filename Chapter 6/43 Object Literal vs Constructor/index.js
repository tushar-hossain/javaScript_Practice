// Object Literal vs Constructor

var obj = {
  x: 10,
  y: 20,
};

console.log(obj);

obj.z = 30;
console.log(obj);

// Constructor

var obj2 = Object();
obj2.a = 10;
obj2.b = 20;
obj2.c = 30;
console.log(obj2);

var obj3 = new Object();

obj3.a = 10;
obj3.b = 20;

console.log(obj3);
