// JS Break Statement

for (var i = 1; i <= 100; i++) {
  // console.log(i);
  if (i === 9) {
    break;
  } else console.log(i);
}

for (var i = 1; i <= 10; i++) {
  var rand = Math.floor(Math.random() * 10 + 1);

  if (rand === 9) {
    console.log("Winner winner chicken dinner.");
    break;
  } else {
    console.log("You have got " + rand);
  }
}
