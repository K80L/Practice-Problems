// 266. Palindrome Permutation
// Easy

// 260

// 43

// Favorite

// Share
// Given a string, determine if a permutation of the string could form a palindrome.

// Example 1:

// Input: "code"
// Output: false
// Example 2:

// Input: "aab"
// Output: true
// Example 3:

// Input: "carerac"
// Output: true

var canPermutePalindrome = function(s) {
  let hash = {};
  for (let i = 0; i < s.length; i++) {
    if (!hash[s[i]]) hash[s[i]] = 0;
    hash[s[i]]++;
  }

  let count = Object.values(hash);
  let uno = false;

  for (let i = 0; i < count.length; i++) {
    if (count[i] % 2 !== 0) {
      if (uno) {
        return false;
      }
      uno = true;
    }
  }

  return true;
};
