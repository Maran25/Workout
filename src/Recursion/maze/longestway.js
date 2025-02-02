function findLongestRoutePossible(maze) {
    return helper(maze, 0, 0, 0, 1, 7);
}

function helper(maze, row, col, count, x, y) {
    if(row === x && col === y) return count;
    if(row >= maze.length || col >= maze[0].length || row < 0 || col < 0 || maze[row][col] <= 0) {
        return 0;
    };

    maze[row][col] = -1;
    let rightCount = helper(maze, row, col+1, count+1, x, y);
    let downCount = helper(maze, row+1, col, count+1, x, y);
    let upCount = helper(maze, row-1, col, count+1, x, y);
    let leftCount = helper(maze, row, col-1, count+1, x, y);
    maze[row][col] = 1;
    return Math.max(leftCount, rightCount, downCount, upCount);
}

let maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1, 0, 1, 1, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

console.log(findLongestRoutePossible(maze))