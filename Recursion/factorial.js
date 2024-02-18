function sumOfDigit(num, sum=0) {
    if(num <= 0) return sum;
    let last = num%10;
    num = Math.floor(num/10);
    let ans = sumOfDigit(num, last)
    return sum + ans;
}

console.log(sumOfDigit(1342));