let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split(" ");

const words = input;

// 스페이스만 들어오는 경우 생각
console.log(words[0] === "" ? 0 : words.length);
