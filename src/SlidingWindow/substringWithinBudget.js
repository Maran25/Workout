/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function (s, t, maxCost) {
    let i = 0;
    let j = 0;
    let cost = 0;
    let count = 0;

    while (j < t.length) {
        let costToChange = Math.abs(s[j].charCodeAt(0) - t[j].charCodeAt(0));
        if (cost + costToChange > maxCost) {
            cost -= Math.abs(s[i].charCodeAt(0) - t[i].charCodeAt(0));
            i++;
            count--;
        } else if (cost + costToChange < maxCost) {
            cost += costToChange
            count++;
        }
        j++
    }
    return count;
};

equalSubstring("abcd", "cdef", 3)