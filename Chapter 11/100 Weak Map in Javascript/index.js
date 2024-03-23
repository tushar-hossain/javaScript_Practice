// Weak Map in Javascript

let a = { a: 10 },
  b = { b: 20 };

let weakmap = new WeakMap([
  [a, 45],
  [b, 50],
]);

console.log(weakmap);

console.log(weakmap.get(a));

console.log(weakmap.set((c = { c: 30 }), 60));

weakmap.delete(b);
console.log(weakmap);


