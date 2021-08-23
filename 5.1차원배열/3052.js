let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split("\n");

const numbers = [];

input.forEach((num) => {
  const modNum = num % 42;
  //  indexOf 메서드를 사용하여 배열안에 값이 있는지 확인하고 없을 시 해당 배열에 나머지를 넣어주고 배열의 길이를 반환
  if (numbers.indexOf(modNum) === -1) {
    numbers.push(modNum);
  }
});

console.log(numbers.length);
