function sumTriangle(arr) {
    if(arr.length === 1) return arr;

    let first = arr.splice(0, 1)[0];
    for(let i=0; i<arr.length; i++) {
        let sum = first + arr[i];
        first = arr[i];
        arr[i] = sum;
    }

    return sumTriangle(arr);
}

function triangleSum(arr, i, n) {
    if(i === n-1) return arr;
    arr[i] = arr[i] + arr[i+1];
    return triangleSum(arr, i+1, n)
}

function beatIt(arr) {
    let temp = [...arr];

    for(let i = arr.length; i > 0; i--) {
        temp = triangleSum(temp, 0, i)
    }

    return temp;
}

console.log(beatIt([1, 2, 3, 4, 5]));