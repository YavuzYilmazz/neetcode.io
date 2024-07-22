class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let minLength = Infinity;
        let minSubstring = "";

        for (let i = 0; i < s.length; i++) {
            for (let j = i + 1; j <= s.length; j++) {
                let substring = s.substring(i, j);

                let needCount = {};
                for (let char of t) {
                    needCount[char] = (needCount[char] || 0) + 1;
                }

                let hasCount = {};
                for (let char of substring) {
                    hasCount[char] = (hasCount[char] || 0) + 1;
                }

                let allCharsPresent = true;
                for (let char of t) {
                    if (!hasCount[char] || hasCount[char] < needCount[char]) {
                        allCharsPresent = false;
                        break;
                    }
                }

                if (allCharsPresent) {
                    let currentLength = j - i;
                    if (currentLength < minLength) {
                        minLength = currentLength;
                        minSubstring = substring;
                    }
                }
            }
        }

        return minSubstring;
    }
}
// https://leetcode.com/problems/minimum-window-substring/
// https://neetcode.io/problems/minimum-window-with-characters