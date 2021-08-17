// 예제 입력이 한줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);
let star = "";
let output = "";

for (let i = 0; i < num; i++) {
  star += "*";
  output += `${star} \n`;
}
console.log(output);
