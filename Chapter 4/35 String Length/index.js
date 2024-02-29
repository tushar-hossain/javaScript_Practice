// String Length

var str = "Tushar Hossain";

console.log(str.length);

var str2 = "Some String";

var length = 0;

while (true) {
  if (str2.charAt(length) == "") {
    break;
  } else {
    length++;
  }
}
console.log(length);

for (var i = 0; i < str2.length; i++){
    console.log(i);
}