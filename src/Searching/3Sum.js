/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let set = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let target = -(nums[i] + nums[j]);
      if (set.has(target)) {
        result.push([nums[i], nums[j], target]);
      }
      set.add(nums[j]);
    }
  }

  for (let i = 0; i < result.length; i++) {
    let sortedOne = result[i].sort();
    if (!obj[String(sortedOne)]) {
      obj[String(sortedOne)] = sortedOne;
    } else {
      continue;
    }
  }
  return Object.values(obj);
};

var threeSumV1 = function (nums) {
    nums = nums.sort();
    let result = [];

    for(let i=0; i<nums.length; i++) {
        let start = i+1;
        let end = nums.length - 1;

        while(start !== end) {
            let sum = nums[i] + nums[start] + nums[end];

            if(sum === 0) {
                result.push([nums[i], nums[start], nums[end]]);
                start++;
            } else if(sum > 0) {
                end--;
            } else {
                start++;
            }
        }
    }
    return result;
};

console.log(threeSumV1([-1, 0, 1, 2, -1, -4]));
