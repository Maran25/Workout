/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    let charArray = new Array(26).fill(0).map((_, i) => String.fromCharCode(i + 97))

    let map = new Map();
    for (let i = 0; i < cost.length; i++) map.set(original[i] + changed[i], cost[i]);

    let minimum = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;
        let queue = [];
        let minDist = Infinity;
        let visited = new Set();

        for (let char of charArray) {
            let key = source[i] + char
            if (map.has(key)) {
                queue.push([key, map.get(key)]);
            }
        }

        while (queue.length) {
            const [key, dist] = queue.pop();
            if (key[1] === target[i]) {
                minDist = Math.min(minDist, dist);
                continue;
            }

            for (let char of charArray) {
                let newkey = key[1] + char
                if (map.has(newkey) && !visited.has(newkey)) {
                    queue.push([newkey, map.get(newkey) + dist]);
                    visited.add(newkey)
                }
            }
        }
        if(minDist === Infinity) return -1;
        minimum += minDist
    }
    return minimum
};

minimumCost("aaadbdcdac", "cdbabaddba", ["a","c","b","d","b","a","c"], ["c","a","d","b","c","b","d"], [7,2,1,3,6,1,7])

///////////////////////////////////////
/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function (source, target, original, changed, cost) {
    // Create a map to store the transformation costs
    let map = new Map();
    for (let i = 0; i < cost.length; i++) {
        let key = original[i] + changed[i];
        // if (!map.has(key) || map.get(key) > cost[i]) {
            map.set(key, cost[i]);
        // }
    }

    let totalCost = 0;

    for (let i = 0; i < source.length; i++) {
        if (source[i] === target[i]) continue;  // If characters are the same, skip

        let pq = [[source[i], 0]]
        let dist = new Map();
        dist.set(source[i], 0);

        let found = false;

        while (pq.length) {
            let [currentChar, currentDist] = pq.pop();

            if (currentChar === target[i]) {
                totalCost += currentDist;
                found = true;
                break;
            }

            for (let j = 0; j < 26; j++) {
                let nextChar = String.fromCharCode(97 + j);
                let key = currentChar + nextChar;

                if (map.has(key)) {
                    let newDist = currentDist + map.get(key);
                    if (!dist.has(nextChar) || newDist < dist.get(nextChar)) {
                        dist.set(nextChar, newDist);
                        pq.push([nextChar, newDist]);
                    }
                }
            }
            pq.sort((a,b) => b[1] - a[1])
        }

        if (!found) return -1; 
    }

    return totalCost;
};