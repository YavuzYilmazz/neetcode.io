class Solution {
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (const n of numSet) {
            if (!numSet.has(n - 1)) {
                let length = 1;
                while (numSet.has(n + length)) {
                    length++;
                }
                longest = Math.max(length, longest);
            }
        }
        return longest;
    }
}
// https://leetcode.com/problems/longest-consecutive-sequence/
// https://neetcode.io/problems/longest-consecutive-sequence