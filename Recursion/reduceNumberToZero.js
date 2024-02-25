function numberOfSteps(num) {
    return helper(num, 0);
}

function helper(n, steps) {
    if(n === 0) return steps;

    if(n%2 === 0) {
        return helper(n/2, steps+1)
    } else {
        return helper(n-1, steps+1)
    }
}