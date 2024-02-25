function findMaxNMin(arr, i, result) {
    if(i === arr.length) return result;

    if(arr[i] > result.max) result.max = arr[i];
    if(arr[i] < result.min) result.min = arr[i];

    return findMaxNMin(arr, i+1, result);
}

console.log(findMaxNMin([1, 2, 3, 4, 5], 0, { max: -Infinity, min: Infinity}))