function getDigits1(num, place) {
    let strNum = "" + num;
    return +strNum.split("").reverse().join("").charAt(place);
  }
  
  function getDigits2(num, place) {
    for (let i = 0; i < place; i++) {
      num = num / 10;
    }
    return Math.floor(num % 10);
  }
  
  function getDigits3(num, place) {
    let str = num.toString();
    return +str.charAt(str.length - 1 - place);
  }
  
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
  
  // console.log(mostDigits([23, 43, 1334, 4, 2345, 7654, 23456, 765432, 23456, 432]))
  // console.log(digitCount(12345));
  // console.log(getDigits(12345, 0))
  // console.log(getDigits(12345, 1))
  // console.log(getDigits(12345, 2))
  // console.log(getDigits(12345, 3))
  // console.log(getDigits(12345, 4))
  // console.log(getDigits(12345, 5))
  
  function radixSort(arr) {
    let digits = mostDigits(arr);
  
    for (let i = 0; i < digits; i++) {
      let list = Array.from({ length: 10 }, () => [])
      for (let j = 0; j < arr.length; j++) {
        const digit = getDigits(arr[j], i);
        list[digit].push(arr[j]);
      }
      arr = [].concat(...list);
      // arr.concat(list.flat(2));
    }
    return arr;
  }
  console.log(
    radixSort([23, 43, 1334, 4, 2345, 7654, 23456, 765432, 23456, 432])
  );
  