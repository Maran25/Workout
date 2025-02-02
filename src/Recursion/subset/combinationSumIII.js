/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let result = [];
    helper(n, k, 1, 0, result, []);
    return result;
};

function helper(target, k, index, curSum, result, temp) {
    if(temp.length === k) return;
    if(target === curSum) return result.push(temp.slice());

    for(let i=index; i<=9; i++) {
        if(i >= curSum) {
            temp.push(i);
            helper(target, k, i+1, curSum+i, result, temp);
            temp.pop();
        }
    }
}

combinationSum3(3, 9)