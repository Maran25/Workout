/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
    let map = new Map();
    let matrix = Array.from({ length: k }, () => new Array(k).fill(0));
    matrix[0][0] = rowConditions[0][0];
    matrix[1][0] = rowConditions[0][1];
    map.set(rowConditions[0][0], [0, 0])
    map.set(rowConditions[0][1], [1, 0])

    for (let i = 1; i < rowConditions.length; i++) {
        const [one, two] = rowConditions[i]
        if (map.has(two) && !map.has(one)) {
            let twoRow = map.get(two)[0];
            for (let [key, [row, col]] of map) {
                if (row >= twoRow) {
                    matrix[row + 1][col] = key;
                    map.set(key, [row + 1, col])
                    matrix[row][col] = 0
                }
            }
            matrix[twoRow][0] = one;
            map.set(one, [twoRow, 0])
        } else if (!map.has(two) && map.has(one)) {
            let oneRow = map.get(one)[0];
            matrix[oneRow + 1][0] = two;
            map.set(two, [oneRow + 1, 0])
        } else if (map.has(one) && map.has(two)) {
            if (map.get(one)[0] > map.get(two)[0]) {
                return [];
            } else continue
        }
    }

    if(map.size < k) {
        let count = map.size;
        for(let i=1; i<=k; i++) {
            if(!map.has(i)) {
                matrix[count-1][0] = i;
                map.set(i, [count-1, 0])
                count++
            }
        }
    }

    for (let i = 0; i < colConditions.length; i++) {
        const [one, two] = colConditions[i];
        let [oneRow, oneCol] = map.get(one)
        let [twoRow, twoCol] = map.get(two)
        if(twoCol > oneCol) continue;
        let maxCol = Math.max(oneCol, twoCol) + 1;

        if (maxCol < k) {
            for (let [key, [row, col]] of map) {
                if (col >= maxCol) {
                    matrix[row][col + 1] = key;
                    map.set(key, [row, col + 1])
                    matrix[row][col] = 0
                }
            }
            
            matrix[twoRow][maxCol] = two;
            map.set(two, [twoRow, maxCol])
            matrix[twoRow][twoCol] = 0
        }
    }

    return matrix
}

buildMatrix(3, [[1,2],[7,3],[4,3],[5,8],[7,8],[8,2],[5,8],[3,2],[1,3],[7,6],[4,3],[7,4],[4,8],[7,3],[7,5]], [[1,2],[2,3],[1,2],[2,3],[1,2],[2,3]])