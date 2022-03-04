/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(h: ListNode | null): ListNode | null {
    // 调试很容易出错还是背板子吧
    function solution1(head: ListNode | null): ListNode | null {
        let prev = null;
        let current = head;
        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }

    // Recursive
    function solution2(head: ListNode | null): ListNode | null {
        
        return solution2(head.next);
    }

    return solution2(h);
};
// @lc code=end

