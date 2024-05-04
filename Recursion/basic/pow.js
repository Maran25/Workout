var myPow = function(x, n) {
    let result = 1;
    if(n >= 0) {
        result = pow;
    } else {
        n = -n;
        result = pow(x, n);
        result = 1.0/result;
    }
    return result;
};

function pow(x, n) {
    if(n === 0) return 1;
    return myPow(x, n-1) * x;
}

myPow(2, -2)