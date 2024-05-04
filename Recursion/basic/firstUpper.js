function firstUpper(str, i) {
    if(i === str.length) return -1;

    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) return str.charAt(i);

    return firstUpper(str, i+1)
} 

console.log(firstUpper('hElloorld', 0))