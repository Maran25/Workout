/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function (grid) {
  let n = grid.length;
  let m = grid[0].length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if ((i + 2 < n && j + 2 < m) && isAllSameSum(grid, i, j)) {
        total++;
      }
    }
  }
  return total;
};

function isAllSameSum(grid, row, col) {
  if (row + 3 > grid.length || col + 3 > grid[0].length) return false;

  let set = new Set();
  let distNum = new Set();
  for (let i = row; i < row + 3; i++) {
    let colSum = 0;
    let rowSum = 0;
    for (let j = col; j < col + 3; j++) {
      if (grid[i][j] > 9) return false;
      colSum += grid[i][j];
      rowSum += grid[j][i];
      distNum.add(grid[i][j]);
      distNum.add(grid[j][i]);
    }
    set.add(colSum);
    set.add(rowSum);
  }
  if (distNum.size < 9) return false;

  let leftDiagonal = 0;
  let rightDiagonal = 0;
  let j = row + 2;
  for (let i = 0; i < 3; i++) {
    leftDiagonal += grid[row + i][col + i];
    rightDiagonal += grid[j - i][col + i];
  }
  set.add(leftDiagonal);
  set.add(rightDiagonal);

  if (set.size === 1) return true;
  return false;
}

numMagicSquaresInside([
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
]);
