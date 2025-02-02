function binarySubarray(arr, goal) {
  let count = 0;
  let l = 0;
  let r = 0;
  let ones = 0;
  let last = -1;
  let start = -1;

  while (r < arr.length) {
    ones += arr[r];

    if (ones > goal) {
      if (arr[l]) {
        last = start;
        start = l;
        ones -= arr[l++];
      }
    }
    if (ones === goal) {
      count += 1 + (start - last);
    }
    r++;
  }
  return count;
}

console.log(binarySubarray([1, 0, 1, 0, 1], 2));
