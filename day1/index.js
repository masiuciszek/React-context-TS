const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');
// PART1
const inputArr = input.split('\n').map(Number);

const calculate = x => Math.floor(x / 3) - 2;

const toMass = inputArr.map(val => calculate(val));

const res = toMass.reduce((a, b) => a + b, 0);

// part 2

const fuelToMass = inputArr.map(x => {
  let val = x;
  const acc = [];

  do {
    val = calculate(val);
    if (val > 0) {
      acc.push(val);
    }
  } while (val > 0);
  return acc.reduce((acc, cur) => acc + cur, 0);
});

const newTotal = fuelToMass.reduce((a, b) => a + b, 0);
