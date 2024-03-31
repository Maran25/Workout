/**
 * @param {string[]} words
 * @return {string[]}
 */
var findAllConcatenatedWordsInADict = function (words) {
  let map = new Set(words);
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isValidWord(words[i], map)) {
        result.push(words[i]);
    }
  }
  return result;
};

function isValidWord(word, map) {
    for(let i=0; i<word.length; i++) {
        let prefix = word.substring(0, i);
        let suffix = word.substring(i+1, word.length);
        if(map.has(prefix) && (map.has(suffix) || isValidWord(suffix, map))) return true;
    }
    return false;
}

findAllConcatenatedWordsInADict([
  "catsdogcats",
  "cat",
  "cats",
  "dog",
  "dogcatsdog",
  "hippopotamuses",
  "rat",
  "ratcatdogcat",
]);
