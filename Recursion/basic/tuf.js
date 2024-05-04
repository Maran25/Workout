function printName(n) {
    if(n === 5) return;
    console.log('Manimaran')
    printName(n + 1);
}

printName(0);


function print1toN(n) {
    if(n === 0) return n;

    print1toN(n-1)
    console.log(n);
}

print1toN(5)

function printNto1(n) {
    if(n === 0) return n;

    console.log(n);
    printNto1(n-1)
}

printNto1(5)