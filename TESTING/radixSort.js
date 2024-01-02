function getMostDigits(arr) {
  let len = Number.NEGATIVE_INFINITY;
  for (let num of arr) {
    len = Math.max(len, num);
  }
  return Math.floor(Math.log10(len) + 1);
}

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
}

function radixSort(arr) {
  let mostDigits = getMostDigits(arr);
  for (let i = 0; i < mostDigits; i++) {
    let list = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      let digit = getDigit(arr[j], i);
      list[digit].push(arr[j]);
    }
    arr = [].concat(...list);
  }
  return arr;
}

console.log(
  radixSort([
    2, 54, 23, 43, 12, 54, 2345, 5432, 23456, 65432, 2345, 54, 32, 654,
  ])
);
