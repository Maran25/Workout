function frequencySquare(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;

    let i = 0;
    while(i < arr1.length) {
        let square = arr1[i]*arr1[i];
        for(let j = 0; j < arr2.length; j++) {
            if(arr2[j] === square) {
                arr2.splice(j, 1);
                break;
            }
        }
        i++;
    }
    if(arr2.length === 0) return true;

    return false;
}

console.log(frequencySquare([1, 2, 3], [4, 1, 9]))
console.log(frequencySquare([1, 2, 3], [1, 4, 4]))
console.log(frequencySquare([1, 2, 3], [1, 9]))