function printingPath(size) {
    printAlsoDiagonal('', size, size);
}

function print(p, row, col) {
    if(row === 1 && col === 1) {
        console.log(p);
    }

    if(row > 1) {
        print(p + 'D', row - 1, col);
    }

    if(col > 1) {
        print(p + 'R', row, col - 1)
    }
}

function printAlsoDiagonal(p, row, col) {
    if(row === 1 && col === 1) {
        console.log(p);
    }

    if(row > 1 && col > 1) {
        printAlsoDiagonal(p + 'D', row - 1, col - 1);
    }

    if(row > 1) {
        printAlsoDiagonal(p + 'H', row - 1, col);
    }

    if(col > 1) {
        printAlsoDiagonal(p + 'V', row, col - 1)
    }
}

printingPath(3)