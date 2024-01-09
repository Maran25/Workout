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

var sortArrayByParityII = function(nums) {
    let i = 0;
    let j = nums.length - 1;

    while(i <= j) {
        while(i%2===0 && nums[i]%2===0 || i%2===1 && nums[i]%2===1) {
            i++;
        }
        while(j%2===0 && nums[j]%2===0 || j%2===1 && nums[j]%2===1) {
            j--;
        }
        if(i <= j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }
    return nums;
};

console.log(sortArrayByParityII([2,3,1,1,4,0,0,4,3,3]))
console.log(sortArrayByParity([3, 2, 1, 4]))
