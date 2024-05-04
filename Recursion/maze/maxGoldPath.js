let max = -1;
function allPath(maze) {
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (maze[i][j] !== 0) print(0, maze, i, j);
    }
  }
  print(0, maze, 0, 0);
}

function print(sum, maze, row, col) {
  // if(row === maze.length - 1 && col === maze[0].length - 1) {
  //     console.log(p);
  //     return
  // }Z
  if (row >= maze.length || col >= maze[0].length || row < 0 || col < 0 || maze[row][col] === 0) {
    max = Math.max(sum, max);
    return;
  }

  let val = maze[row][col];
  maze[row][col] = 0;

  print(sum + val, maze, row + 1, col),
    print(sum + val, maze, row, col + 1),
    print(sum + val, maze, row - 1, col),
    print(sum + val, maze, row, col - 1);

  maze[row][col] = val;
}

let maze = [
  [0, 6, 0],
  [5, 8, 7],
  [0, 9, 0],
];

allPath(maze);
