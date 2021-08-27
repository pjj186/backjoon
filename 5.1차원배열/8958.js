let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let count = 0;
  let sum = 0;

  for (let j = 0; j < input[i].length; j++) {
    // OX 배열 한라인
    if (input[i][j] === "O") {
      count++;
    } else {
      count = 0;
    }

    sum += count;
  }

  console.log(sum);
}
