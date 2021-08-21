let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let numbers = [];
let count;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(Number(input[i]));
  }
}

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (max <= numbers[i]) {
    max = numbers[i];
    count = i + 1;
  }
}

console.log(max + "\n" + count);
