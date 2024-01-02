/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
    let { max: end, min: start } = findMinAndMax(bloomDay);
    let ans = -1;

    if(bloomDay.length < m*k) return -1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        const noOfB = howManyMCanMake(bloomDay, mid, k);

        if(noOfB === m) {
            ans = mid;
            end = mid - 1;
        } else if(noOfB < m) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return ans
}

function howManyMCanMake(arr, day, k) {
    let count = 0;
    let noOfB = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] <= day) {
            count++;
        } else {
            noOfB += Math.floor(count / k);
            count = 0;
        }
    }
    return noOfB;
}

function findMinAndMax(arr) {
    let min = Number.MAX_VALUE;
    let max = Number.MIN_VALUE;
    for(let num of arr) {
        max = Math.max(num, max);
        min = Math.min(num, min)
    }
    return { min, max }
}

// function findPeak(arr, k) {
//     let start = 0;
//     let end = arr.length - 1;
//     let ans = -1;

//     while(start<=end) {
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid] === k) {
//             return k;
//         } else if(arr[mid] < k) {
//             ans = arr[mid];
//             start = mid + 1;
//         } else {
//             end = mid - 1;
//         }
//     }
//     return ans;
// }

console.log(minDays([7,7,7,7,12,7,7], 2, 3))