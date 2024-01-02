function searchNumber(arr, target) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1;
}

console.log(searchNumber([2, 4, 1, 5, 7, 2, 4, 7], 78));