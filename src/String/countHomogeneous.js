/**
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let result = 0;
    let series = 1;

    for(let i=0; i<s.length; i++) {
        if(s[i]===s[i+1]) {
            series++;
        } else {
            result += series * ((series+1)/2);
            series = 1;
        }
    }
    return result;
};

console.log(countHomogenous("abbcccaa"))