class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        for(let i=0; i<s.length;i++)
        {
            if(t.includes(s[i]))
            {
                t=t.replace(s[i],"")
                console.log(t);
            }
            else
            {
                return false;
            }
        }

        if(t==="")
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
// https://leetcode.com/problems/valid-anagram/
// https://neetcode.io/problems/is-anagram