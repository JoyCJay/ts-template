// Longest Increasing Subsequence
// const nums = [10,9,2,5,3,7,101,18] // answer [2,3,7,18]
const nums = [1,3,6,7,9,4,10,5,6];

console.time('solution 1.1 : DP')
let dp = new Array<number>(nums.length).fill(1)
for (let index = 1; index < nums.length; index++) {
    for(let idx = 0; idx < index; idx ++) {
        if (nums[index] > nums[idx]) {
            dp[index] = Math.max(dp[idx] + 1, dp[index])
        }
    }
}
console.log(Math.max(...dp));
console.timeEnd('solution 1.1 : DP')

console.time('solution 1.2 : DP')
let dp2 = nums.map(e => [e]);
for (let index = 1; index < nums.length; index++) {
    for(let idx = 0; idx < index; idx ++) {
        if (nums[index] > nums[idx]) {

            if (dp2[idx].length + 1 > dp2[index].length) {
                dp2[index].push(nums[idx])
            }
        }
    }
}
console.log(dp2);
console.timeEnd('solution 1.2 : DP')

console.time('solution 2 : closest')
function closestNumber(idx:number): {minValue: number, minIdx: number} {
    let mindiff = Infinity, minIdx = null, minValue = null;
    const base = nums[idx];
    const arr = nums.slice(idx + 1)
    
    if (arr.length > 0) {
        arr.forEach((e, i) => {
            if (e - base > 0 && e -base < mindiff ) {
                minIdx = i
                mindiff = e - base
            }
        })
        
        if (minIdx !== null) {
            minIdx = minIdx + idx + 1
            minValue = nums[minIdx]
        }
        
    } else {
        minIdx = null
        minValue = null
    }
    return { minIdx, minValue };
}

function find_LIS_for_element(idx:number, LIS: number[]) {

    const next = closestNumber(idx)
    if (next.minValue !== null) {
        LIS.push(next.minValue)
    }
    // console.log(next.minIdx, LIS);
    if (next.minIdx !== null) {
        find_LIS_for_element(next.minIdx, LIS);
    }
    return LIS;
}

const result = nums.map((e, i) => {
    return find_LIS_for_element(i, [nums[i]])
})

console.log(result);


console.timeEnd('solution 2 : closest')
