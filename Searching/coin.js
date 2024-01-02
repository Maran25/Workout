/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    let start = 1;
    let end = Math.floor(n / 2) + 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let takenCol = isPossible(mid+1, n);
/* 
        if (takenCol === mid) {
            return mid;
        } else if */if (takenCol < mid) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return end;
};

function isPossible(num, n) {
    let count = 0;
    while (n > 0) {
        n -= num;
        num--;
        count++;
    }
    return count;
}

console.log(arrangeCoins(3))