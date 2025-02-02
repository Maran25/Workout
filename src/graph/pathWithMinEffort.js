/**
 * @param {number[][]} heights
 * @return {number}
 */

var minimumEffortPathDFS = function (heights) {
  let rlen = heights.length;
  let clen = heights[0].length;

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  let vis = Array.from({ length: rlen }, () => new Array(clen).fill(0));
  let result = Infinity;

  function dfs(diff, row, col) {
    if (row === rlen - 1 && col === clen - 1) {
      result = Math.min(result, diff);
      return;
    }
    vis[row][col] = 1;

    for (let i = 0; i < dr.length; i++) {
      let newrow = row + dr[i];
      let newcol = col + dc[i];

      if (
        newrow < rlen &&
        newcol < clen &&
        newrow >= 0 &&
        newcol >= 0 &&
        !vis[newrow][newcol]
      ) {
        let newdiff = Math.abs(heights[row][col] - heights[newrow][newcol]);
        let maxdiff = Math.max(diff, newdiff);

        dfs(maxdiff, newrow, newcol);
      }
    }

    vis[row][col] = 0;
  }
  dfs(0, 0, 0);
  return result;
};

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPathBFS = function (heights) {
  let row = heights.length;
  let col = heights[0].length;

  let dr = [-1, 0, 1, 0];
  let dc = [0, 1, 0, -1];

  let vis = Array.from({ length: row }, () => new Array(col).fill(0));
  let queue = [[0, 0, 0]];
  vis[0][0] = 1;
  let result = Infinity;

  while (queue.length) {
    let [diff, r, c] = queue.shift();
    // vis[r][c] = 0;

    if (r === row - 1 && c === col - 1) result = Math.min(result, diff);

    for (let i = 0; i < dr.length; i++) {
      let newrow = r + dr[i];
      let newcol = c + dc[i];

      if (
        newrow < row &&
        newcol < col &&
        newrow >= 0 &&
        newcol >= 0 &&
        !vis[newrow][newcol]
      ) {
        let ndd = heights[r][c];
        let dnn = heights[newrow][newcol]
        let newdiff = Math.abs(heights[r][c] - heights[newrow][newcol]);
        queue.push([Math.max(diff, newdiff), newrow, newcol]);
        vis[newrow][newcol] = 1;
      }
    }
  }
  return result;
};

minimumEffortPathBFS([
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
]);
