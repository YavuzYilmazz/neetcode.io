class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s=s.replace(/[^0-9a-z]/gi, '').toLowerCase();

        for(let i=0;i<s.length/2;i++)
        {
            if(s[i]!==s[s.length-i-1])
            {
                return false;
            }
        }

        return true;
    }
}
// https://leetcode.com/problems/valid-palindrome/
// https://neetcode.io/problems/is-palindrome