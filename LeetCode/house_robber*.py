# You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

# Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

# Example 1:

# Input: [1,2,3,1]
# Output: 4
# Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
#              Total amount you can rob = 1 + 3 = 4.
# Example 2:

# Input: [2,7,9,3,1]
# Output: 12
# Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
#              Total amount you can rob = 2 + 9 + 1 = 12.


# Recursive Solution: TLE
class Solution:
    def rob(self, nums: List[int]) -> int:

      # Iterative
        if len(nums) == 0:
            return 0

        memo = [0, nums[0]]
        i = 1
        while i < len(nums):
            memo.append(max(memo[i], memo[i-1] + nums[i]))
            i += 1
        return memo[-1]

        # def rob_max(arr, start):
        #     try:
        #         return arr[start] + max(rob_max(arr, start+2), rob_max(arr, start+3))
        #     except:
        #         return 0

        # if nums is None:
        #     return 0

        # return max(get_max(nums, 0), get_max(nums, 1))

        # Another recursive solution
        # Rob either current house i and best houses i-2 behind OR do not rob current house i but rob best houses from i-1 and behind
        # def rob_max_2(nums, idx):
        #     if idx < 0:
        #         return 0
        #     return max(rob_max_2(nums, idx-2) + nums[idx], rob_max_2(nums, idx-1))
