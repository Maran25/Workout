/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    return helper(obstacleGrid, 0, 0)
};

function helper(grid, row, col) {
    if(row === grid.length-1 && col === grid[0].length-1) return 1;

    let count = 0;
    if(grid[row][col]) return 0;

    if(col < grid[0].length-1) {
        count+= helper(grid, row, col+1);
    }
    if(row < grid.length-1) {
        count+= helper(grid, row+1, col);
    }
    return count;
}

uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])