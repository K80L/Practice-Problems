# Write a program to find the node at which the intersection of two singly linked lists begins.

# For example, the following two linked lists:
# Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
# Output: Reference of the node with value = 8
# Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect).
# From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,0,1,8,4,5]. There are 2 nodes before the intersected node
# in A; There are 3 nodes before the intersected node in B.


class Solution:
    # better solution, switch the heads. The switch should counteract the difference in length
    # and they will eventually equal the same value OR they will both reach None
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        if headA is None and headB is None:
            return None

        pa = headA
        pb = headB

        while pa is not pb:
            pa = headB if pa is None else pa.next
            pb = headA if pb is None else pb.next

        return pa

  # shitty iterative soln using stacks O(m+n) extra space.
    # def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:

    #     if headA is None or headB is None:
    #         return None

    #     stackA = []
    #     stackB = []

    #     while headA:
    #         stackA.append(headA)
    #         headA = headA.next

    #     while headB:
    #         stackB.append(headB)
    #         headB = headB.next

    #     prev = None

    #     while stackA and stackB:
    #         if stackA[-1] is stackB.pop():
    #             prev = stackA.pop()
    #         else:
    #             return prev

    #     return prev
