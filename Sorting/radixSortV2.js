// function radixSort(arr) {
//   let max = Math.max(...arr);
  
//   for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
//       let map = {};
//       let output = [];

//     for (let i = 0; i < arr.length; i++) {
//         let index = Math.floor((arr[i]/exp) % 10)
//       if (map[index]) {
//         map[index]++;
//       } else {
//         map[index] = 1;
//       }
//     }

//     for (let i = 0; i < 10; i++) {
//       let count = map[i];
//       for (let j = 0; j < count; j++) {
//         output.push(i);
//       }
//     }

//     for (let i = 0; i < arr.length; i++) {
//       arr[i] = output[i]
//     }
//   }
//   return arr;
// }

function getMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// Using counting sort to sort the elements based on significant places
function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);

  // Store count of occurrences in count[]
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }

  // Change count[i] so that count[i] contains the actual position of this digit in output[]
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }

  // Copy the output array to arr[], so that arr[] contains sorted numbers according to the current digit
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

// Radix Sort function
function radixSort(arr) {
  const max = getMax(arr);

  // Do counting sort for every digit
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
}

console.log(radixSort([483, 6999, 39, 7, 8, 29, 388]))