/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

    if (p === null && q === null) {
        return true;
    }

    if (!p && q) {
        return false
    }

    const bfs = (a: TreeNode | null): TreeNode[] => {
        const bfsNodes: TreeNode[] = []; // result queue
        const supArr = [a]; // support queue

        while(supArr.length > 0) {
            const removedFirstNode = supArr.shift();
            bfsNodes.push(removedFirstNode);
            if (removedFirstNode) {
                supArr.push(removedFirstNode.left, removedFirstNode.right);
            }
        }

        return bfsNodes;
    };

    const pValues = bfs(p).map((n: TreeNode) => n?.val);
    const qValues = bfs(q).map((n: TreeNode) => n?.val);

    if (pValues.length !== qValues.length) {
        return false;
    }

    for (let index = 0; index < qValues.length; index++) {
        if (qValues[index] !== pValues[index]) {
            return false;
        }
    }
    return true;
};
// @lc code=end
