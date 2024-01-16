/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let str = ''
    for (let char of s) {
        let charCode = char.charCodeAt(0)
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            str += char
        }
    }
    return checkPalindrome(str.toLowerCase());
};

const checkPalindrome = (str) => {
    if (str.length < 2) return false;

    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        if (str.charAt(start) !== str.charAt(end)) {
            return false
        }
        start++;
        end--;
    }
    return true;
}

console.log(isPalindrome(' '))