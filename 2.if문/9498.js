let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);

if (num >= 90 && num <= 100) {
  console.log("A");
} else if (num >= 80 && num < 90) {
  console.log("B");
} else if (num >= 70 && num < 80) {
  console.log("C");
} else if (num >= 60 && num < 70) {
  console.log("D");
} else if (num < 60) {
  console.log("F");
}
