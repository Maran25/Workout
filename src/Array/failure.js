/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function(difficulty, profit, worker) {
    let maxDifficulty = Math.max(...difficulty);
    let maxProfitUpToDifficulty = new Array(maxDifficulty + 1).fill(0);

    for (let i = 0; i < difficulty.length; i++) {
        maxProfitUpToDifficulty[difficulty[i]] = Math.max(maxProfitUpToDifficulty[difficulty[i]], profit[i]);
    }

    for (let i = 1; i <= maxDifficulty; i++) {
        maxProfitUpToDifficulty[i] = Math.max(maxProfitUpToDifficulty[i], maxProfitUpToDifficulty[i - 1]);
    }

    let totalProfit = 0;
    for (let ability of worker) {
        if (ability > maxDifficulty) {
            totalProfit += maxProfitUpToDifficulty[maxDifficulty];
        } else {
            totalProfit += maxProfitUpToDifficulty[ability];
        }
    }

    return totalProfit;
};

// /**
//  * @param {number[]} difficulty
//  * @param {number[]} profit
//  * @param {number[]} worker
//  * @return {number}
//  */
// var maxProfitAssignment = function (difficulty, profit, worker) {
//     let arr = [];
//     for (let i = 0; i < difficulty.length; i++) {
//         arr[i] = [difficulty[i], profit[i]]
//     }
//     arr.sort((a, b) => a[0] - b[0]);

//     let result = 0;

//     for (let i=0; i<worker.length; i++) {
//         let val = binarySearch(arr, worker[i]);
//         result += arr[val][1];
//     }
//     return result;
// };

// function binarySearch(arr, target) {
//     let i = 0;
//     let j = arr.length - 1;

//     while (i <= j) {
//         let mid = Math.floor((i + j) / 2);
//         if (arr[mid][0] === target) {
//             return mid
//         } else if (arr[mid][0] > target) {
//             j = mid - 1;
//         } else {
//             i = mid + 1;
//         }
//     }
//     return i;
// }