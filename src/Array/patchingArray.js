/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let max = 1;
    let patches = 0;
    let i = 0;

    while (max <= n) {
        if (i < nums.length && nums[i] <= max) {
            max += nums[i++];
        } else {
            patches++;
            max += max;
        }
    }
    return patches
};

minPatches([1,5,10], 20)