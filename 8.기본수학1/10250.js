let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 방 호수는 YYXX의 형태를 띄는데, XX 는 엘레베이터부터 시작하는 거리