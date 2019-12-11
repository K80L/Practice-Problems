# Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

# Example:

# Input: [-2,1,-3,4,-1,2,1,-5,4],
# Output: 6
# Explanation: [4,-1,2,1] has the largest sum = 6.
# Follow up:

# If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.


class Solution:
    def maxSubArray(self, nums: List[int]) -> int:

        i = temp = 0
        sum = max(nums)

        while i < len(nums):
            if nums[i] > sum:
                sum = nums[i]
            if nums[i] > 0:
                temp = nums[i]
                j = i+1
                while j < len(nums):
                    temp += nums[j]
                    if temp > sum:
                        sum = temp
                    elif temp <= 0:
                        break
                    j += 1
            i += 1

        return sum

    def maxSubArrayRec(self, nums: List[int]) -> int:
        # [-2,1,-3,4,-1,2,1,-5,4]
        # O(n) space and time
        # 1. starting at first element, that is the best I can do, so take it as the max value
        # 2. then look at the next element, should I continue adding or should I start a new subarray starting at the current element?
        # 3. keep doing that and add the max values to an array
        # 4. return the max value of that array

        subs = [nums[0]]
        i = 1

        while i < len(nums):
            subs.append(max(nums[i], nums[i] + subs[i-1]))
            #[-2, 1, -2, 4, 3, 5, 6]
            i += 1

        return max(subs)

    def maxSubArrayRec(self, nums: List[int]) -> int:
        # [-2,1,-3,4,-1,2,1,-5,4]
        # O(1) space and O(n) time
        # 1. starting at first element, that is the best I can do, so take it as the max value
        # 2. then look at the next element, should I continue adding or should I start a new subarray starting at the current element?
        # 3. keep doing that and add the max values to an array
        # 4. return the max value of that array

        temp = maxSum = nums[0]
        i = 1

        while i < len(nums):
            temp = max(nums[i], nums[i] + temp)
            if temp > maxSum:
                maxSum = temp
            #[-2, 1, -2, 4, 3, 5, 6]
            i += 1

        return maxSum
