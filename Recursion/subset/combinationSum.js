/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    let result = [];
    helper(candidates, 0, target, [], result)
    return result;
};

const helper = (arr, i, target, temp, result) => {
    if (i === arr.length) {
        if (target === 0) {
            result.push(temp);
        }
        return;
    }

    if (arr[i] <= target) {
        temp.push(arr[i]);
        helper(arr, i, target - arr[i], temp, result);
        temp.pop();
    }
    helper(arr, i + 1, target, temp, result);
}

console.log(combinationSum([2, 3, 6, 7],7))