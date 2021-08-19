// 예제 입력이 여러줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let numbers = [];
let answer;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

let i = 0;
while (i < numbers.length) {
  let num1 = Number(numbers[i][0]);
  let num2 = Number(numbers[i][1]);
  answer = num1 + num2;
  i++;
  console.log(answer);
}
