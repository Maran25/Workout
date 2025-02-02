/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function(s) {
    let depth = 0;
    let swaps = 0;

    for(let c of s) {
        if(c === '[') {
            depth++;
        } else {
            if(depth > 0) depth--;
            else {
                depth++;
                swaps++;
            }
        }
    }
    return swaps;
};

minSwaps(']]][[[')