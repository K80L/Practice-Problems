// 2. Add Two Numbers
// Medium

// 6485

// 1690

// Favorite

// Share
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let n = new ListNode(0);
  let head = n;

  while (l1 || l2) {
    l1val = l1 !== null ? l1.val : 0;
    l2val = l2 !== null ? l2.val : 0;

    let sum = l1val + l2val + carry;
    carry = Math.floor(sum / 10);

    n.next = new ListNode(sum % 10);
    n = n.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    n.next = new ListNode(carry);
  }

  return head.next;
};
