let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let N = Number(input[0]);
let number = input[1];
let result = 0;

for (let i = 0; i < N; i++) {
  result += Number(number[i]);
}

console.log(result);
