function minimumPlatform(arr, dep, n) {
  let count = 0;
  let maxCount = 0;
  arr.sort((a, b) => a - b);
  dep.sort((a, b) => a - b);

  let i = 0;
  let j = 0;

  while (i < n && j < n) {
    if (arr[i] > dep[j]) {
      count--;
      j++;
    } else {
      count++;
      i++;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}

minimumPlatform(
  [900, 940, 950, 1100, 1500, 1800],
  [910, 1200, 1120, 1130, 1900, 2000],
  6
);
