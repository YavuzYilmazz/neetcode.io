class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let result=[];
        let finalResult=[];
        let check=[];
        let flag=true;
        for(let i=0;i<strs.length;i++)
        {
            for(let j=0; j<strs.length;j++)
            {
                if(check.includes(i)){
                    flag=false;
                    break;
                }
                if(i!==j && this.isAnagram(strs[i],strs[j]))
                {
                    result.push(strs[j]);
                    check.push(j);
                }
            }
            result.push(strs[i]);
            if(!finalResult.includes(result)&&flag)
            {
                finalResult.push(result);
            }
            result=[];
            flag=true;
        }

        return finalResult;
    }

    isAnagram(t,s)
    {
        for(let i=0; i<s.length;i++)
        {
            if(t.includes(s[i]))
            {
                t=t.replace(s[i],"")
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
// https://leetcode.com/problems/group-anagrams/
// https://neetcode.io/problems/anagram-groups