/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    mergeSort(nums, 0, nums.length);
    return nums.join('');
};

function mergeSort(nums, low, high) {
    if (high - low <= 1) return;
    let mid = Math.floor((low + high) / 2);
    mergeSort(nums, low, mid);
    mergeSort(nums, mid, high);
    merge(nums, low, mid, high);
}

function merge(nums, low, mid, high) {
    let start = low;
    let end = high;
    let k = 0;

    while (start < mid && end < high) {
        if (nums[start] + nums[end] > nums[end] + nums[start]) {
            nums[k++] = nums[start]
            start++;
        } else {
            nums[k++] = nums[end]
            end--
        }
    }

    while (start < mid) {
        nums[k++] = nums[start];
        start++;
    }
    while (end < high) {
        nums[k++] = nums[end];
        end--;
    }
}

console.log(largestNumber([3,30,34,5,9]));