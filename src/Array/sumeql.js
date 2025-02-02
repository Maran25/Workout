/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let j = 0;
  let i = 0;
  let total = 0;
  let sum = 0;

  while (j < nums.length) {
    if (sum === k) {
      total++;
      sum -= nums[i++];
    } else if (sum > k) {
      sum -= nums[i++];
    } else {
      sum += nums[j++];
    }
  }
  if (sum === k) total++;
  return total;
};

subarraySum([3,4,7,-2,2,1,4,2], 7);
