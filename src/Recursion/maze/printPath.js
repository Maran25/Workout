function printPath(board) {
    let maze = Array.from({ length: board.length }, () => Array(board[0].length).fill(0));
    print('', board, maze, 0, 0, 1);
}

function print(p, board, maze, row, col, level) {
    if(row === maze.length - 1 && col === maze[0].length - 1) {
        maze[row][col] = level;
        maze.forEach(row => console.log(row))
        console.log(p);
        console.log('')
        return;
    }

    if(!board[row][col]) return
    if(maze[row][col]) return
    maze[row][col] = level;

    if(row < maze.length - 1) {
        print(p + 'D', board, maze, row + 1, col, level + 1);
    }

    if(col < maze[0].length - 1) {
        print(p + 'R', board, maze, row, col + 1, level + 1);
    }

    if(row > 0) {
        print(p + 'U', board, maze, row - 1, col, level + 1);
    }

    if(col > 0) {
        print(p + 'L', board, maze, row, col - 1, level + 1);
    }

    maze[row][col] = 0
}

let board = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 1, 0],
    [1, 1, 1, 1],
]

printPath(board)
