/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        var [prev, curr, next] = [null, head, null];
        while (curr) {
            next = curr.next;
            curr.next = prev;
            
            prev = curr;
            curr = next;
        }

        return prev;
    }
}
// https://leetcode.com/problems/reverse-linked-list/
// https://neetcode.io/problems/reverse-a-linked-list