function minimumWindowSubstring(s, t) {
    let set = {};
    for (let n of t) set[n] = (set[n] || 0) + 1

    let tlength = 0;
    let map = {};
    let result = s;
    let min = s.length;
    let l = 0;
    let r = 0;

    while (r < s.length) {
        map[s[r]] = (map[s[r]] || 0) + 1;
        if (map[s[r]] && set[s[r]] && map[s[r]] === set[s[r]]) tlength++;

        while (tlength > set.size) {
            map[s[l]]--;
            if (map[s[l]] !== set[s[l]]) tlength--;
            if (!map[s[l]]) delete map[s[l]]
            l++;
        }

        while (tlength === set.size) {
            if (r - l + 1 < min) {
                result = s.slice(l, r + 1);
                min = r - l + 1;
            }

            map[s[l]]--;
            if (map[s[l]] !== set[s[l]]) tlength--;
            if (!map[s[l]]) delete map[s[l]];
            l++;
        }
        r++;
    }

  return result;
}

minimumWindowSubstring("ADOBECODEBANC", "AABC");
