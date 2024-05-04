/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
  let stack = [];
  let curNum = 0;
  let sign = 1;
  let res = 0;
  let i = 0;

  while(i < s.length) {
      if(!isNaN(s[i]) && s[i] !== ' ') {
          let count = 0;
          while(!isNaN(s[i]) && s[i] !== ' ') {
              count = count * 10 + +s[i];
              i++
          }
          curNum = count;
          curNum *= sign;
          res += curNum
      } else if(s[i] === '+' || s[i] === '-') {
          sign = s[i] === '+' ? 1 : -1;
          i++
      } else if(s[i] === '(') {
          stack.push(res);
          stack.push(sign);
          sign = 1;
          curNum = 0;
          res = 0;
          i++
      } else if(s[i] === ')') {
          let sSign = stack.pop()
          let sRes = stack.pop();
          res *= sSign;
          sRes += res
          res = sRes;
          i++
      } else {
          i++
      }
  }
  return res;
};

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));