/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    let start = 0;
    let end = arr.length - 1;
    let found = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let missing = arr[mid] - (mid + 1) - found;
        if (found + missing > k) {
            return arr[end - 1] + missing - 1
        }

        if (found < k) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        found += missing;
    }
    return arr[end] + k;
};


var findKthPositiveV2 = function (arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if((arr[mid] - 1 - mid) > k) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return end + k + 1
};

console.log(findKthPositiveV2([2], 1));