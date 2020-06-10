// head = 1->2->3->4->5->6->7->8->null
function kthLastElement(head, k) {
  // k = 3
  let p1 = head;
  let p2 = head;
  for (let i = 1; i < k; i++) {
    p2 = p2.next;
  }

  while (p2.next !== null) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}
