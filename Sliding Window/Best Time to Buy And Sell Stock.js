class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */
    maxProfit(prices) {
        const myArray = Array.from(prices);

        let maximum=0;
        for(let i=myArray.length-1;i>=0;i--)
        {
            for(let j=myArray.length-1;j>=0;j--)
            {
                if(i>j && myArray[i]-myArray[j]>maximum)
                {
                    maximum=myArray[i]-myArray[j];
                }
            }
        }

        return maximum;

    }
}
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// https://neetcode.io/problems/buy-and-sell-crypto