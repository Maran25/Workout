/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let i = 0;
    while(i < nums.length-1) {
        let correct = nums[i] - 1;
        if(nums[i] !== i+1 && nums[i] !== nums[correct]) {
            // [nums[i], nums[correct]] = [nums[correct], nums[i]];
            swap(nums, i, correct);
        } else {
            i++
        }
    }
    return nums[nums.length-1]
};

function swap(arr, first, second) {
    let temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp;
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = []
    let i = 0;

    while(i < nums.length) {
        let correct = nums[i] - 1;

        if(nums[i] !== correct && nums[i] !== nums[correct]) {
            [nums[i], nums[correct]] = [nums[correct], nums[i]]
        } else {
            i++
        }
    }

    for(let i=0; i<nums.length; i++) {
        if(nums[i] === i+1) result.push(nums[i])
    }

    return result;
};

findDuplicates([4,3,2,7,8,2,3,1])