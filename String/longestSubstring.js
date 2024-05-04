/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let map = {};

  for (let i = 0; i < s.length; i++) {
    let len = 0;
    let j = i;
    while (j < s.length && !map[s[j]]) {
      len++;
      map[s[j]] = 1;
      j++;
    }
    map = {};
    max = Math.max(max, len);
  }
  return max;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringV2 = function (s) {
  let max = 0;
  let map = {};

  let i = 0;
  let j = 0;
  while (j < s.length) {
    if (map[s[j]] !== undefined) {
      if (map[s[j]] >= i) {
        i = map[s[j]] + 1;
      }
      j++
    } else {
      map[s[j]] = j;
      j++;
      max = Math.max(j - i + 1, max);
    }
  }
  return max;
};

lengthOfLongestSubstringV2("tmmzuxt");
