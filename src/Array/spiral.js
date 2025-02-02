/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    let result = [];

    let left = 0, right = m - 1;
    let top = 0, bottom = n - 1;

    while (left < right) {
        for (let i = left; i <= right; i++) result.push(matrix[top][i]);
        top++;

        for (let i = top; i <= bottom; i++) result.push(matrix[i][right]);
        right--;

        if (bottom < top || right < left) continue;

        for (let i = right; i >= left; i--) result.push(matrix[bottom][i]);
        bottom--;

        for (let i = bottom; i >= top; i--) result.push(matrix[i][left]);
        left++;
    }

    return result
};

spiralOrder([[1,2,3],[4,5,6],[7,8,9]])