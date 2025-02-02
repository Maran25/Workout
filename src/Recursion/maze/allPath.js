function allPath(maze) {
    print('', maze, 0, 0);
}

function print(p, maze, row, col) {
    if(row === maze.length - 1 && col === maze[0].length - 1) {
        console.log(p);
        return
    }

    if(!maze[row][col]) return;
    
    maze[row][col] = 0;

    if(row < maze.length - 1) {
        print(p + 'D', maze, row + 1, col);
    }

    if(col < maze[0].length - 1) {
        print(p + 'R', maze, row, col + 1);
    }

    if(row > 0) {
        print(p + 'U', maze, row - 1, col);
    }

    if(col > 0) {
        print(p + 'L', maze, row, col - 1);
    }

    maze[row][col] = 1;
}

let maze = [
    [1, 1, 1],
    [1, 1, 1],
    [1, 1, 1],
]

allPath(maze)