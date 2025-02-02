/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let start = Math.max(...weights);
    let end = findHalfWeight(weights);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let daysTook = isPossible(weights, mid)

        if (daysTook <= days) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
};

function isPossible(weights, capacity) {
    let sum = 0;
    let total = 1;

    for(let i=0; i<weights.length; i++) {
        if(sum+weights[i] > capacity) {
            total++;
            sum = weights[i];
        } else {
            sum += weights[i];
        }
    }
    return total;
}

function findHalfWeight(weights) {
    const half = weights.reduce((acc, cur) => acc + cur, 0)
    return Math.floor(half / 2);
}

var shipWithinDaysV2 = function (weights, days) {
    let start = weights.reduce((acc, cur) => acc < cur ? acc : cur, Infinity);
    let end = weights.reduce((acc, cur) => acc + cur, 0);
    
    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(isPossibleToShip(weights, mid, days)) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}

function isPossibleToShip(weights, capacity, days) {
    let count = 0;
    let sum = 0;

    for(let i=0; i<weights.length; i++) {        
        if(weights[i] + sum <= capacity) {
            sum += weights[i];
        } else {
            sum = weights[i];
            count++;
        }
    }
    count++
    return count <= days;
}

console.log(shipWithinDaysV2([1,2,3,1,1], 4))