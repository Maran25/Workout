function sumOfDigit(num) {
    if(num <= 0) return 0;
    return num%10 + sumOfDigit(Math.floor(num/10));
}

console.log(sumOfDigit(1342));