// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// Example 1:

// Input:
// {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

// Explanation:
// Node 1's value is 1, both of its next and random pointer points to Node 2.
// Node 2's value is 2, its next pointer points to null and its random pointer points to itself.
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;

  let h = head;
  let newHead = new Node(head.val, null, null);
  let hash = { [newHead.val]: newHead };
  let node = newHead;

  while (h) {
    if (h.next && h.next.val in hash) {
      node.next = hash[h.next.val];
    } else if (h.next) {
      let temp = new Node(h.next.val, null, null);
      node.next = temp;
      hash[temp.val] = temp;
    }

    if (h.random && h.random.val in hash) {
      node.random = hash[h.random.val];
    } else if (h.random) {
      let rand = new Node(h.random.val, null, null);
      node.random = rand;
      hash[rand.val] = rand;
    }

    node = node.next;
    h = h.next;
  }

  return newHead;
};
