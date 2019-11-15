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

//given only access to a middle node (not head or tail), delete it from the Linked List.
// a -> b -> c -> d -> e => a -> b -> d -> e
// soln: copy the contents of the next node to the given node, then delete the next node.
function deleteMiddleNode(nodeC) {
  if (!nodeC || nodeC.next === null) return false;

  nodeC.val = nodeC.next.val; 
  nodeC.next = nodeC.next.next;
  return true;
}

//iterate through the linked list, if the value of the current node is less than the value of the given value, move it to the left?
function partitionLinkedList(linkedListHead, val) {
  let beforeStart, beforeEnd, afterStart, afterEnd = null; 
  let n = linkedListHead;

  while(n) { //while we still have a node
    if (n.val < val) { //if the node value is less than the partition value, add the node to the before linked list
      if (!beforeStart) {
        beforeStart = n;
        beforeEnd = beforeStart;
      } else {
        beforeEnd.next = n; //set the next element in the linked list to be the node n
        beforeEnd = n;      //set the new last element in the linked list. we still have access to previous nodes if we start at the head and keep iterating through
      }
    } else { //add the node to the after linked list
      if (!afterStart) {
        afterStart = n;
        afterEnd = afterStart;
      } else {
        afterEnd.next = n;
        afterEnd = n;
      }
    }
    
    n = n.next
  }
  beforeEnd.next = afterStart;
  return beforeStart; //return the beginning  of the linked list
}

//7 -> 1 -> 6 
//5 -> 9 -> 2
//= 2 -> 1 -> 9
// iterate through the two linked lists,
// if add the values from each
// carry if necessary
// call sumLinks on the next two nodes
// return the new linked list after all addition has been completed
function sumLinks(l1, l2, carry) {
  if (l1 === null && l2 === null && carry === 0) return null;

  let result = new Node();

  let value = carry;  //initialize our value to be added

  if (l1) { //if there is a node, add it's value 
    value += l1.data;
  }
  
  if (l2) { //if there is a node, add it's value 
    value += l2.data;
  }

  result.data = value % 10;   //set the data for the current node

  if (l1.next || l2.next) {
    result.next = sumLinks(l1.next, l2.next, value/10); //set the next node through recursive call
  }

  return result;  //return the node 
}

function palindrome(linkedList) {
  let reversed = cloneAndRev(linkedList); //make a clone of the linked list but reversed
  return isEqual(linkedList.head, reversed); // check that the two linked lists are equal
}

function cloneAndRev(node) {
  let head = null;

  while (node) {
    let n = new Node(node);
    n.next = head;
    head = n;
    node = node.next;
  }

  return head;
}

function isEqual(l1, l2) {
  while (l1) {
    if (l1.value !== l2.value) return false;
    l1 = l1.next;
    l2 = l2.next;
  }
  return l1 === null && l2 === null;
}