/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let numStack = [];
    let charStack = [];
    let result = ''
    let i = 0;

    while(i < s.length) {
        if(s[i] >= '0' && s[i] <= '9') {
            let num = 0;
            while(s[i] >= '0' && s[i] <= '9') {
                num = 10 * num + +s[i]
                i++
            }
            numStack.push(num)
        } else if(s[i] === '[') {
            charStack.push(result);
            result = ''
            i++
        } else if(s[i] === ']') {
            let temp = charStack.pop()
            let count = numStack.pop();
            for(let i=0; i<count; i++) {
                temp += result;
            }
            result = temp;
            i++
        } else {
            result += s[i++]
        }
    }
    console.log({ numStack, charStack })
    return result;
};

decodeString("2[abc]3[cd]ef")