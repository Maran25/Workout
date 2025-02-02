function findTwoElement(arr) {
    let n = arr.length;
    let s1 = 0;
    let s2 = 0;
    let sn1 = Math.floor((n * (n+1))/2)
    let sn2 = Math.floor((n * (n+1) * (2 * n + 1))/6)
    
    for(let m of arr) {
        s1 += m;
        s2 += (m * m);
    }

    let exp1 = s1 - sn1;
    let exp2 = s2 - sn2;
    let a = Math.floor(exp2 / exp1);
    let x = Math.floor((a - exp1)/2);
    let y = a - x;
    
    return [x, y]
}

console.log(findTwoElement([1,3,3]))