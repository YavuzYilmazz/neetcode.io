class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let result = [];
        let seen = new Set();

        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                for (let k = 0; k < nums.length; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0 && i !== j && i !== k && j !== k) {
                        let triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b).toString();
                        if (!seen.has(triplet)) {
                            seen.add(triplet);
                            result.push([nums[i], nums[j], nums[k]]);
                        }
                    }
                }
            }
        }

        return result;
    }
}
// https://leetcode.com/problems/3sum/
// https://neetcode.io/problems/three-integer-sum