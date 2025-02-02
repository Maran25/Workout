/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1;
    let row = grid.length;
    let col = grid[0].length;

    const dr = [-1, -1, 0, 1, 1, 1, 0, -1];
    const dc = [0, 1, 1, 1, 0, -1, -1, -1];
    let vis = Array.from({ length: row }, () => new Array(col).fill(0));
    let queue = [[1, 0, 0]];
    vis[0][0] = 1

    while(queue.length) {
        let [dist, ir, ic] = queue.shift();

        for(let i=0; i<dr.length; i++) {
            let newrow = ir+dr[i];
            let newcol = ic+dc[i]
            if(newrow >= 0 && newcol >= 0 && newrow < row && newcol < col && !grid[newrow][newcol] && !vis[newrow][newcol]) {
                queue.push([dist+1, newrow, newcol]);
                vis[newrow][newcol] = 1
                if(newrow === row-1 && newcol === col-1) return dist+1
            }
        }
    }
    return -1
};

shortestPathBinaryMatrix([[0,1],[1,0]])