/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let queue = [];
    let isNeg = false;

    for(let i=0; i<s.length; i++) {
        let n = s[i];
        let m = s[i] !== ''
        if(s[i] !== '' && !isNaN(s[i])) {
            queue.push(s[i]);
        }
        if(!queue.length && s[i] === '-') isNeg = true;
        if(queue.length > 0 && isNaN(s[i])) break;
    }
    let ans = '';
    console.log(queue)

    while(queue.length) {
        ans += queue.shift();
    }
    return +ans;
};

myAtoi("   -042")