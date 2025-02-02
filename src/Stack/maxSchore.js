/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
    if(x > y) {
        const { sum: s1, stack } = findSumForTarget(s, x, 'b', 'a');
        const { sum: s2 } = findSumForTarget(stack.join(''), y, 'a', 'b')
        return s1 + s2;
    } else {
        const { sum: s1, stack } = findSumForTarget(s, y, 'a', 'b');
        const { sum: s2 } = findSumForTarget(stack.join(''), x, 'b', 'a')
        return s1 + s2;
    }
};

function findSumForTarget(s, val, one, two) {
    let i = 0;
    let sum = 0;
    let stack = [];

    while (i < s.length) {
        if (s[i] === one) {
            if (stack[stack.length - 1] === two) {
                stack.pop();
                sum += val;
            } else stack.push(s[i]);
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    return { sum, stack };
}

console.log(maximumGain("aabbaaxybbaabb", 5, 4))