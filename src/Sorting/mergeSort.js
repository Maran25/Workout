// function mergeTwoSortedArray(arr1, arr2) {
//   let length = arr1.length + arr2.length;
//   let one = 0;
//   let two = 0;
//   let arr = [];

//   for (let i = 0; i < length; i++) {
//     if (arr1[one] === undefined) {
//       arr.push(...arr2.splice(two));
//       break;
//     } else if (arr2[two] === undefined) {
//       arr.push(...arr1.splice(one));
//       break;
//     } else {
//       if (arr1[one] > arr2[two]) {
//         arr.push(arr2[two]);
//         two++;
//       } else {
//         arr.push(arr1[one]);
//         one++;
//       }
//     }
//   }
//   return arr;
// }



// function merge(arr1, arr2) {
//     let one = 0;
//     let two = 0;
//     let arr = [];

//     while(arr1.length > one && arr2.length > two) {
//         if(arr1[one] > arr2[two]) {
//             arr.push(arr2[two])
//             two++;
//         } else {
//             arr.push(arr1[one])
//             one++;
//         }
//     }

//     while(arr1.length > one) {
//         arr.push(arr1[one])
//         one++;
//     }
//     while(arr2.length > two) {
//         arr.push(arr2[two])
//         two++;
//     }
//     return arr;
// }

// function mergerSort(arr) {
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let one = mergerSort(arr.slice(0, mid));
//     let two = mergerSort(arr.slice(mid));
//     return merge(one, two);
// }


// function mergeSort(arr) {
//   if(arr.length === 1) return arr;

//   let mid = Math.floor(arr.length/2);

//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid))

//   return merge(left, right)
// }

// function merge(first, second) {
//   let result = [];
//   let i = 0;
//   let j = 0;

//   while(i < first.length && j < second.length) {
//     if(first[i] < second[j]) {
//       result.push(first[i]);
//       i++
//     } else {
//       result.push(second[j]);
//       j++
//     }
//   }

//   while(i < first.length) {
//     result.push(first[i]);
//     i++
//   }

//   while(j < second.length) {
//     result.push(second[j]);
//     j++
//   }

//   return result;
// }

// // console.log(mergeTwoSortedArray([1, 5, 7, 9], [6, 9, 20, 48]));
// console.log(mergeSort([3, 4, 6, 2, 42, 12, 6, 3, 5]))
//In place merge sort
function mergeSort(arr, start, end) {
  if(end - start === 1) return;

  let mid = Math.floor((start+end)/2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid, end)

  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let result = [];
  let i = start;
  let j = mid;

  while(i < mid && j < end) {
    if(arr[i] < arr[j]) {
      result.push(arr[i]);
      i++
    } else {
      result.push(arr[j]);
      j++
    }
  }

  while(i < mid) {
    result.push(arr[i]);
    i++
  }

  while(j < end) {
    result.push(arr[j]);
    j++
  }

  for (let i = 0; i < result.length; i++) {
    arr[start+i] = result[i];
  };
}

// console.log(mergeTwoSortedArray([1, 5, 7, 9], [6, 9, 20, 48]));
let arr = [5, 4, 3, 2, 1]
console.log(arr)
mergeSort(arr, 0, arr.length)
console.log(arr)