function lenOfLongSubarr(arr, n, k) {
  //code here
  let max = 0;
  let i = 0;
  let j = 0;
  let sum = 0;

  while (j < n) {
    sum += arr[j];

    while (sum > k) {
      let num = arr[i];
      if (num >= 0) sum -= num;
      else sum += -num;
      i++;
    }
    if (sum === k) max = Math.max(max, j - i + 1);
    j++;
  }
  return max;
}

lenOfLongSubarr(
  [-13, 0, 6, 15, 16, 2, 15, -12, 17, -16, 0, -3, 19, -3, 2, -9, -6],
  17,
  15
);
