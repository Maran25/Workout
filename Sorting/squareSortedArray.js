/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let i = 0;
    let j = nums.length - 1;

    while(i < j) {
        let numi = Math.abs(nums[i]) 
        let numj = Math.abs(nums[j])

        if(numi < numj) {
            j--;
        } else if(numi > numj) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            if(nums[i] <= 0) {
                i++;
            }
            j--;
        } else {
            if(numi === 0 && numj === 0) {
                [nums[i+1], nums[j]] = [nums[j], nums[i+1]]
                i=i+2
                if(Math.abs(nums[j]) < Math.abs(nums[i])) {
                    j++;
                }
            } else {
                [nums[i], nums[j-1]] = [nums[j-1], nums[i]]
                j=j-2
                if(Math.abs(nums[j]) > Math.abs(nums[i])) {
                    i++;
                }
            }
        }
    }
    for(let i=0; i<nums.length; i++) {
        nums[i] = nums[i] * nums[i]
    }
    return nums;
};

console.log(sortedSquares([-10000,-9999,-7,-5,0,0,10000]))