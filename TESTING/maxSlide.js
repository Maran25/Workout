var maxSlidingWindow = function (nums, k) {
    if (k === 1) return nums

    let result = [];
    let firstElement = Math.max(...nums.slice(0, k));
    result.push(firstElement);
    let max = firstElement;
    let index = nums.slice(0, k).indexOf(firstElement);

    for (let i = 1; i < nums.length; i++) {
        if (i + k - 1 === nums.length) break;

        if (index >= i - k && nums[i + k - 1] > max) {
        console.log("ABOVE**", index, i-k)
            max = nums[i + k - 1]
            index = i + k - 1
        } else if(index <= i-k+1) {
            console.log("ELSE IF", index, i-k)
            const { num, index: maxIndex } = findMaxTwoPointer(nums, i + k, i);
            max = num
            index = maxIndex
        }
            console.log("OUT", index, i-k)
        result.push(max)
    }
    return result;
};

const findMaxTwoPointer = (nums, k, i) => {
    let inMax = { num: Number.MIN_SAFE_INTEGER, index: 0 };
    let start = i;
    let end = k;
    while (start <= end) {
        if (nums[start] > inMax.num) {
            inMax.num = nums[start];
            inMax.index = start
        }
        if (nums[end] > inMax.num) {
            inMax.num = nums[end];
            inMax.index = end
        }
        start++
        end--
    }
    return inMax
}

console.log(maxSlidingWindow([7, 2, 4], 2))