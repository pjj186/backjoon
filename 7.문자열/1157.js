let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

const word = input[0].toUpperCase();
const count = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let max = 0;
let answer;

for (let i = 0; i < word.length; i++) {
  count[word.charCodeAt(i) - 65]++;
  if (max < count[word.charCodeAt(i) - 65]) {
    answer = word.charAt(i);
    max = count[word.charCodeAt(i) - 65];
  } else if (max === count[word.charCodeAt(i) - 65]) {
    answer = "?";
  }
}

console.log(answer);
