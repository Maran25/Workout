function findPeak(nums) {
    let start = 0;
    let end = nums.length - 1;

    if(nums.length <= 1) return nums[0]
    if (nums[nums.length - 1] > nums[0]) return nums[0]

    while (start <= end) {
        let mid = Math.ceil((start + end) / 2);

        if (nums[start] === nums[mid]) {
            start = start + 1;
            continue;
        }
        if (nums[mid] === nums[end]) {
            end = end - 1;
            continue;
        }

        if(nums[mid+1] < nums[mid]) return nums[mid+1]
        if (nums[mid] < nums[mid - 1] && nums[0] > nums[mid]) {
            return nums[mid]
        } else if (nums[mid] > nums[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1
}

console.log(findPeak([3,3,3,1]))