class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let maxLen = 0;
        let maxCount = 0;
        let left = 0;

        for (let right = 0; right < s.length; right++) {
            const char = s[right];
            count[char] = (count[char] || 0) + 1;
            maxCount = Math.max(maxCount, count[char]);

            while (right - left + 1 - maxCount > k) {
                count[s[left]] -= 1;
                left += 1;
            }

            maxLen = Math.max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
// https://leetcode.com/problems/longest-repeating-character-replacement/
// https://neetcode.io/problems/longest-repeating-substring-with-replacement