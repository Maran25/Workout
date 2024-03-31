/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    let pathsToVisit = 0;
    let row = 0;
    let col = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== -1) pathsToVisit++;
            if (grid[i][j] === 1) {
                row = i;
                col = j;
            }
        }
    }
    
    return helper(grid, row, col, pathsToVisit)
};

function helper(grid, row, col, totalPath) {
    if (col >= grid[0].length || row >= grid.length || row < 0 || col < 0 || grid[row][col] < 0) return 0;
    if (grid[row][col] === 2) {
        totalPath--
        if(totalPath === 0) return 1;
        return 0;
    }

    grid[row][col] = -2
    totalPath--;
    let result = 0;

    result += helper(grid, row, col + 1, totalPath);
    result += helper(grid, row + 1, col, totalPath);
    result += helper(grid, row - 1, col, totalPath);
    result += helper(grid, row, col - 1, totalPath);

    grid[row][col] = 0
    totalPath++;
    return result;
}

uniquePathsIII([[1,0,0],[0,0,0],[0,0,2]])