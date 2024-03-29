var countSmaller = function(nums) {
    let sorted = [], result = [];
    for (let i=nums.length-1;i>=0;i--) {
        let left = 0, right = sorted.length;
        while(left < right) {
            let mid = left + Math.floor((right-left)/2);
            if (nums[i] > sorted[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        result.push(left);
        sorted.splice(left, 0, nums[i]);
    }
    return result.reverse();
};

console.log(countSmaller([5,2,6,1]))