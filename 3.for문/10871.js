// 예제 입력이 여러줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

// 예제 데이터 개수가 주어진 경우
let inputNX = input[0].split(" ");
let N = Number(inputNX[0]);
let X = Number(inputNX[1]);
let numbers = [];
let answer = "";

for (let i = 1; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

for (let i = 0; i < N; i++) {
  if (numbers[0][i] < X) {
    answer += `${numbers[0][i]} `;
  }
}

console.log(answer);
