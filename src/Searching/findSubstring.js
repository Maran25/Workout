function findSubstring(str, substring) {
    let counter = 0;
    for(let i = 0; i < str.length; i++) {
        if(str.charAt(i) === substring.charAt(0)) {
            let length = 0;
            while(length < substring.length) {
                if(str.charAt(i+length) !== substring.charAt(length)) {
                    break;
                }
                length++;
            }
            if(length === substring.length) counter++;
        }
    }
    return counter;
}

console.log(findSubstring("wowomgzfomg", "omg"));