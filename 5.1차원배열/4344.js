let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().split("\n");

let C = input[0] * 1;

for (let i = 1; i <= C; i++) {
  let score = input[i].split(" ");
  let N = score.shift() * 1;
  // 평균을 넘는 학생들의 수를 집계할 count
  let count = 0;

  let avg = score.reduce((acc, v) => (acc += v * 1), 0);
  avg /= N;

  for (let j = 0; j < N; j++) {
    if (score[j] > avg) {
      // 평균을 넘는 학생들이 있으면 카운트를 하나씩 올려줌.
      count++;
    }
  }

  // 백분율을 구하고, 소수점 3자리까지 표시
  let result = ((count / N) * 100).toFixed(3);

  console.log(result + "%");
}
