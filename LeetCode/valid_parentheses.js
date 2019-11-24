// /**
//  * @param {string} s
//  * @return {boolean}
//  */
var isValid = function(s) {
  let stack = [];

  const left = ["(", "[", "{"];

  const right = [")", "]", "}"];

  const pairs = { "(": ")", "[": "]", "{": "}" };

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (left.includes(char)) {
      stack.push(char);
    } else {
      let curr = stack.pop();
      if (pairs[curr] !== char) {
        return false;
      }
    }
  }
  console.log("wtf");
  return stack.length === 0;
};
