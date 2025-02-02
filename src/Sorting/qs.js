/**
 * @param {number[]} nums
 */

function quickSort(nums) {
  if (nums.length <= 1) return nums;
  let pivot = nums[0];
  let left = [];
  let right = [];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

function sort(nums, low, high) {
  if (low >= high) return;

  let start = low;
  let end = high;
  let mid = Math.floor((start + end) / 2);
  let pivot = nums[mid];

  while (start <= end) {
    while (nums[start] < pivot) start++;
    while (nums[end] > pivot) end--;

    if (start <= end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }
  sort(nums, low, end);
  sort(nums, start, high);
}

let arr = [4, 3, 5, 3, 7, 2, 1]
sort(arr, 0, arr.length-1)
console.log(arr);
