/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
// var longestSubarray = function(nums, limit) {
//     let ans = 0;

//     for(let i=0; i<nums.length; i++) {
//         let count = 0;
//         let max = nums[i]
//         let min = nums[i]
//         for(let j=i; j<nums.length; j++) {
//             if(Math.abs(nums[i] - nums[j]) <= limit && Math.abs(max - nums[j]) <= limit && Math.abs(min - nums[j]) <= limit) {
//                 count++;
//                 ans = Math.max(ans, count)
//                 max = Math.max(max, nums[j])
//                 min = Math.min(min, nums[j])
//             } else break;
//         }
//     }

//     return ans;
// };
/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function (nums, limit) {
    let ans = 0, l = 0, r = 0, min = nums[0], max = nums[0], count = 0;

    while (r < nums.length) {
        if (Math.abs(max - nums[r]) <= limit && Math.abs(min - nums[r]) <= limit) {
            count++;
            ans = Math.max(ans, count)
            max = Math.max(max, nums[r])
            min = Math.min(min, nums[r])
            r++;
        } else {
            max = 0;
            min = Infinity;
            while (Math.abs(nums[r] - nums[l]) > limit || Math.abs(max - min) > limit) {
                count--;
                l++;
                ans = Math.max(ans, count)
                max = Math.max(max, nums[l])
                min = Math.min(min, nums[l])
            }
        }
    }
    return ans;
};

longestSubarray([8,2,4,7], 4)