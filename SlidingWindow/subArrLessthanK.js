/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    let count = 0;
    let result = 1;

    for (let i = 0; i <= nums.length; i++) {
        let end = i
        while(result*nums[end] < k) {
            result *= nums[end]
            end++
            count++
        }
        result=1
    }
    return count;
};

numSubarrayProductLessThanK([10, 5, 2, 6], 100)
//[10], [10, 5]