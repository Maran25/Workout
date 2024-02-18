/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let alphabet = Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index));
    let result = '';

    while(columnNumber > 0) {
        columnNumber--
        let cur = columnNumber%26;
        columnNumber = Math.floor(columnNumber/26);
        result = alphabet[cur] + result;
    }

    return result;
};

console.log(convertToTitle(701))