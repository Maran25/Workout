/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i])
        } else if(s[i] === ')' && stack[s.length-1] === '(') {
            stack.pop()
        } else if(s[i] === '}' && stack[s.length-1] === '{') {
            stack.pop()
        } else if(s[i] === ']' && stack[s.length-1] === '[') {
            stack.pop()
        }
    }
    return stack.length === 0;
};

console.log(isValid('(){}[]'))