function validAnagram(str1, str2) {
    if(str1.length !== str2.length) return false;

    let frequencyOne = {};
    let frequencyTwo = {};

    for(let i = 0; i < str1.length; i++) {
        let char = str1.charAt(i);
        frequencyOne[char] ? frequencyOne[char]++ : frequencyOne[char] = 1;
    }
    for(let i = 0; i < str2.length; i++) {
        let char = str2.charAt(i);
        frequencyTwo[char] ? frequencyTwo[char]++ : frequencyTwo[char] = 1;
    }

    for(let key in frequencyOne) {
        if(frequencyTwo[key] !== frequencyOne[key]) {
            return false;
        } 
    }
    return true;
}

console.log(validAnagram("", ""))
console.log(validAnagram("aaz", "zza"))
console.log(validAnagram("anagram", "nagaram"))
console.log(validAnagram("rat", "car"))
console.log(validAnagram("qwerty", "qeywrt"))