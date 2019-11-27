# Given a singly linked list, determine if it is a palindrome.

# Example 1:

# Input: 1->2
# Output: false
# Example 2:

# Input: 1->2->2->1
# Output: true
# Follow up:
# Could you do it in O(n) time and O(1) space?

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# 1 2 3 4 4 3 2 1


class Solution:
    def isPalindrome(self, head: ListNode) -> bool:
        if not head or not head.next:
            return True

        walker = runner = cur = head

        while runner and runner.next:
            walker = walker.next
            runner = runner.next.next

        stack = [walker.val]

        while walker.next:
            walker = walker.next
            stack.append(walker.val)

        while stack:
            if stack.pop() != cur.val:
                return False
            cur = cur.next

        return True
