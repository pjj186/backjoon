let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split(" ");

let up = input[0];
let down = input[1];
let V = input[2];

console.log(Math.ceil((V - down) / (up - down)));
// V (정점) 에서 Down(밤에 미끄러지는 길이) 를 뺴는 이유
// 정점에 도착하면, 그 즉시 미션이 끝난다. 따라서 처음부터 정점에서 밤에 미끄러지는 길이를 뺀 후 계산을 하면된다.
// 밤에 미끄러지는 길이를 배제하고 계산한다고 생각하면 이해하기 쉽다.
