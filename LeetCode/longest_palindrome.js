// /**
//  * @param {string} s
//  * @return {number}
//  */
var longestPalindrome = function(s) {
  //just use a hash table for this
  //add all the letters to the hash,
  //subtract letters 2 at a time
  //if there is an odd number of letters,
  //use that as the middle letter

  let chars = s.split("");
  let hash = {};
  let count = 0;

  chars.forEach(char => {
    if (!hash[char]) {
      hash[char] = 0;
    }
    hash[char]++; //{a: 1, b: 1, c: 4, d: 2, e: 3}
  });

  values = Object.values(hash); //[1, 1, 4, 2, 3]

  values.forEach(value => {
    if (value > 1) {
      if (value % 2 === 0) {
        count += value;
        value = value % 2;
      } else {
        count += value - 1;
        value = value % 2;
      }
    }
  });
  //[1, 1, 0, 0, 1]
  return values.some(value === 1) ? count + 1 : count;
};
