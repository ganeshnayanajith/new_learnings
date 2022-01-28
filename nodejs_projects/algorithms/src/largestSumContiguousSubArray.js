// JavaScript program to find maximum
// contiguous subarray

// Function to find the maximum
// contiguous subarray
function maxSubArraySum(a, size) {
  let max_so_far = 0;
  let max_ending_here = 0;

  for (let i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i]
    if (max_so_far < max_ending_here)
      max_so_far = max_ending_here;

    if (max_ending_here < 0)
      max_ending_here = 0;
  }
  return max_so_far;
}

// Driver code
const a = [2, -1, 2, 3, -9];
console.log("Maximum contiguous sum is", maxSubArraySum(a, a.length))
