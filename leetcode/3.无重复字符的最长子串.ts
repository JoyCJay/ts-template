/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
function lengthOfLongestSubstring(inputStr: string): number {
    function longestSub(str: string) {
        const supMap = new Set();
        let res = '';
        for (const c of str) {
            if (supMap.has(c)) {
                break
            }
            res += c
            supMap.add(c);
        }
        return res;
    }
    const arr = inputStr.split('').map((char, idx) => {
        const subStr = inputStr.substring(idx);
        return {
            char,
            subStr,
            longestSub: longestSub(subStr)
        }
    });

    // console.log(arr);
    return arr.reduce((acc, e) => Math.max(acc, e.longestSub.length), 0);
};
// @lc code=end

console.log(
    lengthOfLongestSubstring("abcabcbb")
);
