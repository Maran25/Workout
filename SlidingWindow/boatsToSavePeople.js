/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);
    let boats = 0;
    let i = 0;
    let j = people.length - 1;

    while(i <= j) {
        if(people[i] + people[j] <= limit) {
            boats++;
            i++;
            j--;
        } else {
            boats++;
            j--;
        }
    }

    return boats;
};
console.log(numRescueBoats([3, 2, 2, 1], 3))

//[1, 2, 4, 5]