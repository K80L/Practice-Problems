// Problem 1
// Write three functions that compute the sum of the numbers in a given list using a for-loop, a while-loop, and recursion.

// 1. for loop
const test = [1, 2, 3, 4, 5];

function forSum(nums) {
  let sum = 0;
  for (let num of nums) {
    sum += num;
  }

  return sum;
}

function whileSum(nums) {
  let sum = 0;
  while (nums.length) {
    sum += nums.pop();
  }

  return sum;
}

function recSum(nums) {
  let sum = 0;

  if (nums.length < 1) {
    return 0;
  }

  sum += nums[0] + recSum(nums.slice(1));

  return sum;
}

// console.log(forSum(test));
// console.log(whileSum(test));
// console.log(recSum(test));

// Problem 2
// Write a function that combines two lists by alternatingly taking elements.
// For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3].
function combineLists(one, two) {
  let combined = [];
  while (one.length && two.length) {
    combined.push(one.shift());
    combined.push(two.shift());
  }

  return combined;
}
const uno = [1, 2, 3];
const dos = [9, 8, 7];
// console.log(combineLists(uno, dos));

// Problem 3
// Write a function that computes the list of the first 100 Fibonacci numbers.
// By definition, the first two numbers in the Fibonacci sequence are 0 and 1,
// and each subsequent number is the sum of the previous two. As an example,
// here are the first 10 Fibonnaci numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, and 34.
function fib100() {
  let fibs = [0, 1];
  while (fibs.length !== 100) {
    fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  }

  return fibs;
}

// console.log(fib100());

// Problem 4
// Write a function that given a list of non negative integers,
// arranges them such that they form the largest possible number.
// For example, given [50, 2, 1, 9], the largest formed number is 95021.
// need to put 9 before 50, looks like it compares the first digits of each number and then the next.
// [4, 423, 4, 44, 420] =>
function largestPossibleNumber(nums) {
  //do a bubble sort type comparing using localeCompare which compares strings lexical scope
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < nums.length - 1; i++) {
      let uno = nums[i].toString();
      let dos = nums[i + 1].toString();

      if ((uno + dos).localeCompare(dos + uno) === -1) {
        sorted = false;
        [nums[i], nums[i + 1]] = [nums[i + 1], [nums[i]]];
      }
    }
  }

  return parseInt(nums.join(""));
}

// console.log(largestPossibleNumber([50, 2, 1, 9]));
// console.log(largestPossibleNumber([4, 423, 4, 44, 420]));

// Problem 5
// Write a program that outputs all possibilities to put + or - or nothing between the numbers 1, 2, ..., 9 (in this order)
// such that the result is always 100. For example: 1 + 2 + 34 – 5 + 67 – 8 + 9 = 100.

// Seems like a tree type of Problem
//                    1
//     3             -1             12
// 6   0   33     2  -4  13     15  9 123
function addTo100(nums) {}

console.log(addTo100([1, 2, 3, 4, 5, 6, 7, 8, 9]));
