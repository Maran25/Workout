/**
 * @param {number[]} nums
 * @return {number[]}
 */
function nextGreaterElements(nums) {
    const n = nums.length;
    const next = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n * 2; i++) {
        const num = nums[i % n];

        while (stack.length && nums[stack[stack.length - 1]] < num) {
            next[stack.pop()] = num;
        }

        if (i < n) {
            stack.push(i);
        }
    }

    return next;
}

console.log(nextGreaterElements([1, 2, 1]))