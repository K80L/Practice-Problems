// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// iterative
function revLLIt(head) {
  if (!head || !head.next) return head;

  let stack = [];

  while (head) {
    stack.push(head.value);
    head = head.next;
  }

  let n = new Node(stack.pop());
  let newHead = n;

  while (stack) {
    n.next = new Node(stack.pop());
    n = n.next;
  }

  n.next = null;
  return newHead;
}

function revLLRec(head) {
  if (!head || !head.next) return head; //base case, list of 1 element is already reversed
  let newHead = revLLRec(head.next); //reverse the next list of elements
  head.next.next = head; //set the reversed linked list's pointer back to me, it will be the last element in the reversed linked list
  head.next = null; //set my next to null

  return newHead; //return the reversed list
}
