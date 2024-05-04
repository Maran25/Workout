/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
  let board = Array.from({ length: n }, () => Array(n).fill('.'));
  let result = [];
  place(board, result, 0);
  return result.length;
};

function place(board, result, col) {
  if (col === board[0].length) {
    result.push(board.map(row => row.slice()));
  }

  for (let i = 0; i < board.length; i++) {
    if (canPlace(board, i, col)) {
      board[i][col] = 'Q';
      place(board, result, col + 1);
      board[i][col] = '.';
    }
  }
}

function canPlace(board, row, col) {
  let tempRow = row;
  let tempCol = col;
  while (tempRow >= 0) {
    if (board[row][tempCol--] === 'Q') return false;
  }

  tempCol = col;
  while (tempRow >= 0 && tempCol >= 0) {
    if (board[tempRow--][tempCol--] === 'Q') return false;
  }

  tempRow = row;
  tempCol = col;
  while (tempRow < board.length && tempCol >= 0) {
    if (board[tempRow++][tempCol--] === 'Q') return false;
  }

  return true;
}

totalNQueens(4);
