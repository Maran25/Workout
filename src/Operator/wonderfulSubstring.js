/**
 * @param {string} word
 * @return {number}
 */
var wonderfulSubstrings = function (word) {
    let cnt = new Array(1024).fill(0); 
    cnt[0] = 1; 
    let mask = 0;
    let ans = 0;
    let chars = word.split('');
    for (let i = 0; i < chars.length; i++) {
        let c = chars[i];
        let idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
        mask ^= 1 << idx;
        ans += cnt[mask];
        for (let j = 0; j < 10; j++) {
            let lookFor = mask ^ (1 << j); 
            ans += cnt[lookFor];
        }
        cnt[mask]++; 
    }
    return ans;
};

wonderfulSubstrings('aba')