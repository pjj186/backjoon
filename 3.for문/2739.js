let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let num = Number(input);

for (var i = 1; i < 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
