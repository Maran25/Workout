function printnum(num) {
    if(num === 1) return num;
    return num * printnum(num-1);
}

console.log(printnum(5))