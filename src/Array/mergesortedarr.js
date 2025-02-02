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

    while (i < m && j < n) {
        if (nums1[i] > nums2[j]) {
            [nums1[i], nums2[j]] = [nums2[j], nums1[i]];
        } 
        i++;
    }

    for (let z = m; z < nums1.length; z++) {
        nums1[z] = nums2[z - m]
    }
};

merge([4,5,6,0,0,0], 3, [1,2,3], 3)