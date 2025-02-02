/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        if (isExists(board, word, i, j, 0)) return true;
      }
    }
  }
  return false;
};

function isExists(board, word, row, col, index) {
  if (
    row >= board.length ||
    col >= board[0].length ||
    row < 0 ||
    col < 0 ||
    board[row][col] === "0" ||
    word[index] !== board[row][col]
  )
    return false;
  if (index === word.length - 1) return true;

  let temp = word[row][col];
  board[row][col] = "0";

  let exists =
    isExists(board, word, row + 1, col, index + 1) ||
    isExists(board, word, row - 1, col, index + 1) ||
    isExists(board, word, row, col + 1, index + 1) ||
    isExists(board, word, row, col - 1, index + 1);

  board[row][col] = temp;
  return exists;
}

console.log(
  exist(
    [
      ["C", "A", "A"],
      ["A", "A", "A"],
      ["B", "C", "D"],
    ],
    "AAB"
  )
);
