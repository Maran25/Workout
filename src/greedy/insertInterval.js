/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let result = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let lastInterval = result[result.length - 1];
        let curInterval = intervals[i];

        if (lastInterval[1] >= newInterval[0]) {
            lastInterval[0] = Math.min(lastInterval[0], newInterval[0]);
            lastInterval[1] = Math.max(lastInterval[1], newInterval[1]);
        }// else {
        result.push(intervals[i])
        // }
    }

    return result;
};

insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])