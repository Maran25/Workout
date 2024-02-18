/**
 * @param {string} s
 * @return {string[]}
 */
var printVertically = function(s) {
    let words = s.split(' ');
    let maxLen = words.reduce((acc, cur) => Math.max(acc, cur.length), 0)
    let result = [];

    for(let i=0; i<maxLen; i++) {
        let word = '';
        let removedTrailSpace = '';
        
        for(let j=0; j<words.length; j++) {
            word += words[j][i] ?? ' ';
        }        
        let z = word.length-1;
        while(z >= 0 && word[z] === ' ') z--;
        while(z >=0) {
            removedTrailSpace = word[z] + removedTrailSpace; 
            z--
        };
        result.push(removedTrailSpace);
    }
    return result
};

console.log(printVertically("TO BE OR NOT TO BE"))