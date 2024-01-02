// var addBinary = function (a, b) {
//   let binaryArr = [1, 2, 4, 8, 16, 32, 64, 128];

//   let sumBoth = 0;
//   let counter = 0;
//   for (let i = a.length - 1; i >= 0; i--) {
//     if (a.charAt(i) === "1") {
//       sumBoth += binaryArr[counter];
//     }
//     counter++;
//   }
//   counter = 0;
//   for (let i = b.length - 1; i >= 0; i--) {
//     if (b.charAt(i) === "1") {
//       sumBoth += binaryArr[counter];
//     }
//     counter++;
//   }

//   let resultInBinary = [];
//   let result = 0;
//   for (let i = binaryArr.length; i >= 0; i--) {
//     if (binaryArr[i] <= sumBoth) {
//       if (result < sumBoth) {
//         result += binaryArr[i];
//         resultInBinary.push("1");
//       } else {
//         resultInBinary.push("0");
//       }
//     }
//   }
//   return resultInBinary.join("");
// };

function addBinary(a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(a.charAt(i));
      i--;
    }

    if (j >= 0) {
      sum += parseInt(b.charAt(j));
      j--;
    }

    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }

  return result;
}

console.log(addBinary("1010", "1011"));
