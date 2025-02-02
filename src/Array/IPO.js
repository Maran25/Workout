/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
    let arr = [];
    for (let i = 0; i < profits.length; i++) {
        arr[i] = [profits[i], capital[i]]
    }
    arr.sort((a, b) => b[0] - a[0])
    console.log(arr)

    let finalcapital = w;
    let projectstook = 0;

    while (k > 0 && projectstook !== profits.length) {
        for (let i = 0; i < profits.length; i++) {
            if (arr[i][1] <= w) {
                w += arr[i][0]
                finalcapital += arr[i][0]
                projectstook++
                arr.splice(i,1)
                break;
            }
        }
        k--
    }

    return finalcapital
};

findMaximizedCapital(2, 0, [1,2,3], [0,1,1])