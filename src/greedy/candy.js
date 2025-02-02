/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let n = ratings.length
    let sum = 0;
    let i = 1;

    while(i < n) {
        if(ratings[i] === ratings[i-1]) {
            sum++;
            i++;
            continue;
        }

        let peak = 1;
        while(i < n && ratings[i] > ratings[i-1]) {
            peak++;
            sum += peak
            i++;
        }

        let down = 1;
        while(i < n && ratings[i] < ratings[i-1]) {
            sum += down;
            dowm++;
            i++;
        }

        if(down > peak) {
            sum -= (down - peak)
        }
    }
    
    return sum;
};

candy([1,0,2])