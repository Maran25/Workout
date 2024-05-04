/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let x = 0;
    for(let num of nums) x^=num;
    x ^= k;
    let count = 0;
    while(x > 0) {
        count += (x % 2);
        x>>=1;
    }
    return count;
};

minOperations([2,1,3,4], 1)