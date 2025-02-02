/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(+token);
    } else {
      let two = stack.pop();
      let one = stack.pop();

      if (token === "+") stack.push(one + two)
      else if (token === "*") stack.push(one * two)
      else if (token === "-") stack.push(one - two)
      else if (token === "/") stack.push(Math.round(one / two) === 0 ? 0 : Math.round(one / two))
    }
  }
  return stack[0];
};

evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]);
