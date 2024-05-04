/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  helper(candidates, 0, target, [], result);
  return result;
};

function helper(candidates, i, sum, target, temp, result) {
  if (i === candidates.length) {
    if (sum === target) {
      result.push(temp.slice());
    }
    return;
  }

  if (candidates[i] <= target) {
    temp.push(candidates[i]);
    helper(candidates, i, target - candidates[i], temp, result);
    temp.pop();
  }
  helper(candidates, i + 1, target, temp, result);
}

combinationSum([2, 3, 6, 7], 7);
