// JS While Loop

var name = "Tushar Hossain";
var i = 1;

while (i <= 10) {
  console.log(name);
  i++;
}

var x = 1;
while (x <= 100) {
  console.log(x);
  x++;
}

var isRunning = true;

while (isRunning) {
  var rand = Math.floor(Math.random() * 10 + 1);
  if (rand === 9) {
    console.log("Winner winner chicken dinner");
    // break;
    isRunning = false;
  } else {
    console.log("You have got " + rand);
  }
}
