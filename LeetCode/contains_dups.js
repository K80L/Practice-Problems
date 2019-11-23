// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Example 1:

// Input: [1,2,3,1]
// Output: true
// Example 2:

// Input: [1,2,3,4]
// Output: false
// Example 3:

// Input: [1,1,1,3,3,4,3,2,4,2]
// Output: true

//trivial hash map
var containsDuplicate = function(nums) {
  //put them all in a hash, if any value === 2, return true
  let map = {};
  for (let i=0; i<nums.length; i++) {
      if(!map[nums[i]]) map[nums[i]]=0;
      map[nums[i]]++;
  }
  
  return Object.values(map).some(val => val >= 2)
};

//better w/ set
function containsDuplicate(nums) {
  return (new Set(nums).size !== nums.length);
}