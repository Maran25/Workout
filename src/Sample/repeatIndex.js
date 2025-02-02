var decodeAtIndex = function(s, k) {
    let repeatCount = 0
    let repeatIndex = 0
    let wordRepeatIndex = s.charAt(s.length-1);
    let input = s.substring(0, s.length-1);
    let wordForming = '';

    for(let i=0; i<input.length; i++) {
        if(input[i]/1 == input[i]) {
            repeatCount = +input[i];
            repeatIndex = i+1;

            let fSubstring = input.slice(0, repeatIndex-1);
            for(let i=1; i<=repeatCount; i++) {
                wordForming += fSubstring
            }
            input = input.slice(repeatIndex, input.length)
            i = 0;
        }
    }
    wordForming += input

    let result = '';
    for(let i=1; i<=wordRepeatIndex; i++) {
        result += wordForming
    }
    if (!repeatCount || !wordRepeatIndex) return s.charAt(k - 1)
    return result.charAt(k - 1)
};

console.log(decodeAtIndex("a2b3c4d5e6f7g8h9"))