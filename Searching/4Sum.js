/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let result = [];
    nums = nums.sort((a, b) => a - b)

    for(let i=0; i<nums.length; i++) {
        // if(i > 0 && nums[i] === nums[i-1]) continue;
        for(let j=i+1; j<nums.length; j++) {
            if(nums[j] === nums[j-1]) continue;
            let start = j;
            let end = nums.length - 1;

            while(start < end) {
                let sum = nums[i] + nums[j] + nums[start] + nums[end];

                if(sum > target) {
                    end--;
                } else if(sum < target) {
                    start++;
                } else {
                    result.push([nums[i], nums[j], nums[start], nums[end]])
                    start++;
                    end--;

                    while(start < end && nums[start] === nums[start+1]) start++;
                    while(start < end && nums[end] === nums[end-1]) end--;
                }
            }
        }
    }
    return result;
};

console.log(fourSum([2,2,2,2,2], 8))