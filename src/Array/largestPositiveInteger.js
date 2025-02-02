/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a, b) => a - b);

    let i = 0;
    let j = nums.length-1;

    while(i < j && -(nums[i]) !== nums[j]) {
        if(nums[j] > -(nums[i])) j--;
        else i++;
    }

    return -(nums[i]) === nums[j] ? nums[j] : -1
};

findMaxK([-1,10,6,7,-7,1])