function add(a, b) {
    while (b !== 0) {
        let carry = a & b;   // Carry contains common set bits of a and b
        a = a ^ b;            // Sum of bits of a and b where at least one of the bits is not set
        b = carry << 1;       // Carry is shifted by one so that adding it to a gives the required sum
    }
    return a;
}

console.log(add(5, 7));  // Output: 12
console.log(add(15, 25));  // Output: 40
