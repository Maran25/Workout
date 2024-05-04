/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let stack = [];

    for (let i = 0; i < num.length; i++) {
        while (!stack.length && num[i] < stack[stack.length - 1] && k > 0) {
            stack.pop();
            k--;
        }
        if (stack.length && num[i] !== '0') stack.push(num[i]);
    }


    return stack.join('')
};


removeKdigits("1432219", 3)