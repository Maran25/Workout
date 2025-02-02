function checkIfIthBitIsSet(num, i) {
    let temp = 1 << i
    if(temp & num) return true;
    return false;
}

console.log(checkIfIthBitIsSet(13, 2))