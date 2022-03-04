/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const result = [];
    const supMap = {};
    for (let idx = 0; idx < nums.length; idx++) {
        const num = nums[idx];
        
        if (num === target / 2 && supMap[num] !== undefined) {
            return [supMap[num], idx];
        }
    
        supMap[num] = idx;
    
        if (num !== target - num && supMap[target - num] !== undefined) {
            return [supMap[target - num], supMap[num]];
        }
    }
};
// @lc code=end

