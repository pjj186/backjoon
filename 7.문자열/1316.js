let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let words = [];
let count = Number(input[0]);

for (let i = 1; i <= input[0]; i++) {
  words.push(input[i].trim());
}

for (let i = 0; i < words.length; i++) {
  let choiceWord = words[i];
  let checkArr = new Array(26); // 초기화
  for (let j = 1; j < choiceWord.length; j++) {
    if (choiceWord[j - 1] !== choiceWord[j]) {
      // 이전 문자와 현재 문자가 같지 않으면
      if (checkArr[choiceWord[j].charCodeAt(0) - 97] === true) {
        // 이전 문자와 현재 문자가 다르고, 현재 문자가 이전에 나온적이 있다면
        count--;
        break;
      }
      // 이전 문자와 현재 문자가 다르면 이전 문자를 배열에 체크
      checkArr[choiceWord[j - 1].charCodeAt(0) - 97] = true;
    }
  }
}

console.log(count);
