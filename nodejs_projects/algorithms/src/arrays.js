const myArray = [1, 2, 3];
// index         0  1  2

console.log(myArray[1]);
console.log(myArray[-1]);
console.log('-------------');
console.log(myArray.includes(1));
console.log('-------------');
console.log(myArray.includes(1, 0));
console.log(myArray.includes(1, 1));
console.log(myArray.includes(1, 2));
console.log(myArray.includes(3, 2));
console.log(myArray.includes(3, 3));
console.log(myArray.includes(3, 4));
console.log('-------------');
console.log(myArray.includes(1, -1));
console.log(myArray.includes(3, -1));
console.log(myArray.includes(2, -2));
console.log(myArray.includes(1, -2));
console.log('-------------');
console.log(myArray.includes(1, -3));
console.log(myArray.includes(1, -4));
console.log(myArray.includes(1, -5));
console.log(myArray.includes(2, -5));
console.log(myArray.includes(2, -3));