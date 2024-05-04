/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function(n) {
    let arr = [0, 1, 1]

    for(let i=3; i<=n; i++) {
        let sum = arr[i-3] + arr[i-2] + arr[i-1];
        arr[i] = sum;
    }

    return arr[n]
};

tribonacci(4)