function groupAnagrams(strs) {
    function strSort(s) {
        const counter = new Array(26).fill(0);
        for (const c of s) {
            counter[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        let t = '';
        for (let c = 0; c < 26; c++) {
            t += String.fromCharCode(c + 'a'.charCodeAt(0)).repeat(counter[c]);
        }
        return t;
    }

    const mp = new Map();
    for (const s of strs) {
        const sortedStr = strSort(s);
        if (mp.has(sortedStr)) {
            mp.get(sortedStr).push(s);
        } else {
            mp.set(sortedStr, [s]);
        }
    }

    const anagrams = [...mp.values()];
    return anagrams;
}

// Example usage:
const input1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output1 = groupAnagrams(input1);
console.log(output1);