// `# Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// # Example:

// # Input: [-2,1,-3,4,-1,2,1,-5,4],
// # Output: 6
// # Explanation: [4,-1,2,1] has the largest sum = 6.
// # Follow up:

// # If you have figured out the O(n) solution,
// try coding another solution using the divide and conquer approach, which is more subtle.

var maxSubArray = function(nums) {
  let arr = [nums[0]];
  // [-2,1,-2,4,3,5,6,1,5]
  for (let i = 1; i < nums.length; i++) {
    let temp = Math.max(nums[i], nums[i] + arr[i - 1]);
    arr.push(temp);
  }

  return Math.max(...arr);
};

function maxSubArr(arr) {
  let maxes = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxes[i - 1] + arr[i] > maxes[i - 1]) {
      maxes.push(maxes[i - 1] + arr[i]);
    } else if (arr[i] > maxes[i - 1] + arr[i]) {
      maxes.push(arr[i]);
    } else {
      maxes.push(0);
    }
  }
}

// maxes: [-2, 1, 0, 4, ]
