function clearBit(n, i) {
    return n & ~(1 << i)
}

console.log(clearBit(13, 0))
