// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
var firstUniqChar = function(s) {
  let map = {};
  let c;

  s.split("").forEach(char => {
    if (!map[char]) map[char] = 0;
    map[char]++;
  });
  // {l:1, e:3, t:1, o:1, d:1}
  let found = false;
  for (key in map) {
    if (map[key] === 1 && !found) {
      c = key;
      found = true;
    }
  }
  return s.indexOf(c);
};
