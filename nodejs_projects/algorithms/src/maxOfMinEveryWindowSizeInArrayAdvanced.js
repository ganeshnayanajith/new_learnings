let arr = [10, 20, 30, 50, 10, 70, 30];

function printMaxOfMin(n) {

  // Used to find previous and next smaller
  let s = [];

  // Arrays to store previous
  // and next smaller
  let left = new Array(n + 1);
  left.fill(0);
  let right = new Array(n + 1);
  right.fill(0);

  // Initialize elements of left[]
  // and right[]
  for (let i = 0; i < n; i++) {
    left[i] = -1;
    right[i] = n;
  }

  // Fill elements of left[] using logic discussed on
  // https://www.geeksforgeeks.org/next-greater-element/
  for (let i = 0; i < n; i++) {
    while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }

    if (s.length > 0) {
      left[i] = s[s.length - 1];
    }

    s.push(i);
  }

  // Empty the stack as stack is going
  // to be used for right[]
  while (s.length > 0) {
    s.pop();
  }

  // Fill elements of right[] using
  // same logic
  for (let i = n - 1; i >= 0; i--) {
    while (s.length > 0 && arr[s[s.length - 1]] >= arr[i]) {
      s.pop();
    }

    if (s.length > 0) {
      right[i] = s[s.length - 1];
    }

    s.push(i);
  }

  // Create and initialize answer array
  let ans = new Array(n + 1);
  ans.fill(0);
  for (let i = 0; i <= n; i++) {
    ans[i] = 0;
  }

  // Fill answer array by comparing
  // minimums of all lengths computed
  // using left[] and right[]
  for (let i = 0; i < n; i++) {

    // length of the interval
    let len = right[i] - left[i] - 1;

    // arr[i] is a possible answer for
    // this length 'len' interval, check x
    // if arr[i] is more than max for 'len'
    ans[len] = Math.max(ans[len], arr[i]);
  }

  // Some entries in ans[] may not be
  // filled yet. Fill them by taking
  // values from right side of ans[]
  for (let i = n - 1; i >= 1; i--) {
    ans[i] = Math.max(ans[i], ans[i + 1]);
  }

  // Print the result
  for (let i = 1; i <= n; i++) {
    console.log(ans[i] + " ");
  }
}

printMaxOfMin(arr.length);