/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  let result = s.split("");

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      let index = result[j].charCodeAt(0) + shifts[i-1]%26;
      if (index > 122) {
        index -= 26;
      }
      result[j] = String.fromCharCode(index);
    }
  }
  return result.join("");
};

console.log(shiftingLetters("abc", [3, 5, 9]));
