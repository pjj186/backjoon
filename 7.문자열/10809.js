let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let word = input[0];
let answer = "";

for (let i = 0; i < alphabet.length; i++) {
  answer += word.indexOf(alphabet[i]) + " ";
}

console.log(answer);
