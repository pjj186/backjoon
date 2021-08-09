let fs = require('fs');
let input = fs.readFileSync('예제입력.txt').toString().split('\n');

let count = input[0];
let numbers = [];
let num1 = null;
let num2 = null;

for (let i = 0; i < input.length; i++) {
  if (input[i] !== '') {
    numbers.push(input[i].split(' '));
  }
}

for (let i = 0; i < numbers.length; i++){
  num1 = Number(numbers[i][0]);
  num2 = Number(numbers[i][1]);

}
console.log(num1 + num2);