var smallestDivisor = function(nums, threshold) {
    let { start, end } = findMinAndMax(nums)
    if(threshold > end) return 1;

    while(start<=end) {
        let mid = Math.floor((start+end)/2);

        if(isPossible(nums, mid, threshold)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

function isPossible(nums, divisor, threshold) {
    let sum = 0;

    for(let num of nums) {
        sum += Math.ceil(num/divisor);
    }
    return sum <= threshold;
}

function findMinAndMax(nums) {
    let min = Infinity;
    let max = -Infinity;

    for(let num of nums) {
        min = Math.min(min, num)
        max = Math.max(max, num)
    }
    return { start: 1, end: max }
}

console.log(smallestDivisor([91,41,78,86,8], 114));