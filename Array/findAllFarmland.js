/**
 * @param {number[][]} land
 * @return {number[][]}
 */

var findFarmland = function(land) {
    let ans = [];
    let maxRow = 0;
    let maxCol = 0;

    function traverseFarmland(row, col) {
        if (row < 0 || col < 0 || row >= land.length || col >= land[0].length || land[row][col] === 0) return;
        if (land[row][col] === -1) return;
        land[row][col] = -1;

        maxRow = Math.max(row, maxRow);
        maxCol = Math.max(col, maxCol);

        traverseFarmland(row + 1, col);
        traverseFarmland(row - 1, col);
        traverseFarmland(row, col + 1);
        traverseFarmland(row, col - 1);
    }

    for (let i = 0; i < land.length; i++) {
        for (let j = 0; j < land[0].length; j++) {
            if (land[i][j] === 1) {
                let temp = [i, j];
                maxRow = i;
                maxCol = j;
                traverseFarmland(i, j);
                temp.push(maxRow, maxCol);
                ans.push(temp);
            }
        }
    }

    return ans;
};

findFarmland([[1,0,0],[0,1,1],[0,1,1]])