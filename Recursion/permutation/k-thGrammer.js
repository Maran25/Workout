var kthGrammar = function (n, k) {
    return helper(k, '0');
};

function helper(k, ans) {
    if (k === 1) {
        return +ans;
    }

    let res = ''
    for (let i = 0; i < ans.length; i++) {
        res += ans[i] === '0' ? '01' : '10';
    }
    return helper(k - 1, res);
}

// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number}
//  */
// var kthGrammar = function (n, k) {
//     if(k > n) return 0;
//     return helper(k, 0);
// };

// function helper(k, ans) {
//     if (k === 1) {
//         return ans;
//     }

//     return helper(k - 1, ans + !ans);
// }

kthGrammar(4, 4);