/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // BigInt Problem
    function solution1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        function listNode2Array(l:ListNode){
            const arr = [l.val];
            while (l.next !== null) {
                l = l.next;
                arr.unshift(l.val);
            }
    
            const numberStr = arr.join('');
            return BigInt(numberStr);
        }
    
        const v1 = listNode2Array(l1);
        const v2 = listNode2Array(l2);
    
        const resultArr = (v1 + v2).toString().split('').map(s => parseInt(s));
    
        const head = new ListNode();
        let tail = head;
    
        while (resultArr.length) {
            let iterNode = new ListNode(resultArr.pop());
            tail.next = iterNode
            tail = iterNode;
        }
        return head.next;
    }

    // 两个链表反转，从头加到尾，最后和链表遍历上10，自身值取个位，next值 + 1
    function solution2(l1: ListNode | null, l2: ListNode | null): ListNode | null {
        let tmp1 = l1;
        let tmp2 = l2;
        
        let newHead, currentNode;
        newHead = new ListNode(tmp1.val + tmp2.val);
        currentNode = newHead;
        
        while (tmp1?.next || tmp2?.next) {
            const tmp1NextVal = (tmp1 && tmp1.next)? tmp1.next.val : 0;
            const tmp2NextVal = (tmp2 && tmp2.next)? tmp2.next.val : 0;
            currentNode.next = new ListNode(tmp1NextVal + tmp2NextVal);
            currentNode = currentNode.next;
        
            tmp1 = (tmp1)? tmp1.next : null;
            tmp2 = (tmp2)? tmp2.next : null;
        }
        
        currentNode = newHead;
        while (currentNode.next) {
            currentNode.next.val += Math.floor(currentNode.val / 10);
            currentNode.val = currentNode.val % 10
            currentNode = currentNode.next;
        }

        if (currentNode.val >= 10) {
            currentNode.next = new ListNode(1)
            currentNode.val = currentNode.val % 10;
        }

        return newHead;
    }

    return solution2(l1, l2);
};
// @lc code=end
