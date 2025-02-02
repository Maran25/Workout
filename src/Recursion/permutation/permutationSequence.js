function permutationSequence(n, k) {
    let numbers = [];
    let fact = 1;

    for(let i=1; i<n; i++) {
        fact *= i;
        numbers.push(i);
    }
    numbers.push(n);
    let result = ''
    k--;

    while(numbers.length) {
        result += numbers[Math.floor(k/fact)];
        numbers.splice(Math.floor(k/fact), 1);
        k %= fact;
        fact /= numbers.length;
    }
    return result;
}

console.log(permutationSequence(4, 17))
