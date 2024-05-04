/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = Array.from({ length: n }, () => Array.from({ length: n }).fill('.'));
    let result = [];
    helper(0, board, result, n);
    return result
};

function helper(col, board, result, n) {
    if(col === n) {
        result.push(board.slice())
        return;
    }

    for(let row=0; row<n; row++) {
        if(isSafe(row, col, board, n)) {
            board[row][col] = 'Q';
            helper(col+1, board, result, n);
            board[row][col] = '.';
        }
    }
}

function isSafe(row, col, board, n) {
    let tempRow = row;
    let tempCol = col;

    while(col >= 0 && row >= 0) {
        if(board[row][col] === 'Q') return false;
        col--;
        row--;
    }

    col = tempCol;
    row = tempRow;

    while(col >= 0) {
        if(board[row][col] === 'Q') return false;
        col--
    } 

    col = tempCol;
    row = tempRow;

    while(col < n && row >= 0) {
        if(board[row][col] === 'Q') return false;
        row++;
        col--;
    }

    return true;
}

console.log(solveNQueens(4))