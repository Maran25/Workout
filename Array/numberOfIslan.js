/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    for(let i=0; i<grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                let res = helper(grid, i, j);
                if (res >= 4) count++
            }
        }
    }
    return count;
};

function helper(grid, row, col) {
    if(row < 0 || col < 0 || row >= grid.length || col >= grid[0].length) return 1;
    if(grid[row][col] === '0' || grid[row][col] === '-1') return 1;

    let count = 0;
    grid[row][col] = '-1';

    count += helper(grid, row, col + 1);
    count += helper(grid, row + 1, col);
    count += helper(grid, row, col - 1);
    count += helper(grid, row - 1, col);

    grid[row][col] = '1';
    return count;
}

numIslands([["1"]])