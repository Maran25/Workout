function isPrime(num, i) {
    
    if(num <= 2) {
        return num === 2 ? true : false;
    } else if(num % i === 0) {
        return false;
    } else if(i * i > num) {
        return true;
    }

    return isPrime(num, i+1)
}

console.log(isPrime(16, 2))