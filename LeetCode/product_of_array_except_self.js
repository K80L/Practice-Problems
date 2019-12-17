// Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of 
// nums except nums[i].

// Example:

// Input:  [1,2,3,4]
// Output: [24,12,8,6]
// Note: Please solve it without division and in O(n).

// Follow up:
// Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

// 1. make a left and right array. these will hold the products of everything to the left or right of my current position (excluding current position)
// 2. iterate from the left side, store the products of all the values to the left of current position
// 3. iterate from the right side, store the products of all the values to the right of current position
// 4. iterate once more time and multipliy left[i] * right[i] and store the product.
// 5. return the ans

function prodArrExSelf(nums) {
  let left = [1];
  let right = [1];
  let ans = [];

  for (let i = 1; i <= nums.length; i++) {
    left[i] = left[i-1] * nums[i-1]
  }

  for (let j = nums.length-2; j--) {
    right[j] = right[j+1] * nums[j+1]
  }

  for (let k = 0; k < nums.length; k++) {
    ans[k] = left[k] * right[k];
  }

  return ans
}