// /**
//  * @param {number[][]} matrix
//  * @param {number} target
//  * @return {boolean}
//  */
// var searchMatrix = function(matrix, target) {
//     const column = searchColumn(matrix, target);
//     return search(matrix[column], target);
// };

// function search(arr, target) {
//     let start = 0;
//     let end = arr.length - 1;

//     while(start <= end) {
//         let mid = Math.floor((start+end)/2)

//         if(arr[mid] === target) {
//             return true;
//         } else if(arr[mid] > target) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return false;
// }

// function searchColumn(arr, target) {
//     if(arr.length === 1) return 0;
//     let start = 0;
//     let end = arr.length - 1;

//     while(start <= end) {
//         let mid = Math.floor((start+end)/2);

//         if(arr[mid].length === 1 && arr[mid][0] === target) {
//             return mid;
//         } else if(arr[mid][0] < target && arr[mid][arr.length-1] > target) {
//             return mid;
//         } else if(arr[mid][0] > target) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }
//     return -1;
// }

var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    let start = 0;
    let end = m * n - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);
        let mid_val = matrix[Math.floor(mid / n)][mid % n];

        if(mid_val === target) {
            return true;
        } else if(mid_val > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return false;
};

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 20))