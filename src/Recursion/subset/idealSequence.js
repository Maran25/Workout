/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function(s, k) {
    let cache = {};
    function helper(i, prev) {
        if(i === s.length) return 0;
        if(cache[i+perv]) return cache[i+perv];
    
        let res = helper(i+1, prev);
    
        if(Math.abs(prev.charCodeAt(0) - s[i].charCodeAt(0)) <= k) {
            res = Math.max(res, 1 + helper(i+1, s[i])) 
            cache[i+perv] = res;
        } 
        return res
    }
    return helper(0, '')
};


longestIdealString('acfgbd', 2)