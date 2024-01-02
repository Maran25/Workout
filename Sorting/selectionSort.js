function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let min = i;
        for(let j = i; j < arr.length; j++)  {
            if(arr[j] < arr[min]) min = j;
        }
        [arr[i], arr[min]] = [arr[min], arr[i]];
    }
    return arr;
}

function selectionSortV2(arr) {
    for(let i=0; i<arr.length; i++) {
        let last = arr.length - i - 1;
        let maxIndex = findMax(arr, 0, last);
        [arr[maxIndex], arr[last]] = [arr[last], arr[maxIndex]]
    }
}

function findMax(arr, start, end) {
    let max = start;
    for(let i=start; i<=end; i++) {
        if(arr[i] > arr[max]) max = i;
    }
    return max;
}

let arr = [3, 5, 2, 7, 1, 4, 9, 3, 38, 23, 2, 8]
console.log("Original array: ", arr);
selectionSortV2(arr)
console.log("Sorted array: ", arr);