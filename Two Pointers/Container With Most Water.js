class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maximum=0;
        for(let i=0;i<heights.length;i++){
            for(let j=0;j<heights.length;j++){
                if(Math.abs(i-j)*Math.min(heights[i],heights[j])>maximum)
                {
                    maximum=Math.abs(i-j)*Math.min(heights[i],heights[j]);
                }
            }
        }

        return maximum;
    }
}
// https://leetcode.com/problems/container-with-most-water/
// https://neetcode.io/problems/max-water-container