/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let max = Math.max(...nums);
    let count = Array(max + 1).fill(0);

    for(let num of nums) {
        count[num]++
    }

    let index = 1;
    for(let i=count.length-1; i>0; i--) {
        if(k === index) return i;
        if(count[i]) index++
    }

    return -1;
};

console.log(findKthLargest([3,2,1,5,6,4], 2))
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4))