// JS Else If Condition

var mark = prompt("Enter your Mark: ");
if (mark >= 101 || mark <= 0) {
  console.log("Invalid Number");
} else if (mark >= 90) {
  console.log("A+");
} else if (mark >= 85) {
  console.log("A");
} else if (mark >= 80) {
  console.log("A-");
} else if (mark >= 75) {
  console.log("B+");
} else if (mark >= 70) {
  console.log("B");
} else if (mark >= 65) {
  console.log("C+");
} else if (mark >= 60) {
  console.log("C");
} else if (mark >= 55) {
  console.log("D+");
} else if (mark >= 50) {
  console.log("D");
} else if (mark >= 40) {
  console.log("E");
} else {
  console.log("F");
}
