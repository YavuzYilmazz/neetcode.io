class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums)
        {
            return false;
        }

        for(let i=0; i<nums.length;i++)
        {
            for(let j=0; j<nums.length;j++)
            {
                if(i!==j&&nums[i]===nums[j])
                {
                    return true;
                }
            }
        }

        return false;
    }
}
// https://leetcode.com/problems/contains-duplicate/description/
// https://neetcode.io/problems/duplicate-integer