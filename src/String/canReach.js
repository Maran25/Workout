/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function(s, minJump, maxJump) {
    let i = 0;

    while(i < s.length) {
        if(s[i+maxJump] === '0') {
            i+=maxJump;
        } else if(s[i+minJump] === '0') {
            i+=minJump;
        } else {
            return false;
        }
    }

    return true;
};

console.log(canReach("011010", 2, 3))