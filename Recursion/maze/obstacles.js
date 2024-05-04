function mazeWithObstacles(maze) {
    print('', maze, 0, 0);
}

function print(p, maze, row, col) {
    if(row === maze.length - 1 && col === maze[0].length - 1) {
        console.log(p);
    }

    if(!maze[row][col]) return;

    if(row < maze.length - 1) {
        print(p + 'D', maze, row+1, col)
    }

    if(col < maze[0].length - 1) {
        print(p + 'R', maze, row, col + 1);
    }
}

let maze = [
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 1, 1],
]

mazeWithObstacles(maze);