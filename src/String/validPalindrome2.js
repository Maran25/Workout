/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let start = 0;
    let end = s.length - 1;
    let doesUsed = false;

    while(start < end) {
        let first = s[start];
        let last = s[end];
        let oneBeforeLast = s[end-1]
        let oneAfterFirst = s[start+1]
        
        if(first === last) {
            start++;
            end--;
        } else if(!doesUsed && first === oneBeforeLast) {
            end-=2;
            start++;
            doesUsed = true;
        } else if(!doesUsed && oneAfterFirst === last) {
            end--;
            start+=2;
            doesUsed = true;
        } else {
            return false;
        }
    }
    return true;
};

console.log(validPalindrome("ebcbbececabbacecbbcbe"))