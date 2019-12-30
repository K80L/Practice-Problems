// Return the length of the shortest, non-empty, contiguous subarray of A with sum at least K.

// If there is no non-empty subarray with sum at least K, return -1.

// Example 1:

// Input: A = [1], K = 1
// Output: 1
// Example 2:

// Input: A = [1,2], K = 4
// Output: -1
// Example 3:

// Input: A = [2,-1,2], K = 3
// Output: 3

// Note:

// 1 <= A.length <= 50000
// -10 ^ 5 <= A[i] <= 10 ^ 5
// 1 <= K <= 10 ^ 9

var shortestSubarray = function(A, K) {
  let P = [0];
  for (let a of A) P.push(a + P[P.length - 1]);

  let arr = [];
  let dist = A.length + 1;

  for (let y = 0; y < P.length; y++) {
    while (arr.length > 0 && P[y] - P[arr[0]] >= K) {
      dist = Math.min(dist, y - arr[0]);
      arr.shift();
    }
    while (arr.length > 0 && P[y] <= P[arr[arr.length - 1]]) {
      arr.pop();
    }
    arr.push(y);
  }

  return dist !== A.length + 1 ? dist : -1;
};
