// Given a binary tree, find its maximum depth.
// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
// Note: A leaf is a node with no children.
// Example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

function treeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new treeNode(3);
root.left = new treeNode(9);
root.right = new treeNode(20);
root.right.left = new treeNode(15);
root.right.right = new treeNode(7);

function maxDepth(root) {
  if (!root) return 0; //base case when there are no more nodes
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

// Explaination:
// travel all the way down to the leaf Node.
// return +1 as you travel back up every level.
// compare the max depths at each node.
// return the max depth of the two.