# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
  sub = [nums[0]];

  for i in 1...nums.count do
      sub << ((nums[i] + sub[i-1]) > nums[i] ? nums[i] + sub[i-1] : nums[i])
  end
  
  sub.max
          
end