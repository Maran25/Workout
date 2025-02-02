/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0;
    
    for(let pattern of patterns) {
        if(isSequence(pattern, word)) count++
    }

    return count;
};

function isSequence(word1, word2) {
    for(let i=0; i<word2.length; i++) {
        if(word2[i] === word1[0]) {
            let isSequence = true;
            for(let j=0; j<word1.length; j++) {
                if(word1[j] !== word2[j+i]) isSequence = false;
            }
            if(isSequence) return true;
        }
    }
    return false
}

console.log(numOfStrings(["glgpqusg","qsyrgdelg","akcsg","e","fnmi","gzqsyrgdelg","lapwypxrmaydjr","s","iwig"], "numiwigzqsyrgdelgxs"))