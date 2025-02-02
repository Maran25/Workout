/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function (nums) {
    return helper(nums, 0, 0, nums.length, true);
};

function helper(nums, p1, p2, n, isplayerone) {
    if (n === 0) {
        if (p1 >= p2) return true;
        return false;
    }

    let one = false;
    let two = false;
    let three = false;
    let four = false;
    let five = false;
    let six = false;

    if (isplayerone) {
        if (n > 2) {
            if (nums[n - 2] > nums[n - 1] && nums[n - 2] > nums[1] && nums[n - 2] > nums[0]) {
                p1 += nums[0]
                one = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
            } else if (nums[1] > nums[n - 1] && nums[1] > nums[n - 2] && nums[1] > nums[0]) {
                p1 += nums[n - 1]
                two = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
            } else if (nums[0] > nums[n-1]) {
                p1 += nums[0]
                three = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
            } else {
                p1 += nums[n - 1]
                four = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
            }
        } else if (nums[0] > nums[n-1]) {
            p1 += nums[0]
            five = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
        } else {
            p1 += nums[n - 1]
            six = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
        }
    } else {
        if (n > 2) {
            if (nums[n - 2] > nums[n - 1] && nums[n - 2] > nums[1] && nums[n - 2] > nums[0]) {
                p2 += nums[0]
                one = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
            } else if (nums[1] > nums[n - 1] && nums[1] > nums[n - 2] && nums[1] > nums[0]) {
                p2 += nums[n - 1]
                two = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
            } else if (nums[0] > nums[n-1]) {
                p2 += nums[0]
                three = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
            } else {
                p2 += nums[n - 1]
                four = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
            }
        } else if (nums[0] > nums[n-1]) {
            p2 += nums[0]
            five = helper(nums.slice(1), p1, p2, n - 1, !isplayerone)
        } else {
            p2 += nums[n - 1]
            six = helper(nums.slice(0, -1), p1, p2, n - 1, !isplayerone)
        }
    }

    return one || two || three || four || five || six
}

console.log(predictTheWinner([1000,999,999,1000,555,400]))