var splitArray = function(nums, k) {
    const sortedArr = quickSort(nums);
    const splitedArr = sortedArr.slice(-k)
    return splitedArr.reduce((acc, cur) => acc+cur, 0)
};

function quickSort(nums) {
    if(nums.length <= 1) return nums;

    let lesser = [];
    let greater = [];
    let pivot = nums[0];

    for(let i=1; i<nums.length; i++) {
        if(nums[i] > pivot) {
            greater.push(nums[i])
        } else {
            lesser.push(nums[i])
        }
    }
    return [...quickSort(lesser), pivot, ...quickSort(greater)]
}

console.log(splitArray([1,4,4], 3))