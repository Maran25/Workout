/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedOne = mergeSortedArrays(nums1, nums2);
    const length = mergedOne.length;

    if(length % 2 !== 0) {
        return mergedOne[Math.floor(length/2)];
    } else {
        const index = Math.floor(length/2)
        return (mergedOne[index] + mergedOne[index+1])/2
    }
};

function mergeSortedArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

console.log(findMedianSortedArrays([1, 2], [3, 4]))