/**
 * @param {number[]} nums
 * @return {number[]}
 */
//even first and odd last
var sortArrayByParity = function(nums) {
    let i = 0;
    let j = nums.length - 1;

    while(i <= j) {
        while(nums[i]%2===0) {
            i++;
        }
        while(nums[j]%2===1) {
            j--;
        }
        if(i<=j) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
            j--
        }
    }
    return nums
};

console.log(sortArrayByParity([3, 2, 1, 4]))