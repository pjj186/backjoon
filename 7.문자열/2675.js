let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let answer = "";
  let arr = input[i].split(" ");
  let P = Number(arr[0]);
  let words = arr[1];
  for (j = 0; j < words.length; j++) {
    answer += words[j].repeat(P);
  }
  console.log(answer);
}
