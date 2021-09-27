let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

const word = input[0];

let result = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === "A" || word[i] === "B" || word[i] === "C") {
    result = result + 3;
  } else if (word[i] === "D" || word[i] === "E" || word[i] === "F") {
    result = result + 4;
  } else if (word[i] === "G" || word[i] === "H" || word[i] === "I") {
    result = result + 5;
  } else if (word[i] === "J" || word[i] === "K" || word[i] === "L") {
    result = result + 6;
  } else if (word[i] === "M" || word[i] === "N" || word[i] === "O") {
    result = result + 7;
  } else if (
    word[i] === "P" ||
    word[i] === "Q" ||
    word[i] === "R" ||
    word[i] === "S"
  ) {
    result = result + 8;
  } else if (word[i] === "T" || word[i] === "U" || word[i] === "V") {
    result = result + 9;
  } else if (
    word[i] === "W" ||
    word[i] === "X" ||
    word[i] === "Y" ||
    word[i] === "Z"
  ) {
    result = result + 10;
  }
}

console.log(result);
