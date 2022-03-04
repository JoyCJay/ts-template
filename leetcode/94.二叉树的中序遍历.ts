/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/* *
 * Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
*/


function inorderTraversal(root: TreeNode | null): number[] {
    const result = [];

    const inorder = (node: TreeNode, cb: Function) => {
        if (!node) {
            return null;
        }

        inorder(node.left, cb);
        cb.call(this, node);
        inorder(node.right, cb);
    }

    inorder(root, (node: TreeNode) => {
        result.push(node.val);
    });
    
    return result;
};
// @lc code=end

