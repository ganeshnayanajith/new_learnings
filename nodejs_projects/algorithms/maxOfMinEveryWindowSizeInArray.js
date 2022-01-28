const arr = [10, 20, 30, 50, 10, 70, 30];

function printMaxOfMin(n) {
  // Consider all windows of different
  // sizes starting from size 1
  for (let k = 1; k <= n; k++) {
    // Initialize max of min for current
    // window size k
    let maxOfMin = 0;

    // Traverse through all windows of
    // current size k
    for (let i = 0; i <= n - k; i++) {
      // Find minimum of current window
      let min = arr[i];
      for (let j = 1; j < k; j++) {
        if (arr[i + j] < min)
          min = arr[i + j];
      }

      // Update maxOfMin if required
      if (min > maxOfMin)
        maxOfMin = min;
    }

    // Print max of min for current
    // window size
    console.log(maxOfMin + " ");
  }
}

// Driver method

printMaxOfMin(arr.length);