/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findKthNumber = function (n, k) {
    let cnt = 0;
    let result = []

    function dfs(cur) {
        if (cur > n)
        if (cnt === k) result.push(cur);

        for (let i = 0; i < 10 && cnt <= k; i++) {
            cnt += (i + 1)
            dfs(cur * 10 + i)
        }
    }

    for (let i = 1; i < 10 && cnt <= k; i++) {
        cnt++
        dfs(i)
    }

    return result[0];
};

findKthNumber(13, 2)