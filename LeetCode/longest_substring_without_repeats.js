// 3. Longest Substring Without Repeating Characters
// Medium

// 7122

// 422

// Favorite

// Share
// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
var lengthOfLongestSubstring = function(s) {
  let count = {};
  let longest = 0;
  let current = 0;

  for (let i = 0; i < s.length; i++) {
    current++;

    if (s[i] in count) {
      if (i - count[s[i]] > current) {
        current = current;
      } else {
        current = i - count[s[i]];
      }
    }

    count[s[i]] = i;
    //i=3
    //current:2
    //a:0, b:2
    //
    //

    if (current > longest) {
      longest = current;
    }
  }

  return longest;
};
