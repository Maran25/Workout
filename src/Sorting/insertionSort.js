function insertionSort(arr) {
    for(let i=0; i<arr.length; i++) {
        for(let j=0; j<i+1; j++) {
            if(arr[j] >= arr[i+1]) {
                [arr[j], arr[i+1]] = [arr[i+1], arr[j]];
            }
        } 
    }
    return arr;
}

console.log(insertionSort([3, 5, 2, 7, 1, 4, 9, 3, 38, 23, 2, 8]))