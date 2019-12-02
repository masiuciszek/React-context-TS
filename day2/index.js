const data = require('./input');

let inputData = data.split(',').map(Number);
const copyData = [...inputData];

const runFn = input => {
  for (let i = 0; i < input.length; i += 1) {
    const index = input[i + 3];
    const index2 = input[i + 1];
    const index3 = input[i + 2];
    if (input[i] === 1) {
      input[index] = input[index2] + input[index3];
    } else if (input[index2]) {
      input[index] = input[index2] * input[index3];
    } else if (input[i] === 99) {
      i = input.length;
    }
    i += 3;
  }
  return input[0];
};

console.log(copyData[0]);
console.log(copyData[1]);
console.log(runFn(inputData));

for (let val = 0; val < 100; val += 1) {
  for (let res = 0; res < 100; res += 1) {
    inputData = [...copyData];
    inputData[1] = val;
    inputData[2] = res;
    if (runFn(inputData) === 2518644 || runFn(inputData) === 19690720) {
      console.log(`PART TWO ${val * 100 + 3}`);
    }
  }
}
