// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length < 1) {
    return -1;
  }

  let midIdx =
    nums.length % 2 === 0 ? nums.length / 2 - 1 : Math.floor(nums.length / 2);

  if (nums[midIdx] === target) return midIdx;
  let temp;

  if (nums[midIdx] >= nums[0]) {
    if (nums[0] <= target && target < nums[midIdx]) {
      temp = search(nums.slice(0, midIdx), target);
    } else {
      temp = search(nums.slice(midIdx + 1), target);
      temp = temp === -1 ? -1 : temp + midIdx + 1;
    }
  } else {
    if (nums[midIdx] < target && target <= nums[nums.length - 1]) {
      temp = search(nums.slice(midIdx + 1), target);
      temp = temp === -1 ? -1 : temp + midIdx + 1;
    } else {
      temp = search(nums.slice(0, midIdx), target);
    }
  }

  return temp === -1 ? -1 : temp;
};
