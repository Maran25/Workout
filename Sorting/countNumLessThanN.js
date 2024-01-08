var smallerNumbersThanCurrent = function (nums) {
    let max = nums.reduce((acc, cur) => acc > cur ? acc : cur, 0)
    let count = Array(max+1).fill(0);

    for(let i=0; i<nums.length; i++) {
        count[nums[i]]++
    }

    for(let i=1; i<count.length; i++) {
        count[i] += count[i - 1]
    }

    for(let i=0; i<nums.length; i++) {
        nums[i] = count[nums[i] - 1]
    }

    return nums;
};

console.log(smallerNumbersThanCurrent([5,0,10,0,10,6]))