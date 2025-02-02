function elementIndex(arr, start, end) {
  let pivot = start;
  let element = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (element > arr[i]) {
      pivot++;
      [arr[pivot], arr[i]] = [arr[i], arr[pivot]];
    }
  }
  [arr[pivot], arr[start]] = [arr[start], arr[pivot]]
  return pivot;
}

function quickSort(arr, start = 0, end = arr.length-1) {
  if (start < end) {
    let sortIndex = elementIndex(arr, start, end);
    quickSort(arr, start, sortIndex - 1);
    quickSort(arr, sortIndex + 1, end);
  }
  return arr;
}

console.log(
  quickSort([
    2, 54, 23, 43, 12, 54, 2345, 5432, 23456, 65432, 2345, 54, 32, 654,
  ])
);
