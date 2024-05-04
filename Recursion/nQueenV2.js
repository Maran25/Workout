/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let board = Array.from({ length: n }, () => Array(n).fill('.'));
    let left = Array(n).fill(0);
    let upper = Array(2 * n - 1).fill(0);
    let lower = Array(2 * n - 1).fill(0);
    let result = [];
    place(board, result, left, upper, lower, 0);
    return result.length;
};

function place(board, result, left, upper, lower, col) {
    if (col === board[0].length) {
        result.push(board.map(row => row.slice()));
    }

    for (let row = 0; row < board.length; row++) {
        if (!left[row] && upper[(board.length - row) + col] && lower[row + col]) {
            left[row] = 1
            lower[row + col] = 1
            upper[(board.length - row) + col] = 1
            board[row][col] = 'Q';
            place(board, result, left, upper, lower, col + 1);
            board[row][col] = '.';
            left[row] = 0
            lower[row + col] = 0
            upper[(board.length - row) + col] = 0
        }
    }
}

console.log(totalNQueens(4))