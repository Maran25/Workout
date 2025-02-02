/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
    let set = new Set(wordList);
    let vis = new Set([beginWord]);
    let result = []

    let queue = [[beginWord, [beginWord]]];

    while (queue.length) {
        let [word, path] = queue.shift();
        if (word === endWord) result.push(path);

        for (let i = 0; i < word.length; i++) {
            for (let j = 97; j < 123; j++) {
                let char = String.fromCharCode(j);
                let newword = word.slice(0, i) + char + word.slice(i + 1)

                if (!vis.has(newword) && set.has(newword)) {
                    queue.push([newword, [...path,newword]])
                    vis.add(newword);
                }
            }
        }
    }
    return result;
};

findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"])