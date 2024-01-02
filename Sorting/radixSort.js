function getDigits(num, place) {
  return Math.floor(num / Math.pow(10, place)) % 10;
}

const digitCount = (num) => {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (num) => {
  let max = 0;
  for (let element of num) {
    if (digitCount(element) > max) max = digitCount(element);
  }
  return max;
};

function radixSort(arr) {
  let digits = mostDigits(arr);

  for (let i = 0; i < digits; i++) {
    let list = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      const digit = getDigits(arr[j], i);
      list[digit].push(arr[j]);
    }
    arr = [].concat(...list);
  }
  return arr;
}
console.log(radixSort([23, 43, 1334, 4, 2345, 7654, 23456, 765432, 432]));