/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let list = [];
  helper(nums, 0, target, list);
  return list.length;
};

function helper(nums, i, target, list) {
  if (i === nums.length) {
      let totSum = findSum(nums);
      if (totSum === target) list.push(nums.slice())
      return;
  }

  nums[i] = -nums[i];
  helper(nums, i + 1, target, list);
  nums[i] = -nums[i];

  helper(nums, i + 1, target, list);
}

function findSum(nums) {
  return nums.reduce((acc, cur) => acc + cur, 0);
}

findTargetSumWays([1, 2, 3, 1], 3);
