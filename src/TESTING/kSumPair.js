// var maxOperations = function(nums, k) {
//     let count = 0;
//     let length = nums.length;
//     for(let i=0; i<length; i++) {
//         for(let j=i+1; j<length; j++) {
//             if(nums[i] + nums[j] === k) {
//                 nums.splice(j, 1)
//                 nums.splice(i, 1)
//                 count++;
//                 length = length - 2
//                 i--;
//             }
//         }
//     }
//     return count;
// };

var maxOperations = function (nums, k) {
    let count = 0;
    let start = 0;
    let end = nums.length-1;
    while (start < end) {
        let sum = nums[start] + nums[end]
        if (sum === k) {
            nums.splice(start, 1)
            nums.splice(-1)
            count++;
            end = end - 2
        } else if(sum < 0) {
            start++;
        } else {
            end--
        }
    }
    return count;
};

console.log(maxOperations([1,2,3,4], 5))



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  
            let inMax = {num: Number.MIN_SAFE_INTEGER, index: 0};
            let start = i;
            let end = k;
            while(start < end) {
            if(nums[start] > inMax.num) inMax.num = nums[start];
            if(nums[end] > inMax.num) inMax.num = nums[end];
            start++
            end--
            } 
            max = inMax.num
            index = inMax.index

};