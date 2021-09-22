let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

let str = String(input);

console.log(str.charCodeAt([0]));
