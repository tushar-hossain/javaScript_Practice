//  Map in Javascript

let map = new Map([
  ["a", 30],
  ["b", 40],
]);
map.set("c", 10);
map.set("d", 20);

console.log(map);

console.log(map.get("a"));
console.log(map.keys());
console.log(map.values());
console.log(map.has("d"));
console.log(map.size);
// map.delete("d");
// console.log(map);

for (let [k, v] of map) {
  console.log(k, v);
}
