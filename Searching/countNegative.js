/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grids) {
    let count = 0;
    for(let grid of grids) {
        count += noOfNegativeNumber(grid)
    } 
    return count;
};

function noOfNegativeNumber(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(arr[mid] >= 0) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return arr.length - start;
}

console.log(countNegatives([[3,2],[1,0]]))