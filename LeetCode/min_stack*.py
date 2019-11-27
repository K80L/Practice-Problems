# Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

# push(x) -- Push element x onto stack.
# pop() -- Removes the element on top of the stack.
# top() -- Get the top element.
# getMin() -- Retrieve the minimum element in the stack.


# Example:

# MinStack minStack = new MinStack();
# minStack.push(-2);
# minStack.push(0);
# minStack.push(-3);
# minStack.getMin();   --> Returns -3.
# minStack.pop();
# minStack.top();      --> Returns 0.
# minStack.getMin();   --> Returns -2.
class MinStack:

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.mins = []
        self.stacks = []

    def push(self, x: int) -> None:
        self.stacks.append(x)
        if len(self.mins) == 0:
            self.mins.append(x)
        else:
            self.mins.append(min(x, self.mins[-1]))

    def pop(self) -> None:
        self.stacks.pop()
        self.mins.pop()

    def top(self) -> int:
        return self.stacks[-1]

    def getMin(self) -> int:
        return self.mins[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
