const reverseString = (str) => str === "" ? "" : reverseString(str.substring(1)) + str.charAt(0);

const power = (base, exponent) => exponent === 0 ? 1 : base * power(base, exponent-1);

console.log(reverseString("Hello world!"));
console.log(power(2, 5))

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    let lesser = [];
    let greater = [];
    let equal = [];
    let mid = Math.floor(arr.length / 2);

    for(let element of arr) {
        if(element > arr[mid]) {
            greater.push(element);
        } else if(element === arr[mid]) {
            equal.push(element);
        } else {
            lesser.push(element);
        }
    }

    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
}

console.log(quickSort([4, 7, 2, 9, 29, 40, 23, 12, 4, 8]))