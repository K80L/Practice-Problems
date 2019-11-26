class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        if root is None:
            return True
        else:
            return self.isMirror(root.left, root.right)

    def isMirror(self, left, right):
        if left is None and right is None:
            return True
        if left is None or right is None:
            return False

        if left.val == right.val:
            in_pair = self.isMirror(left.right, right.left)
            out_pair = self.isMirror(left.left, right.right)
            return in_pair and out_pair
        else:
            return False

  # using a queue
  def isSymmetric(self, root: TreeNode) -> bool:
    if root is None:
      return True
    
    queue = [root.left, root.right]
    while queue:
      left = queue.pop(0)
      right = queue.pop(0)
      if left is None and right is None:
        continue
      if left is None or right is None:
        return False
      if left.val == right.val:
        queue.append(left.left)
        queue.append(right.right)
        queue.append(left.right)
        queue.append(right.left)
      else:
        return False
    
    return True

  # using a stack
  def isSymmetric(self, root: TreeNode) -> bool:
    if root is None:
      return True
    
    stack = [[root.left, root.right]]
    while stack:
      pair = stack.pop()
      left = pair[0]
      right = pair[1]

      if left is None and right is None:
        continue
      if left is None or right is None:
        return False
      if left.val == right.val: 
        stack.append(0, [left.left, right.right])
        stack.append(0, [left.right, right.left])
      else:
        return False
    
    return True
