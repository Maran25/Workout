function specialArray(nums) {
    const maxNum = Math.max(...nums);
    const count = Array(maxNum + 1).fill(0);

    for (const num of nums) {
        count[num]++;
    }

    let total = 0;
    for (let x = maxNum; x > 0; x--) {
        total += count[x];
        if (total === x) {
            return x;
        }
    }

    return -1;
}

console.log(specialArray([3,9,7,8,3,8,6,6]))