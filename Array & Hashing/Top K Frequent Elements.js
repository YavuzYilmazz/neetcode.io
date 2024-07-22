class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequencyMap = new Map();
    
        nums.forEach(num => {
            frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
        });
    
        const sortedElements = Array.from(frequencyMap.entries()).sort((a, b) => b[1] - a[1]);
    
        return sortedElements.slice(0, k).map(entry => entry[0]);
    }
}
// https://leetcode.com/problems/top-k-frequent-elements/
// https://neetcode.io/problems/top-k-elements-in-list