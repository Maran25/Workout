function powerOfTwo(num) {
    if(num <= 1) return true; 
    return num%2===0 && powerOfTwo(num/2);
}

console.log(powerOfTwo(1))