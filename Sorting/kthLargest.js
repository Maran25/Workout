/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    
    let count = Array(max - min + 1).fill(0);

    for (let num of nums) {
        count[num - min]++;
    }

    let index = 0;
    for (let i = count.length - 1; i >= 0; i--) {
        index += count[i];
        if (index >= k) {
            return i + min;
        }
    }

    return -1;
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([-3,-2,-3,-1,-2,-4,-5,-5,-6], 4))