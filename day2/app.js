const fs = require('fs');
const path = require('path');

const inputData = fs.readFileSync(path.join(__dirname, 'input.txt'), 'UTF8');
const sequence = (input, noun, verb) =>
  input
    .split(',')
    .map((value, index) => (index === 1 ? noun : index === 2 ? verb : +value));

const instructions = sequence => {
  const instructions = [];
  while (sequence.length) {
    instructions.push(sequence.splice(0, 4));
  }
  return instructions;
};

const compile = (sequence, instructions) => {
  for (const instruction of instructions) {
    const operation = instruction[0];
    const first = instruction[1];
    const second = instruction[2];
    const result = instruction[3];

    switch (operation) {
      case 1:
        sequence[result] = sequence[first] + sequence[second];
        break;
      case 2:
        sequence[result] = sequence[first] * sequence[second];
        break;
      case 99:
        return sequence;
      default:
        throw Error('Oops. Something went wrong!');
    }
  }
};

const run = (input, noun, verb) =>
  compile(
    sequence(input, noun, verb),
    instructions(sequence(input, noun, verb))
  );
