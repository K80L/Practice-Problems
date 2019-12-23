// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
/**
 * @param {string} s
 * @return {string}
 */

//iterate,
//set pointers to left and right of current spot,
//count palindrome until false then next iteration
//update
// rpbgggggbpa
// rpbggbpa

var longestPalindrome = function(s) {
  if (s.length <= 1) return s;
  let longest = s[0];
  let currentLongest = 1;

  for (let i = 0; i < s.length; i++) {
    let left = i;
    let right = i;

    while (s[right + 1] === s[i]) {
      right++;
    }

    while (right < s.length && left >= 0 && s[left] === s[right]) {
      if (right - left + 1 > currentLongest) {
        currentLongest = right - left + 1;
        longest = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  return longest;
};
