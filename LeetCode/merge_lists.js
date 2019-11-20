// 21. Merge Two Sorted Lists
// Easy
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function mergeLists(l1, l2) {
  let n = new ListNode(); //create starting node
  let head = n.next;      //this is the final return node (head of our new merged LL)

  while (l1 && l2) { //while there are nodes 
    if (l1.val < l2.val) { //if l1 is smaller than l2
      n.next = l1;  //next node should be l1 since it's smaller
      l1 = l1.next;
    } else {
      n.next = l2; //otherwise next node is l2 since l2 is smaller
      l2 = l2.next;
    }
    n = n.next;   //whatever we do, move on to the new current node
  }
  n.next = l1 || l2;  //at the end, after no more nodes in 1 list, just merge the rest of the other LL that still has nodes.

  return head;    //return the head.
} 

function mergeListsRecur(l1, l2) {
  //this will implement swapping
  // Input: 1->2->4, 1->3->4

  if (!l1 || !l2) { //return the non-empty one
    return l1 || l2;
  }

  if (l1.val > l2.val) {
    [l1, l2] = [l2, l1];
  }
  l1.next = mergeListsRecur(l1.next, l2)

  return l1;
}

function mergeListsRecur(l1, l2) {
  if (!l1 || !l2) return l1 || l2;

  if (l1 < l2) {
    l1.next = mergeListsRecur(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeListsRecur(l1, l2.next);
    return l2;
  }
};

