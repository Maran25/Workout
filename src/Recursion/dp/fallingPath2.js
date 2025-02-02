/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSum = function(grid) {
    let min = Infinity;

    for(let i=0; i<grid.length; i++) {
        min = Math.min(min, helper(0, i, grid, grid[0][0]))
    }
    return min;
};

function helper(row, col, grid, sum) {
    if(col === grid.length || row === grid.length) return Infinity;
    if(row === grid.length-1) return sum;

    let min = Infinity;

    for(let j=0; j<grid.length; j++) {
        if(col === j) continue;
        let res = helper(row+1, j, grid, sum + grid[row+1][j])
        min = Math.min(min, res)
    }
    return min;
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minFallingPathSumV2 = function (grid) {
    let n = grid.length;
    let dp = grid[0];

    for(let row=1; row<n; row++) {
        let next_dp = new Array(n).fill(Infinity);
        for(let curc=0; curc<n; curc++) {
            for(let prevc=0; prevc<n; prevc++) {
                if(curc !== prevc) {
                    next_dp[curc] = Math.min(next_dp[curc], grid[row][curc] + dp[prevc])
                }
            }
        }
        dp = next_dp
    }
    return Math.min(...dp)
};

minFallingPathSumV2([[1,2,3],[4,5,6],[7,8,9]])