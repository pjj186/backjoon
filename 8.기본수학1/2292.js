let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split(" ");

const num = Number(input[0]);
let room = 1; // 둘러싼 방?
let distance = 1; // 거리

while (room < num) {
  // 1, 2~7, 8~19 ... 6의 배수마다 거리가 1씩 늘어남
  room += distance * 6;
  distance++;
}

console.log(distance);
