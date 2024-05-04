function permutation(a, b, result) {
    if(!b.length) {
        result.push(a);
        return;
    }

    let t = b.charAt(0);

    for(let i=0; i<= a.length; i++) {
        let f = a.substring(0, i);
        let s = a.substring(i, a.length);

        permutation(f + t + s, b.substring(1), result);
    }
}

let result = [];
permutation('', 'abc', result)

console.log(result);