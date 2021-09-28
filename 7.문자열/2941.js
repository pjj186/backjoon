let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split(" ");

let word = input[0];
const croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

for (let cro of croatia) {
  word = word.split(cro).join("0");
  // split이 핵심임! 문자열 전체에서 구분자를 이용해서 배열로 나눠줌
  // join으로 그 빈자리에 다른 문자를 채워주는거임
}

console.log(word.length);
