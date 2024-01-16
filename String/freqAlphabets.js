/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    let alphabets = Array.from({length: 26}, (_, index) => String.fromCharCode(97 + index))
    let result = '';

    for(let i=s.length-1; i>=0; i--) {
        if(s[i] === '#') {
            let index = (s[i-2] + s[i-1])
            result = alphabets[index-1] + result;
            i-=2;
        } else {
            result = alphabets[s[i]-1] + result;
        }
    }
    return result;
};

freqAlphabets("10#11#12")