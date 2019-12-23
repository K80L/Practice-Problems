// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  return genPen(n, n, [], "");
};

function genPen(left, right, arr, s) {
  if (left > 0) {
    genPen(left - 1, right, arr, s + "(");
  }
  if (right > left) {
    genPen(left, right - 1, arr, s + ")");
  }
  if (right === 0) {
    return arr.push(s);
  }

  return arr;
}
