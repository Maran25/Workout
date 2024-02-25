function countZero(num) {
    return helper(num, 0)
}

function helper(num, count) {
    if(num <= 0) return count;

    if(num%10 === 0) {
        return helper(Math.floor(num/10), count+1)
    } else {
        return helper(Math.floor(num/10), count)
    }
}

console.log(countZero(40450340))