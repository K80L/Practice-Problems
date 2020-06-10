// 3->5->8->5->10->1->2
function partition(root, val) {
  let temp = root;
  let left = root;
  while (root.val !== val) {
    left = root;
    root = root.next;
  }
  let right = root;

  let temp2 = right;

  while (root) {
    root = root.next;
    if (root.val < val) {
      left.next = root;
      left = root;
    } else {
      right.next = root;
      right = root;
    }
  }

  left.next = temp2;
  right.next = null;

  return temp;
}
