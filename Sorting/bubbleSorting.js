function bubbleSort(arr) {
    let swapped = false;
    for(let i=0; i<arr.length - 1; i++) {
        for(let j=1; j<arr.length - i; j++) {
            if(arr[j] < arr[j-1]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]];
                swapped = true;
            }
        }
        if(!swapped) break;
    }
}

let arr = [3, 2, 5, 3, 1, 7, 5, 9]
console.log('before sorting: ', arr)
bubbleSort(arr)
console.log('after sorting: ', arr)