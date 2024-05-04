function natural(num) {
    if(num === 0) return 0;
    return num + natural(num - 1);
}

console.log(natural(5))