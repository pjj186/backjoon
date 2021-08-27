let input = require("fs").readFileSync("예제입력.txt").toString().split("\n");

const num = input[0] * 1; // 1을 곱하여 숫자로 타입 변환
const score = input[1].split(" ");

const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < num; i++) {
  sum += (score[i] / max) * 100; // 점수/M*100
}

console.log(sum / num);
