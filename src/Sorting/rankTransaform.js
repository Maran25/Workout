/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let min = Infinity;
    let max = -Infinity;

    for(let num of arr) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }

    let count = Array(max - min + 1).fill(0);

    for(let i=0; i<arr.length; i++) {
        count[arr[i] - min]++
    }

    for(let i=1; i<count.length; i++) {
        count[i] += count[i-1]
    }

    for(let i=0; i<arr.length; i++) {
        arr[i] = count[arr[i] - min] + 1
    }

    return arr;
};

console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12]))