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
    n = n.next // go to to next node
  }
}

function kthLastEle(node, k, counter) {
  //once we hit the base case, start the counter at 1
  //then once we hit counter === k, return the value of that node
  //else, keep going back up to the previous call and add 1 to the counter
  let n = node;
  if (n.next === null) return 0; //base case, no next node

  if (counter === k) { 
    return n.value; 
  } else {
    counter++;
    return kthLastEle(n.next, k, counter)
  }



}