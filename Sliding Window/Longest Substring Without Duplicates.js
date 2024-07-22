class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLength = 0;
        let left = 0;
        let charSet = new Set();
        
        for (let right = 0; right < s.length; right++) {
            while (charSet.has(s[right])) {
                charSet.delete(s[left]);
                left++;
            }
            charSet.add(s[right]);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// https://neetcode.io/problems/longest-substring-without-duplicates