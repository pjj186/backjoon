let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let numbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let A = Number(input[0]);
let B = Number(input[1]);
let C = Number(input[2]);

let result = String(A * B * C);

for (let i = 0; i < numbers.length; i++) {
  if (result.charAt(i) === "0") {
    numbers[0]++;
  } else if (result.charAt(i) === "1") {
    numbers[1]++;
  } else if (result.charAt(i) === "2") {
    numbers[2]++;
  } else if (result.charAt(i) === "3") {
    numbers[3]++;
  } else if (result.charAt(i) === "4") {
    numbers[4]++;
  } else if (result.charAt(i) === "5") {
    numbers[5]++;
  } else if (result.charAt(i) === "6") {
    numbers[6]++;
  } else if (result.charAt(i) === "7") {
    numbers[7]++;
  } else if (result.charAt(i) === "8") {
    numbers[8]++;
  } else if (result.charAt(i) === "9") {
    numbers[9]++;
  }
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
