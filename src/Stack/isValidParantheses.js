/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];

    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (char === ')') {
                if (stack.length === 0 || stack.pop() !== '(') return false;
            }
            if (char === '}') {
                if (stack.length === 0 || stack.pop() !== '{') return false;
            }
            if (char === ']') {
                if (stack.length === 0 || stack.pop() !== '[') return false;
            }
        }
    }
    return stack.length === 0;
};

console.log(isValid('(){}[]'))