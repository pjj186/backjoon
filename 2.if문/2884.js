// 예제 입력이 한줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let numbers = [];
let hour = null;
let minute = null;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== "") {
    numbers.push(input[i].split(" "));
  }
}

hour = Number(numbers[0]);
minute = Number(numbers[1]);

minute -= 45;

if (minute < 0) {
  hour--;
  minute += 60;
  if (hour === -1) {
    hour = 23;
  }
}

console.log(hour, minute);
