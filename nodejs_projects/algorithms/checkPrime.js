'use strict';

const isPrime = (n) => {

  let divisor = 2;

  while (n > divisor) {
    if (n % divisor === 0) {
      return false;
    } else {
      divisor++;
    }
  }
  return true;

};

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(21));