/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let vis = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    if (!vis[0][i] && grid[0][i] === 1) {
      dfs(0, i, grid, vis);
    }
    if (!vis[n - 1][i] && grid[n - 1][i] === 1) {
      dfs(n - 1, i, grid, vis);
    }
  }

  for (let i = 0; i < n; i++) {
    if (!vis[i][0] && grid[i][0] === 1) {
      dfs(i, 0, grid, vis);
    }
    if (!vis[i][m - 1] && grid[i][m - 1] === 1) {
      dfs(i, n - 1, grid, vis);
    }
  }

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (!vis[i][j] && grid[i][j] === 1) {
        count++;
      }
    }
  }
  return count;
};

function dfs(row, col, grid, vis) {
  if (
    row < 0 ||
    col < 0 ||
    row >= grid.length ||
    col >= grid[0].length ||
    vis[row][col] ||
    !grid[row][col]
  )
    return;

  vis[row][col] = 1;

  dfs(row + 1, col, grid, vis);
  dfs(row, col + 1, grid, vis);
  dfs(row - 1, col, grid, vis);
  dfs(row, col - 1, grid, vis);
}

numEnclaves([
  [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0],
  [0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1],
  [0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 0],
  [1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1],
  [0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0],
  [0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0],
  [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1],
]);
