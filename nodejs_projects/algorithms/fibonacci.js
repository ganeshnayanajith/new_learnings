'use strict';

const fibonacci = (n) => {
  if (n === 1)
    return 0;
  if (n === 2)
    return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

/*function fibonacci(num) {
  if (num === 1)
    return 0;
  if (num === 2)
    return 1;
  let num1 = 0;
  let num2 = 1;
  let sum;
  let i = 2;
  while (i < num) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
    i += 1;
  }
  return num2;
}*/

console.log(fibonacci(13));