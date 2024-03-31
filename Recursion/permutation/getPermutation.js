/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
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
};

getPermutation(3, 3)

// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {string}
//  */
// var getPermutation = function(n, k) {
//     let result = []
//     let first = ''
//     for(let i=1; i<=n; i++) first += i;
//     result.push(first);
//     helper(n, '', first, result)
//     return result[k-1]
// };

// function helper(n, p, up, result) {
//     if(!up.length) return result.push(p);

//     let first = up.charAt(0);

//     for(let i=0; i<=p.length; i++) {
//         let f = p.substring(0, i);
//         let l = p.substring(i, p.length);
//         helper(n, f + first + l, up.substring(1), result)
//     }
    
// }
