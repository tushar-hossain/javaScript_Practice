// Search Value in Array

var arr = [1, 2, 3, 4, 5];

var find = 15;
var isFound = false;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] === find) {
    console.log(arr[i]);
    isFound = true;
  }
}

if (!isFound) {
  console.log("Data not found");
}

