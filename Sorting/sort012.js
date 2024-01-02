var sortColors = function(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length-1;

    while(mid <= high) {
        if(nums[mid] === 0) {
            swap(nums, mid, low);
            low++;
            mid++;
        } else if(nums[mid] === 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
};

function swap(nums, first, second) {
    [nums[first], nums[second]] = [nums[second], nums[first]];
}

console.log(sortColors([2, 0, 1]))