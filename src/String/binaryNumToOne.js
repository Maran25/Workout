/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let count = 0;
  let i = s.length - 1;

  while (s !== "1") {
    if (s[i] === "0") {
      s = s.slice(0, -1);
      i--;
    } else {
      let j = s.length - 1;
      let totzero = "";

      while (s[j] === "1") {
        j--;
        totzero += "0";
      }
      let n = "";
      if (j < 0) {
        i++;
        n = "";
      } else {
        n = s.slice(0, j);
      }
      s = n + "1" + totzero;
    }
    count++;
  }
  return count;
};

numSteps("1101");
