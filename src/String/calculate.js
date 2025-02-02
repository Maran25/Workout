/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let num = [];
    let expression = [];

    for(let char of s) {
        if(!isNaN(char) && char !== ' ') num.push(+char);
        if(char === '+' || char === '/' || char === '*' || char === '-') expression.push(char)
    }

    console.log(num)
    console.log(expression);

    return 0
};