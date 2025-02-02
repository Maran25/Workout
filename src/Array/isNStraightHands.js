/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
    if (hand.length % groupSize !== 0) return false
    let freq = new Array(Math.max(...hand)+1).fill(0);

    for (let i = 0; i < hand.length; i++) {
        if (freq[hand[i]] === 0) freq[hand[i]] = 1;
        else freq[hand[i]] = freq[hand[i]] + 1;
    }
    let totalcount = 0;

    while (totalcount < hand.length) {
        let i = 1;
        let count = 0;
        let prev = 0;
        let isFirst = true;
        while (true) {
            if(count === groupSize) break;
            if(!isFirst && i !== prev+1) return false
            if (freq[i]) {
                freq[i]--;
                count++;
                prev = i
                totalcount++;
                isFirst = false;
            }
            i++
        }
    }

    return true;
};

console.log(isNStraightHand([0,1], 2))