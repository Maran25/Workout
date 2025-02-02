/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let n = mat.length;
    let m = mat[0].length;
    let vis = Array.from({ length: n }, () => Array(m).fill(0));;
    let distance = Array.from({ length: n }, () => Array(m).fill(0));;
    let queue = [];

    let deltaRow = [-1, 0, 1, 0];
    let deltaCol = [0, 1, 0, -1];

    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            if(mat[i][j] === 0) {
                vis[i][j] = 1
                queue.push([i, j, 0]);
            } 
        }
    }

    while(queue.length) {
        const [row, col, totdistance] = queue.shift()
        distance[row][col] = totdistance

        for(let i=0; i<4; i++) {
            let nRow = row + deltaRow[i];
            let nCol = col + deltaCol[i];
            if(nRow >= 0 && nCol >= 0 && nRow < n 
            && nCol < m && !vis[nRow][nCol]) {
                vis[nRow][nCol] = 1;
                queue.unshift([nRow, nCol, totdistance+1])
            }
        }
    }
    return distance;
};

updateMatrix([[0,0,0],[0,1,0],[1,1,1]])