function inOrderTraverse(tree, array) {
  // Write your code here.
  // left, current, right
  if (!tree) return;

  inOrderTraverse(tree.left, array);
  array.push(tree.value);
  inOrderTraverse(tree.right, array);

  return array;
}

function preOrderTraverse(tree, array) {
  // Write your code here.
  // current, left, right
  if (!tree) return;

  array.push(tree.value);
  preOrderTraverse(tree.left, array);
  preOrderTraverse(tree.right, array);

  return array;
}

function postOrderTraverse(tree, array) {
  // Write your code here.
  // left, right, current
  if (!tree) return;

  postOrderTraverse(tree.left, array);
  postOrderTraverse(tree.right, array);
  array.push(tree.value);

  return array;
}
