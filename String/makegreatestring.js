/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function (s) {
  let arr = s.split("");
  let i = 0;
  while (i < arr.length) {
    if (
      i < arr.length - 1 &&
      arr[i] !== arr[i + 1] &&
      arr[i].toUpperCase() === arr[i + 1]
    ) {
      arr.splice(i, 2);
      if (i) i--;
    } else if (
      i < arr.length - 1 &&
      arr[i] !== arr[i + 1] &&
      arr[i] === arr[i + 1].toUpperCase()
    ) {
      arr.splice(i, 2);
      if (i) i--;
    } else if (
      i > 0 &&
      arr[i] !== arr[i - 1] &&
      arr[i] === arr[i - 1].toUpperCase()
    ) {
      arr.splice(i - 1, 2);
      if (i) i--;
    } else if (
      i > 0 &&
      arr[i] !== arr[i - 1] &&
      arr[i].toUpperCase() === arr[i - 1]
    ) {
      arr.splice(i - 1, 2);
      if (i) i--;
    } else {
      i++;
    }
  }
  return arr.join("");
};

makeGood("jeSsEJ");
