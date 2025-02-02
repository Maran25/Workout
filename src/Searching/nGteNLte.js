/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
    nums = quickSort(nums);

    for(let i=1; i<=nums.length; i++) {
        let index = bs(nums, i)
        let remaining = nums.length - index
        if(i === remaining) return i;
    }
    return -1;
};

function bs(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(arr[mid] === target) {
            while(arr[mid] === arr[mid-1]) {
                mid--;
            }
            return mid+1;
        } else if(arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    while(arr[start] === arr[start-1]) {
        start--;
    }
    return start+1;
}

//[0, 0, 3, 4, 4]

function quickSort(nums) {
    if (nums.length <= 1) return nums;

    let lesser = [];
    let greater = [];
    let pivot = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (pivot > nums[i]) {
            lesser.push(nums[i])
        } else {
            greater.push(nums[i])
        }
    }
    return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

console.log(specialArray([3,9,7,8,3,8,6,6]))