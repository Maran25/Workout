/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let count = 0;
    let max = 0;

    for(let i=0; i<nums.length; i++) {
        if(max < nums[i] + i) {
            count++;
        }
        max = Math.max(max, nums[i] + i)
        if(max >= nums.length) return count;
    }

    return count;
};

jump([2,3,1,1,4])