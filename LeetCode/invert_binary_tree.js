// 226. Invert Binary Tree
// Easy

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function invert(root) {
  if (!root) {
    return null;
  }

  let left = invert(root.left);
  let right = invert(root.right);

  root.left = right;
  root.right = left;

  return root;
}
