let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let max = Number(input[0]);
let answer = ""; // 문자열

for (let i = 1; i <= max; i++) {
  let num = input[i].split(" ");
  answer += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answer);
