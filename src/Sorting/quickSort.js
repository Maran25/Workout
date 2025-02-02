const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
function pivot(arr, start, end) {
  let pivotIndex = start;
  let element = arr[start];
  for (let i = start+1; i <= end; i++) {
    if (element > arr[i]) {
      swap(arr, pivotIndex, i);
      pivotIndex++;
    }

  }
  return pivotIndex;
}

function quickSort(arr, start=0, end=arr.length) {
    if(start < end) {
        let sortedIndex = pivot(arr, start, end);
        quickSort(arr, start, sortedIndex-1);
        quickSort(arr, sortedIndex+1, end);
    }
    return arr;
}

// function sort(arr, low, high) {
//   if(low >= high) return;

//   let start = low;
//   let end = high;
//   let mid = Math.floor((start+end)/2);
//   let pivot = arr[mid];

//   while(start <= end) {
//     while(arr[start] < pivot) {
//       start++;
//     }
//     while(arr[end] > pivot) {
//       end--;
//     }
//     if(start <= end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]]
//       start++;
//       end--;
//     }
//   }
//   sort(arr, low, end);
//   sort(arr, start, high);
// }

function sort(arr, low, high) {
  if(low >= high) return;

  let start = low;
  let end = high;
  let mid = Math.floor((start+end)/2);
  let pivot = arr[mid];

  while(start <= end) {
    while(arr[start] < pivot) {
      start++;
    }
    while(arr[end] > pivot) {
      end--;
    }

    if(start <= end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }

    sort(arr, low, end);
    sort(arr, start, high)
  }
}

let arr = [5, 2, 1, 8, 4, 7, 6, 3];
console.log("Original Array: ", arr);
sort(arr, 0, arr.length-1)
console.log("Sorted Array: ", arr);