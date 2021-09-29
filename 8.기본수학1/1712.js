let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

// A만원 : 고정비용, B만원: 가변비용, C만원: 상품가격
// 손익분기점 : 최초로 이익이 발생하는 판매량
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

// A를 C - B 로 나누고 1을 더해준다. 이게 공식
// ex) 1000 70 170 ==> 1000 / 100 ==> 10
// 10 + 1 => 11 (답)

// ! 답이 무조건 정수가 아닌 실수가 나올수 있다는 점 유의

const S = A / (C - B);
let answer = Math.floor(S) + 1;

console.log(B >= C ? "-1" : answer);
