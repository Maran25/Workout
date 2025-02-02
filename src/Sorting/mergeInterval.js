/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let result = [intervals[0]];

    for(let i=1; i<intervals.length; i++) {
        let lastInterval = result[result.length - 1];
        let curInterval = intervals[i];

        if(lastInterval[1] >= curInterval[0]) {
            lastInterval[1] = Math.max(lastInterval[1], curInterval[1])
        } else {
            result.push(curInterval)
        }
    }
    return result
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]))