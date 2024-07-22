class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let multiply=1;
        let result=[];
        for(let i=0;i<nums.length;i++){
            for(let j=0;j<nums.length;j++){
                if(i!==j)
                {
                    multiply=multiply*nums[j];
                }
            }

            result.push(multiply);
            multiply=1;
        }

        return result;
    }
}
// https://leetcode.com/problems/product-of-array-except-self/
// https://neetcode.io/problems/products-of-array-discluding-self