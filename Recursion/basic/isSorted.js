function isSorted(arr) {
    return helper(arr, 0);
}

function helper(arr, i) {
    if(i === arr.length-1) return true;
    return arr[i] < arr[i+1] && helper(arr, i+1);
}

console.log(isSorted([1, 2, 4, 6, 7, 8, 9]))