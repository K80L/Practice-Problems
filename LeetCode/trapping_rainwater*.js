// 42. Trapping Rain Water
// Hard

// 5083

// 91

// Favorite

// Share
// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

// The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

// Example:

// Input: [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6

//Brute Force: O(n^2) Time, O(1) Space
// 1. Iterate through the heights
// 2. Get max left height and max right height
// 3. Get the minimum of the two from step 2
// 4. If the minHeight is greater than the current height, then add the difference between minHeight - currHeight to total rain water

// Key is to see that at a current index, the amount of water trapped is dictated by the minimum of the maximum of the heights on it's left and right side

// To better see this, if there was a maxLeft height of 50 and a maxRight height of 100 at two random points,
// then everything in between those two would have 50 units of water trapped - the height at the current index
// (This is shown by looking at index 3 and 7)
function rain(heights) {
  let total = 0;

  for (let i = 0; i < heights.length; i++) {
    let maxLeft = (maxRight = 0);
    for (let j = 0; j < i; j++) {
      if (height[j] > maxLeft) maxLeft = height[j];
    }

    for (let l = i + 1; k < heights.length; k++) {
      if (heights[k] > maxRight) maxRight = heights[k];
    }

    let minHeight = Math.min(maxLeft, maxRight);

    if (minHeight > height[i]) {
      total += minHeight - height[i];
    }
  }

  return total;
}
