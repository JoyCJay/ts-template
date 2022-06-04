/*
 * @lc app=leetcode.cn id=448 lang=typescript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
function findDisappearedNumbers(nums: number[]): number[] {
    const l = nums.length;
    const supMap = new Map();
    const res = [];

    nums.forEach((n, idx) => supMap.set(n, idx))

    for (let i = 1; i <= l; i++) {
        if (!supMap.has(i)) {
            res.push(i)
        }
    }

    return res;
};
// @lc code=end

