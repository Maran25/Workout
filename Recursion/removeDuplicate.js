function removeConsecutiveDuplicate(str, i) {
    if(i === str.length) return '';

    if(str.charAt(i) === str.charAt(i + 1)) {
        return removeConsecutiveDuplicate(str, i + 1);
    }

    return str.charAt(i) + removeConsecutiveDuplicate(str, i + 1);
}

console.log(removeConsecutiveDuplicate('aaaabbbbaaaabbbbccccjjjddd', 0))