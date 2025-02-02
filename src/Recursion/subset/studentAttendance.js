/**
 * @param {number} n
 * @return {number}
 */
var checkRecord = function(n) {
    return dfs(n, '');
};

function dfs(n, pre) {
    if(pre.length > n) return 1;

    let count = 0;
    let lcount = 0;
    let acount = 0;
    for(let i=0; i<pre.length; i++) {
        if(pre[i] === 'L') {
            lcount++;
            if(lcount >= 3) return 0;
        } else if(pre[i] === 'A') {
            acount++;
            if(acount >= 2) return 0;
            lcount = 0;
        } else {
            lcount = 0;
        }
    }

    count += dfs(n, pre + 'A');
    count += dfs(n, pre + 'L');
    count += dfs(n, pre + 'P');

    return count;
}

checkRecord(2);