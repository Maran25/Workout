/**
 * @param {string} numberStr
 * @return {string}
 */
var nearestPalindromic = function (n) {
    let bit = BigInt(n);
    let num = [bit - 1n, bit + 1n];

    while (true) {
        let d1 = distance(num[0]);
        if (d1 === 0) break;
        num[0] -= BigInt(d1);
    }
    while (true) {
        let d2 = distance(num[1]);
        if (d2 === 0) break;
        num[1] += BigInt(d2);
    }
    return bit - num[0] <= num[1] - bit ? String(num[0]) : String(num[1]);
};

function distance(n) {
    let s = n + "", i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i++] !== s[j--]) return 10 ** (i - 1);
    }
    return 0;
}

nearestPalindromic('19345')

// /**
//  * @param {string} n
//  * @return {string}
//  */
// var nearestPalindromic = function(n) {
//     if(n.length===1) return (parseInt(n) - 1).toString()
//     let left = 0;
//     let right = 0;
//     let value1 = n
//     let value2 = n

//     while(true) {
//         let num = parseInt(value1) - 1;
//         value1 = num.toString()
//         left++;
//         if(isPalindrome(value1)) break;
//     }

//     while(true) {
//         let num = parseInt(value2) + 1;
//         value2 = num.toString()
//         right++;
//         if(isPalindrome(value2)) break;
//     }

//     return left > right ? value2 : value1
// };

// function isPalindrome(n) {
//     let i = 0, j = n.length-1;
//     while(i !== j) if(n[i++] !== n[j--]) return false;
//     return true;
// }
