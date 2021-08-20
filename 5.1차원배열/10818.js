let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let count = Number(input[0]);

// 문자 배열을 숫자 배열로 변환
let numbers = input[1].split(" ").map((num) => Number(num));

let min = numbers[0];
let max = numbers[0];

for (let i = 1; i < count; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
