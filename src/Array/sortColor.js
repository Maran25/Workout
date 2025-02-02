/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0;
    let mid = 0;

    for(let i=0; i<nums.length; i++) {
        if(nums[i] === 0) {
            swap(nums, low, i);
            low++;
            mid++;
        } else if(nums[i] === 1) {
            swap(nums, mid, i);
            mid++;
        }
    }
}

function swap(nums, a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
}

sortColors([2,0,2,1,1,0])