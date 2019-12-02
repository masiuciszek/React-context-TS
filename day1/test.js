const input = require('./fuel');

const inputArray = input.split(' ').map(string => parseInt(string));

// Part One
const calcFuel = masses => {
  let sum = 0;

  for (let i = 0; i < masses.length; i += 1) {
    const currentMass = masses[i];

    sum += Math.floor(currentMass / 3 - 2);
  }

  return sum;
};

calcFuel(inputArray);

// Part Two
const calcFuelPartTwo = masses => {
  let sum = 0;

  for (let i = 0; i < masses.length; i += 1) {
    const currentMass = masses[i];
    let currentMassFuel = Math.floor(currentMass / 3 - 2);

    while (currentMassFuel >= 0) {
      sum += currentMassFuel;
      currentMassFuel = Math.floor(currentMassFuel / 3 - 2);
    }
  }

  return sum;
};

const a = calcFuelPartTwo(inputArray);

console.log(a);
