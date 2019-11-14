//1. Remove Dups
//Remove duplicates from an unsorted linked list.

function removeDups(linkedList) {
  let n = linkedList.head;
  let hash = {};

  while (n) {
    if (hash[n.data]) { // if we already have the value, delete the node from the link
      n.prev.next = n.next
    } else {
      hash[n.data] = true // we don't have the value yet, so we add it to the hash
    }
    n = n.next // go to next node
  }
}

//1 -> 2 -> 3 -> null
function kthLastEle(linkedListHead, k) {
  if (linkedListHead === null) return 0;

  let index = kthLastEle(linkedListHead.next, k) + 1;

  if (index === k) return linkedListHead.value

  return index;
}