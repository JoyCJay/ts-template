/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
    if (s === "") {
        return true
    }

    const operatorMap = new Map([
        [']', '['],
        [')', '('],
        ['}', '{'],
    ])

    const supStack = [];

    for (const char of s) {
        if (!operatorMap.has(char)) {
            supStack.push(char);
        } else {
            const openOperator = operatorMap.get(char);
            // console.log(char, openOperator);
            if (openOperator !== supStack[supStack.length - 1]) {
                return false
            } else {
                supStack.pop();
            }
        }
    }

    return supStack.length === 0;
};
// @lc code=end

