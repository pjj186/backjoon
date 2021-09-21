let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split(" ");

// 숫자 N의 범위는 1부터 1000까지이다.
let N = Number(input[0]);
let count = 0;

for (let i = 1; i <= N; i++) {
  let num = String(i);
  if (i < 100) {
    // 1부터 99까지는 모두 한수이다.
    count++;
    continue;
  }

  // 문제에서 주어진 숫자의 범위는 1에서 1000까지의 범위인데, 1000은 한수가 아니기때문에
  // 100의자리 숫자까지만 체크한다.
  let firstCheck = Number(num[0]) - Number(num[1]);
  let secondCheck = Number(num[1]) - Number(num[2]);

  if (firstCheck === secondCheck) {
    // 숫자 간의 차이가 일정 : 등차수열을 이룬다 => 한수
    count++;
  }
}

console.log(count);
