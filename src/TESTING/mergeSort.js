function mergeTwoSortedArray(a1, a2) {
  let idx1 = 0;
  let idx2 = 0;
  let arr = [];

  while (a1.length > idx1 && a2.length > idx2) {
    if (a1[idx1] > a2[idx2]) {
      arr.push(a2[idx2]);
      idx2++;
    } else {
      arr.push(a1[idx1]);
      idx1++;
    }
  }
  while (a1.length > idx1) {
    arr.push(a1[idx1]);
    idx1++;
  }
  while (a2.length > idx2) {
    arr.push(a2[idx2]);
    idx2++;
  }
  return arr;
}

console.log(mergeTwoSortedArray([2, 4, 8, 28, 49, 50], [3, 5, 6, 8, 10, 80]));
