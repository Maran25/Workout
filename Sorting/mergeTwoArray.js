/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < m && j < n) {
    if(nums1[i] === nums2[j]) {
        [nums1[m], nums1[i]] = [nums1[i], nums1[m]];
        nums1[k] = nums1[i];
        i++;
        k++
    } else if (nums1[i] < nums2[j]) {
      nums1[k] = nums1[i];
      i++;
      k++;
    } else {
      nums1[k] = nums2[j];
      k++;
      j++;
    }
  }
  while (j < n) {
    nums1[k] = nums2[j];
    j++;
    k++;
  }
  console.log(nums1);
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
