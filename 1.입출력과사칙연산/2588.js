let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let count = input[0];
let numbers = [];
let num1 = Number(input[0]);
let num2 = Number(input[1]);

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

console.log(num1 * (num2 % 10));
console.log(num1 * Math.floor((num2 % 100) / 10));
console.log(num1 * Math.floor(num2 / 100));
console.log(num1 * num2);
