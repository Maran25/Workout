/**
 * @param {number[]} rowSum
 * @param {number[]} colSum
 * @return {number[][]}
 */
var restoreMatrix = function (rowSum, colSum) {
    let n = rowSum.length;
    let m = colSum.length;

    let matrix = Array.from({ length: n}, () => new Array(m).fill(0));
    let curRowSum = new Array(n).fill(0)
    let curColSum = new Array(m).fill(0)

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            matrix[i][j] = Math.min(rowSum[i] - curRowSum[i], colSum[j] - curColSum[j]);
            curRowSum[i] += matrix[i][j]
            curColSum[j] += matrix[i][j]
        }
    }

    return matrix;
};

restoreMatrix([5,7,10],[8,6,8])