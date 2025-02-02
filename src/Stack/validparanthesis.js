/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let stack = [];

    for(let i=0; i<s.length; i++) {
        if(s[i] === ')') {
            let n = stack.length;
            if(stack[n-1] === '(') stack.pop();
            else if(stack[n-1] === '*') {
                if(s[i+1] === ')') {
                    if(stack.length > 0 && stack[n-2] === '(') stack.pop();
                } else {
                   stack.pop() 
                   stack.pop() 
                }
            }
        } else {
            stack.push(s[i])
        }
    }
    console.log(stack)
    return !stack.length
}

checkValidString(
  "((((()(()()()*()(((((*)()*(**(())))))(())()())(((())())())))))))(((((())*)))()))(()((*()*(*)))(*)()"
);
