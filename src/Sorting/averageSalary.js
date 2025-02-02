/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let total = 0;

    for(let i=1; i<salary.length; i++) {
        min = Math.min(min, salary[i])
        max = Math.min(max, salary[i])
    }

    for(let i=0; i<salary.length; i++) {
        if(salary[i] === min) {
            continue;
        } else if(salary[i] == max) {
            continue;
        } else {
            total += salary[i]
        }
    }

    return total
};

console.log(average([4000,3000,1000,2000]))