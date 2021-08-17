// 예제 입력이 한줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);
let output = "";

for (let i = 0; i < num; i++) {
  // 공백 for 문
  for (let j = 0; j < num - i - 1; j++) {
    output += " ";
  }
  // 별 for 문
  for (let k = 0; k <= i; k++) {
    output += "*";
  }
  output += "\n";
}

console.log(output);
