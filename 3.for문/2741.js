// 예제 입력이 한줄로 되어 있을 때
let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

// 시간초과때문에 문자열에 담아야함
let num = Number(input);
let answer = "";

for (let i = 1; i <= num; i++) {
  answer += i + "\n";
}
console.log(answer);
