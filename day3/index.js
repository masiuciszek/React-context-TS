/* eslint-disable prefer-const */
const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');

const inputData = input.toString().split(',');
// R = right
// L = left
// D = down
// U = up
const letters = inputData.map(y => y.substring(0, 1));
console.log(inputData);
// console.log(x);
// x.forEach(a => console.log(a));
let x = 0;
let y = 0;

function move(way) {
  switch (way) {
    case 'L':
      x -= 1;
      break;
    case 'R':
      x += 1;
      break;
    case 'U':
      y -= 1;
    case 'D':
      y += 1;
      break;
  }
}
