// 예제 입력이 여러줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

// 예제 데이터 개수가 주어진 경우
let numbers = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < numbers.length; i++) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);
  console.log(`Case #${i + 1}: ${num1 + num2}`);
}
