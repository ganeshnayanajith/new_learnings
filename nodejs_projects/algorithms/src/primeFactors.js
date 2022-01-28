'use strict';

const getPrimeFactors = (n) => {

  let divisor = 2;
  const factors = [];

  while (n > 2) {
    if (n % divisor === 0) {
      factors.push(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }
  return factors;
};

console.log(getPrimeFactors(2));
console.log(getPrimeFactors(10));
console.log(getPrimeFactors(69));
console.log(getPrimeFactors(125));