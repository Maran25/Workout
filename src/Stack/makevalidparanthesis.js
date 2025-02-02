/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    let ans = [];
    let stack = [];

    for(let i=0; i<s.length; i++) {
        if(s[i] === '(') {
            ans[i] = ''
            stack.push(i);
        } else if(s[i] === ')') {
            if(stack.length) {
                ans[stack.pop()] = '('
                ans.push(s[i]);
            }
        } else {
            ans.push(s[i])
        }
    }

    return ans.join('');
};

minRemoveToMakeValid("))((")