/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let i = 0;
    let j = s.length - 1;
    let leftCount = 0;
    let rightCount = 0;

    while(i < j) {
        if(isAlphabet(s[i])) leftCount++;
        if(isAlphabet(s[j])) rightCount++;
        i++;
        j--;
    }
    return leftCount === rightCount;
};

function isAlphabet(letter) {
    letter = letter.toLowerCase();
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true;
    } else {
        return false
    }
}

console.log(halvesAreAlike('book'))