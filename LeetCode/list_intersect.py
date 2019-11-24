# Given two arrays, write a function to compute their intersection.

# Example 1:

# Input: nums1 = [1,2,2,1], nums2 = [2,2]
# Output: [2,2]
# Example 2:

# Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
# Output: [4,9]


class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        #iteratively and sort
        if not nums1 or not nums2:
            return []

        nums1.sort()
        nums2.sort()

        if len(nums1) < len(nums2):
            nums1, nums2 = nums2, nums1

        i = 0
        j = 0
        res = []

        while i < len(nums1) and j < len(nums2):
            if nums1[i] == nums2[j]:
                res.append(nums1[i])
                i += 1
                j += 1
            elif nums1[i] < nums2[j]:
                i += 1
            else:
                j += 1

        return res

#         inc = {}
#         res = []
#         for n in nums1:
#             if n not in inc:
#                 inc[n] = 0
#             inc[n] += 1

#         for n in nums2:
#             if n in inc and inc[n] > 0:
#                 res.append(n)
#                 inc[n] -= 1

#         return res
