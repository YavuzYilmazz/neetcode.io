class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
      let low = 0;
      let high = nums.length - 1;
  
      while (low < high) {
        let mid = Math.floor((low + high) / 2);
  
        if (nums[mid] > nums[high]) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
  
      return nums[low];
    }
  }
  // https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
  // https://neetcode.io/problems/find-minimum-in-rotated-sorted-array
  