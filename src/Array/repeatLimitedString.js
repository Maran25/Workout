/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function(s, repeatLimit) {
    let count = new Array(26).fill(0);
    
    for(let c of s) {
        let index = c.charCodeAt(0) - 97;
        count[index]++;
    }

    let result = '';

    let i = 25;
    let j = 24;

    while(i>=0) {
        if(count[i] < repeatLimit) {
            result += String.fromCharCode(97 + i).repeat(count[i]);
            count[i] = 0;
            i--
            j--
        } else {
            result += String.fromCharCode(97 + i).repeat(repeatLimit);
            while(count[j] === 0 && j >= 0) j--;
            if(j < 0) break;
            result += String.fromCharCode(97 + j)
            count[i] -= repeatLimit;
            count[j]--;
        }
    }

    return result;
};
//"yxxvvuvusrrqqppopponliihgfeeddcbba"
repeatLimitedString("robnsdvpuxbapuqgopqvxdrchivlifeepy", 2)