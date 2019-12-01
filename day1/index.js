// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.

const fuel = require('./fuel');

const a = 12;
const b = 14;
const c = 1969;
const d = 100756;

const fuelArray = fuel.split('\n');

const mathFormula = x => Math.floor(x / 3) - 2;

const toMass = fuelArray.map(val => mathFormula(val));

const res = toMass.reduce((acc, cur) => acc + cur, 0);

// 4736213
// console.log(mathFormula(a));
// console.log(mathFormula(b));
// console.log(mathFormula(c));
// console.log(mathFormula(d));
// console.log(fuelArray);
// console.log(toMass);
// console.log(res);
