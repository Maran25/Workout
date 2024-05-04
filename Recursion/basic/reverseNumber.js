let sum = 0;
function reverseNumber(num) {
    if(num <= 0) return;
    let rem = num % 10;
    sum = sum * 10 + rem;
    reverseNumber(Math.floor(num/10));
}
reverseNumber(1234)
console.log(sum)