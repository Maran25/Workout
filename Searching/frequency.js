// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var maxFrequency = function(nums, k) {
//     let max = findMax(nums);
//     let arr = nums.slice(nums.indexOf(max), 1)
//     let count = 1;

//     for(let i=0; i<arr.length; i++) {
//         if(max - arr[i] <= k) {
//             count++;
//             k = max - arr[i];
//         }
//     }
//     return count;
// };

// function findMax(nums) {
//     let max = -Infinity;
//     for(let num of nums) {
//         max = Math.max(max, num)
//     }
//     return max;
// }

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
    let maxCount = 1;

    for (let i = 0; i < nums.length; i++) {
        let count = 1;
        for (let j = 0; j < nums.length; j++) {
            let sub = Math.abs(nums[i] - nums[j])
            if (sub <= k) {
                count++;
                k -= sub;
            }
        }
        maxCount = Math.max(count, maxCount)
    }
    return maxCount;
};

// console.log(maxFrequency([1,2,4], 5))

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function(nums) {
    let result = [];
    const length = nums.length;

    for(let i=0; i<length; i++) {
        nums[i] = {val: nums[i], position: i}
    }
    nums = quickSort(nums);

    for(let i=0; i<length; i++) {
        let index = nums[i].position;
        result[index] = length - 1 - index
    }
    return nums;
};

function quickSort(nums) {
    if(nums.length <= 1) return nums

    let pivot = nums[0];
    let lesser = [];
    let greater = [];

    for(let i=1; i<nums.length; i++) {
        if(nums[i].val > pivot.val) {
            greater.push(nums[i])
        } else {
            lesser.push(nums[i])
        }
    }
    return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

console.log(countSmaller([5,2,6,1]));