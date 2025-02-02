/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
  if (grid === null) return 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        return getPerimeter(grid, i, j);
      }
    }
  }
  return 0;
}

function getPerimeter(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
  if (grid[i][j] === 0) return 1;
  if (grid[i][j] === -1) return 0;

  let count = 0;
  grid[i][j] = -1;

  count += getPerimeter(grid, i - 1, j);
  count += getPerimeter(grid, i, j - 1);
  count += getPerimeter(grid, i, j + 1);
  count += getPerimeter(grid, i + 1, j);

  return count;
}

islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
