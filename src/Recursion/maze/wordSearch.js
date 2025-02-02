/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let path = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));

    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(board[i][j] === word[0] && isExists(board, path, word, 0, i, j)) {
                return true;
            }
        }
    }
    return false
};

function isExists(board, path, word, i, row, col) {
    if(i === word.length) return true;

    if(board[row][col] !== word[i]) return false;

    if(path[row][col]) return false;
    path[row][col] = 1;

    if(row < board.length - 1 && isExists(board, path, word, i+1, row+1, col)) {
        return true
    }

    if(col < board[0].length - 1 && isExists(board, path, word, i+1, row, col+1)) {
        return true
    }

    if(row > 0 && isExists(board, path, word, i+1, row-1, col)) {
        return true
    }

    if(col > 0 && isExists(board, path, word, i+1, row, col-1)) {
        return true
    }

    path[row][col] = 0;
    return false
}

// let board = [
//   ["A", "B", "C", "E"],
//   ["S", "F", "C", "S"],
//   ["A", "D", "E", "E"],
// ];
let board = [["a"]]

console.log(exist(board, "a"));
