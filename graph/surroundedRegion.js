/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let m = board[0].length;
  let n = board.length;
  let vis = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    if (!vis[0][i] && board[0][i] === "O") dfs(0, i, board, vis);
    if (!vis[n - 1][i] && board[n - 1][i] === "O") dfs(n - 1, i, board, vis);
  }

  for (let i = 0; i < n; i++) {
    if (!vis[i][0] && board[i][0] === "O") dfs(i, 0, board, vis);
    if (!vis[i][m - 1] && board[i][m - 1] === "O") dfs(i, m - 1, board, vis);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && board[i][j] === "O") board[i][j] = "X";
    }
  }
  return board;
};

function dfs(row, col, board, vis) {
  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[0].length ||
    vis[row][col] ||
    board[row][col] === "X"
  )
    return;

  vis[row][col] = 1;

  dfs(row + 1, col, board, vis);
  dfs(row, col + 1, board, vis);
  dfs(row - 1, col, board, vis);
  dfs(row, col - 1, board, vis);
}

solve([
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
  ["X", "O", "X", "O", "X", "O"],
  ["O", "X", "O", "X", "O", "X"],
]);
