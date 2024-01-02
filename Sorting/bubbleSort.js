const bubbleSort = (arr) => {
  let noSwap = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
};

const swap = (arr, a, b) => ([arr[a], arr[b]] = [arr[b], arr[a]]);

console.log(bubbleSort([3, 5, 2, 7, 1, 4, 9, 3, 38, 23, 2, 8]));
