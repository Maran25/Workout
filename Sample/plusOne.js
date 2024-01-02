
function plusOne(digits) {
    let carry = 1;
    
    for (let i = digits.length - 1; i >= 0; i--) {
        let sum = digits[i] + carry;
        carry = Math.floor(sum / 10);
        digits[i] = sum % 10;
    }
    
    if (carry === 1) {
        digits.unshift(1);
    }
    
    return digits;
}

var plusOne1 = function (digits) {
  let n = digits.length;

  if (n <= 1 && digits[0] === 9) {
    return [1, 0];
  } else if (n <= 1) {
    return [digits[0] + 1];
  } else if (n > 1 && digits[n - 1] !== 9) {
    digits[n - 1] = digits[n - 1] + 1;
    return digits;
  }

  let i = n - 1;
  while (digits[i] === 9) {
    i--;
  }

  if (i === -1) {
    digits[0] = 1;
    digits[1] = 0;
    let j = i + 2;
    while (j <= n) {
      digits[j] = 0;
      j++;
    }
  } else {
    digits[i] = digits[i] + 1;
    let j = i + 1;
    while (j < n) {
      digits[j] = 0;
      j++;
    }
  }

  return digits;
};



const plusOne2 = (digits) => {
  let carry = 1;
  for(let i=digits.length-1; i>=0; i--) {
    let sum = digits[i] + carry;
    carry = Math.floor(sum/10);
    digits[i] = sum % 10;
  }
  if(carry === 1) {
    digits.unshift(1);
  }
  return digits
}

console.log(plusOne2([2, 8, 9]));