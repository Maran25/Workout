/**
 * @param {number[]} nums
 * @return {number}
 */
const specialArray = (nums) => {
    nums.sort((a,b) => a - b);
    for(let i=0; i<nums.length; i++) {
        let rem = nums.length - i
        if(nums[i] >= rem) return rem;
    }
    return -1
};

specialArray([3,6,7,7,0])