let fs = require("fs");
let input = fs.readFileSync("예제입력.txt").toString().trim().split(" ");

let num = Number(input[0]);
let group = 1; // 대각선을 그룹으로 나눔 (그룹안에 포함되 있는 숫자)
// group = 1 -> 1/1
// group = 2 => 1/2 -> 2/1
// group = 3 => 3/1 - > 2/2 -> 1/3
// 그룹이 짝수면, 숫자가 분자부터 1, 2, 3 분모는 그룹숫자부터시작해서 1씩 마이너스
// 그룹이 홀수면, 숫자가 분모부터 1, 2, 3 분자는 그룹 숫자부터 시작해서 1씩 마이너스
// 입력받은 num이 어느 그룹인지 판단해야함
// ex) 13을 입력받았다. 1,2,3,4,5 13은 5번째 그룹에 속할거임
let passedGroup = 0; // 따라서 지나 온 그룹을 마킹해 줄 변수를 선언 처음엔 지난 그룹이 없으니까 0이다.
while (true) {
  if (num <= group + passedGroup) {
    // 입력받은 num이 몇번째 그룹에 속하는지 판단
    if (group % 2 === 1) {
      // 그룹이 홀수면 분모부터 1,2,3
      // 분모 분자의 합 : group + 1
      // num - passedGroup : 해당 그룹에서 몇번째인지,
      // 그룹이 홀수니까 분모는 num - passedGroup 값 그대로임
      console.log(`${group + 1 - (num - passedGroup)}/${num - passedGroup}`);
      break;
    } else {
      // 그룹이 짝수면 분자부터 1, 2, 3
      console.log(`${num - passedGroup}/${group + 1 - (num - passedGroup)}`);
      break;
    }
  } else {
    // 입력받은 num이 현재 그룹에 속하지 않으면, passedGroup에 더해준다.
    passedGroup += group;
    group++; // 다음그룹으로 넘어가야하니깐 증감시켜줌
  }
}
