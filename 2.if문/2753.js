let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);

if ((num % 4 === 0 && num % 100 !== 0) || num % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
