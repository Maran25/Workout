/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let delta = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let n = grid.length;
    let m = grid[0].length;
    let vis = Array.from({ length: n }, () => new Array(m).fill(0));
    let queue = [];
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1 && !vis[i][j]) {
                queue.push([i, j]);
                vis[i][j] = 1;
                let connections = 1

                while(queue.length) {
                    let [row, col] = queue.shift();
                    
                    for(let [dr, dc] of delta) {
                        let nr = dr + row;
                        let nc = dc + col;

                        if(nr >= 0 && nc >= 0 && nr < n && nc < m && !vis[nr][nc] && grid[nr][nc]) {
                            queue.push([nr, nc]);
                            vis[nr][nc] = 1;
                            connections++;
                        }
                    }
                }
                if(connections > 1) count += connections;
            }
        }
    }

    return count;
};

countServers([[1,0],[1,1]])