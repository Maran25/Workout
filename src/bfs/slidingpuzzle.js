/**
 * @param {number[][]} board
 * @return {number}
 */
var slidingPuzzle = function (board) {
  let queue = [[board, 0]];
  let final = [
    [1, 2, 3],
    [4, 5, 0],
  ];

  while (queue.length) {
    let [currentBoard, moves] = queue.shift();
    let count = 0;

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 3; j++) {
        if (final[i][j] === currentBoard[i][j]) count++;
        if (currentBoard[i][j] === 0) {
          if (j < 2) {
            let newBoard = currentBoard.map((row) => [...row]);
            [newBoard[i][j], newBoard[i][j + 1]] = [newBoard[i][j + 1], newBoard[i][j]];
            queue.push([newBoard, moves + 1]);
          }
          if (j > 0) {
            let newBoard = currentBoard.map((row) => [...row]);
            [newBoard[i][j], newBoard[i][j - 1]] = [newBoard[i][j - 1], newBoard[i][j]];
            queue.push([newBoard, moves + 1]);
          }
          if (i === 0) {
            let newBoard = currentBoard.map((row) => [...row]);
            [newBoard[i][j], newBoard[i + 1][j]] = [newBoard[i + 1][j], newBoard[i][j]];
            queue.push([newBoard, moves + 1]);
          }
          if (i === 1) {
            let newBoard = currentBoard.map((row) => [...row]);
            [newBoard[i][j], newBoard[i - 1][j]] = [newBoard[i - 1][j], newBoard[i][j]];
            queue.push([newBoard, moves + 1]);
          }
          break;
        }
      }
    }
    if (count === 6) return moves;
  }
  return -1;
};

slidingPuzzle([
  [1, 2, 3],
  [4, 0, 5],
]);
