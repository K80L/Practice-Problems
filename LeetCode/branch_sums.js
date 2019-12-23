// Write a function that takes in a Binary Tree and returns a list of its branch sums (ordered from leftmost branch sum to rightmost branch sum).
// A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
// Each Binary Tree node has a value stored in a property called "value" and two children nodes stored in properties called "left" and "right," respectively.
// Children nodes can either be Binary Tree nodes themselves or the None (null) value.

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  if (!root.left && !root.right) return [root.value];
  let sums = [];
  if (root.left) {
    let sumLeft = branchSums(root.left);
    sumLeft.forEach(val => {
      sums.push(val + root.value);
    });
  }
  if (root.right) {
    let sumRight = branchSums(root.right);
    sumRight.forEach(val => {
      sums.push(val + root.value);
    });
  }

  return sums;
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
