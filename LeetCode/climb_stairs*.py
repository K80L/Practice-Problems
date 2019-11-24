# You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Note: Given n will be a positive integer.

# Example 1:

# Input: 2
# Output: 2
# Explanation: There are two ways to climb to the top.
# 1. 1 step + 1 step
# 2. 2 steps
# Example 2:

# Input: 3
# Output: 3
# Explanation: There are three ways to climb to the top.
# 1. 1 step + 1 step + 1 step
# 2. 1 step + 2 steps
# 3. 2 steps + 1 step


class Solution:
    def climbStairs(self, n: int) -> int:
      # 1 step,  1                                     1 move
      # 2 steps, 11 2                                  2 moves
      # 3 steps, 111 12 21                             3 moves
      # 4 steps, 1111, 112, 121, 211, 22               5 moves
      # 5 steps, 11111 2111 1211 1121 1112 221 212 122 8 moves
        # base cases, the ways to climb the steps

        #         if n == 0:  #0 ways to climb 0 steps
        #             return 0
        #         if n == 1:  #1 way to climb 1 step
        #             return 1
        #         if n == 2:  #2 ways to climb 2 steps
        #             return 2

        #         return self.climbStairs(n-1) + self.climbStairs(n-2)

        if n == 0:  # 0 ways to climb 0 steps
            return 0
        if n == 1:  # 1 way to climb 1 step
            return 1
        if n == 2:  # 2 ways to climb 2 steps
            return 2

        ways = [0, 1, 2]

        for _ in range(n-2):
            ways.append(sum(ways[-2:]))
        return ways[-1]
