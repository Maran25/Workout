function kDistinctChars(str, k) {
  let map = {};
  let max = 0;
  let l = 0;
  let r = 0;

  while (r < str.length) {
    map[str[r]] = (map[str[r]] || 0) + 1;

    if (Object.keys(map).length > k) {
      map[str[l]]--;
      if (!map[str[l]]) delete map[str[l]];
      l++;
    //   map[str[r]]--;
    } else {
      let total = 0;
      for (let key in map) {
        total += map[key];
      }
      max = Math.max(max, total);
    }
    r++
  }
  return max;
}

console.log(kDistinctChars('abbbbbbc', 2))