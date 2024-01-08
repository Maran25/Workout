/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let max = arr1.reduce((acc, cur) => acc > cur ? acc : cur, 0);
    let count = Array(max).fill(0);

    for(let i=0; i<arr1.length; i++) {
        count[arr1[i]]++;
    }

    let index = 0;
    for(let i=0; i<arr2.length; i++) {
        let appeared = count[arr2[i]];
        for(let j=0; j<appeared; j++) {
            arr1[index] = arr2[i];
            index++;
            count[arr2[i]]--
        }
    }

    for(let i=0; i<count.length; i++) {
        let appeared = count[i];
        for(let j=0; j<appeared; j++) {
            arr1[index] = i;
            index++;
            count[i]--
        }
    }
    return arr1;
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))