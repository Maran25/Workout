function findShortestSafeRoute(path) {
  let min = Number.MAX_VALUE;
  for (let i = 0; i < path.length; i++) {
    if(path[i][0] === 0) continue;
    let res = helper(path, 4, 0, 0);
    min = Math.min(res, min);
  }
  return min;
}

function helper(path, row, col, count) {
  if (col === path[0].length) return count;
  if (row >= path.length || row < 0  || col < 0 || col >= path[0].length || !path[row][col]) return Number.MAX_VALUE;
  if (path[row][col] === -1) return Number.MAX_VALUE;
  if (
    (row < path.length - 1 && !path[row + 1][col]) ||
    (col > 0 && !path[row][col - 1]) ||
    (row > 0 && !path[row - 1][col]) ||
    (col < path[0].length - 1 && !path[row][col + 1])
) 
    return Number.MAX_VALUE;


  path[row][col] = -1;

  let right = helper(path, row, col + 1, count + 1);
  let down = helper(path, row + 1, col, count + 1);
  let up = helper(path, row - 1, col, count + 1);
  let left = helper(path, row, col-1, count + 1);
  
  path[row][col] = 1;
  return Math.min(up, down, right, left);
}

const path = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1],
  // [1, 1, 1, 1],
  // [1, 1, 1, 0],
  // [1, 1, 1, 1],
  // [0, 1, 1, 1],
];

console.log(findShortestSafeRoute(path));
