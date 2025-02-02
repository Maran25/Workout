function setBit(n, i) {
    return n ^ (1 << i)
}

console.log(setBit(13, 1))