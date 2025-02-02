/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let map = new Map();
    let map2 = new Map();

    for (let s of s1) map.set(s, (map.get(s) || 0) + 1);

    let s = 0;
    let e = 0;

    while (e < s2.length) {
        let val = s2[e];
        map2.set(val, (map2.get(val) || 0) + 1);

        while (map2.size && (!map.has(val) || (map.has(val) && (map2.get(val) > map.get(val))))) {
            // while (s !== e+1) {
                map2.set(s2[s], map2.get(s2[s]) - 1);
                if (!map2.get(s2[s])) map2.delete(s2[s]);
                s++;
            // }
        }

        if (map.size === map2.size) {
            let isall = true;
            for (let [key, val] of map2) {
                if (map.get(key) !== val) isall = false;
            }
            if (isall) return true;
        }
        e++;
    }

    return false;
};



checkInclusion("ab", "eidbaooo");
