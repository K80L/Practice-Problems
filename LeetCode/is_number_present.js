// 3. Is the Number Present?

// Given an array of integers, for each element determine whether that element occurs earlier in the array and whether it occurs later in the array.
// Return an array of two binary integers as strings where each binary digit is 1 if the value occurs in the earlier or later subarrays, or 0 if not.
// The index of each binary digit matches the index of the array element being tested. The first string is related to lower indices and the second to higher.

// For example, given num = [1,2,3,2,1] we perform the following tests:
//                                  Bit Value
// i  A[i]  A[0:i-1]     A[i+1:n-1] First   Second
// -  ----  -------     ---------   -        -
// 0  1     NULL        [2,3,2,1]   0        1
// 1  2     [1]         [3,2,1]     0        1
// 2  3     [1,2]       [2,1]       0        0
// 3  2     [1,2,3]     [1]         1        0
// 4  1     [1,2,3,2]   NULL        1        0

// Our first output is 00011 and our second is 11000.

// Function Description
// Complete the function bitPattern in the editor below. The function must return an array of two strings of binary digits.

// bitPattern has the following parameter(s):
//     num[num[0],...num[n-1]]:  an array of integers

// Constraints
// 1 ≤ n ≤ 104
// 0 ≤ num[i] ≤ 104

// Input Format for Custom Testing
// Input from stdin will be processed as follows and passed to the function.

// The first line contains an integer n, the size of the array num.
// Each of the next n lines contains an integer num[i].

// Sample Case 0
// Sample Input 0
// 6
// 1
// 3
// 2
// 3
// 4
// 1
// Sample Output 0
// 000101
// 110000

// Explanation 0
//                                     Bit Value
// i  A[i]  A[0:i-1]     A[i+1:n-1]  First   Second
// -  ----  -------     ---------      -        -
// 0  1     NULL        [3,2,3,4,1]    0        1
// 1  3     [1]         [2,3,4,1]      0        1
// 2  2     [1,3]       [3,4,1]        0        0
// 3  3     [1,3,2]     [4,1]          1        0
// 4  4     [1,3,2,3]   [1]            0        0
// 5  1     [1,3,2,3,4] NULL           1        0

function present(nums) {
  let earlier = [];
  let later = [];

  // could split the array into left and right and search
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let left = nums.slice(0, i);
    let right = nums.slice(i + 1);
    if (left.includes(current)) {
      earlier.push(1);
      later.push(0);
    } else if (right.includes(current)) {
      earlier.push(0);
      later.push(1);
    } else {
      earlier.push(0);
      later.push(0);
    }
  }

  return [earlier.join(""), later.join("")];
}

console.log(present([1, 2, 3, 2, 1]));
