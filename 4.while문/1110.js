// 예제 입력이 한줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);
let sum = 0;
let cycle = 0;

while (true) {
  cycle++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);
  if (num === Number(input)) {
    break;
  }
}

console.log(cycle);
