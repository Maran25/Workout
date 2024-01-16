/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
var maxRepeating = function(sequence, word) {
    let count = 0;

    for(let i=0; i<sequence.length; i++) {
        if(sequence[i] === word[0]) {
            let isSequence = true;
            for(let j=0; j<word.length; j++) {
                if(sequence[i] === word[i]) {
                    i++;
                    j++;
                } else {
                    isSequence = false;
                }
            }
            if(isSequence) count++;
        }
    }
    return count;
};

console.log(maxRepeating('ababc', 'ab'))