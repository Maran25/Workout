function bubbleSort(arr) {
  let isSwap = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        isSwap = false;
      }
    }
    if (isSwap) break;
  }
  return arr;
}


function selectionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        let smaller = i;
        for(let j=i; j<arr.length; j++) {
            if(arr[j] < arr[smaller]) smaller = j
        }
        [arr[smaller], arr[i]] = [arr[i], arr[smaller]];
    }
    return arr;
}


console.log(
    selectionSort([
    2, 54, 23, 43, 12, 54, 2345, 5432, 23456, 65432, 2345, 54, 32, 654,
  ])
);
