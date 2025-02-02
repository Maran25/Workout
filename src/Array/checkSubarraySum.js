/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let set = new Set();
    let prev = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++) {
        sum += nums[i];
        sum %= k;
        if(set.has(sum)) return true
        set.add(prev);
        prev = sum;
    }

    return false;
};

checkSubarraySum([23,2,6,4,7], 6)