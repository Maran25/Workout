/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
var countSubIslands = function (grid1, grid2) {
  let n = grid1.length;
  let m = grid1[0].length;
  let count = 0;
  let vis = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid1[i][j] && grid2[i][j] && !vis[i][j]) {
        if (isSubIsland(i, j, grid1, grid2, vis, n, m)) count++;
      }
    }
  }
  return count;
};

function isSubIsland(row, col, grid1, grid2, vis, n, m) {
  const queue = [[row, col]];
  const delta = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let isSubIsland = true;
  vis[row][col] = 1;

  while (queue.length) {
    const [r, c] = queue.shift();
    if (grid1[r][c] !== grid2[r][c]) isSubIsland = false;

    for (const [dr, dc] of delta) {
      let nr = dr + r;
      let nc = dc + c;

      if (
        nr < n &&
        nc < m &&
        nr >= 0 &&
        nc >= 0 &&
        grid2[nr][nc] &&
        !vis[nr][nc]
      ) {
        vis[nr][nc] = 1;
        queue.push([nr, nc]);
      }
    }
  }
  return isSubIsland;
}

countSubIslands(
  [
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
  ],
  [
    [0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1],
    [0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 0, 0, 1],
  ]
);
