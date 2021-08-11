let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);
let sum = null;

for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log(sum);
