// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?
var isAnagram = function(s, t) {
  //just use a hash increment and decrement
  if (s.length !== t.length) return false;
  let hash = {};
             
  for (let i=0; i<s.length; i++) {
      if (!hash[s[i]]) hash[s[i]] = 0;
      if (!hash[t[i]]) hash[t[i]] = 0;
      hash[s[i]]++;
      hash[t[i]]--;
  }
  
  return Object.values(hash).every(val => val === 0);
};