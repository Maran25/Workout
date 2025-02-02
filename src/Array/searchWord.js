/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ');
    let wordIndex = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (searchWord[wordIndex] === words[i][j]) wordIndex++;
            else if (wordIndex === searchWord.length) return i + 1;
            else break;
        }
        if (wordIndex === searchWord.length) return i + 1;
        wordIndex = 0;
    }

    return -1;
};

isPrefixOfWord("john dumb", "dumb")