/*
 * @lc app=leetcode.cn id=390 lang=typescript
 *
 * [390] 消除游戏
 */

// @lc code=start
function lastRemaining(n: number): number {
    let a1 = 1;
    let k = 0, cnt = n, step = 1;
    while (cnt > 1) {
        if (k % 2 === 0) { // 正向
            a1 = a1 + step;
        } else { // 反向
            a1 = (cnt % 2 === 0) ? a1 : a1 + step;
        }
        k++;
        cnt = cnt >> 1;
        step = step << 1;
    }
    return a1;
};
// @lc code=end

