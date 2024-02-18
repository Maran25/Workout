/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let i = 0;
    let j = s.length - 1;
 
    while(true) {
        if(s[i] === s[j] && i<j) {
            while(s[i] === s[i+1]) i++;
            while(s[j] === s[j-1]) j--;
            i++;
            j--;
        } else {
            break;
        }
    } 
    if(i>j) return 0;
    return j - i;
 };

 console.log(minimumLength("aabccabba"))