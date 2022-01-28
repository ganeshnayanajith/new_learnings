// JavaScript Program to find equilibrium
// index of an array
function equilibrium(arr, n) {
  let i;
  let leftSum, rightSum;

  /*Check for indexes one by one until
  an equilibrium index is found*/
  for (i = 0; i < n; ++i) {

    /*get left sum*/
    leftSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }


    /*get right sum*/
    rightSum = 0;
    for (let j = i + 1; j < n; j++) {
      rightSum += arr[j];
    }


    /*if leftSum and rightSum are same,
    then we are done*/
    if (leftSum === rightSum) {
      return i;
    }
  }

  /* return -1 if no equilibrium index is found*/
  return -1;
}

// Driver code

const arr = [-7, 1, 5, 2, -4, 3, 0];
n = arr.length;
console.log(equilibrium(arr, n));

