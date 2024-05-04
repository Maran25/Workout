/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let timetaken = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            timetaken += Math.min(tickets[i], tickets[k])
        } else {
            timetaken += Math.min(tickets[i], tickets[k] - 1)
        }
    }
    return timetaken;
};

timeRequiredToBuy([3, 8, 5, 8], 2);
