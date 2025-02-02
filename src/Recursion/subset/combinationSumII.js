/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const map = new Map();
    findCombination(candidates, 0, map, new Array(), 0, target);
    console.log(map)
};

function findCombination(candidates, index, map, temp, sum, target) {
    if(sum > target) return;
    if(index > candidates.length) return;
    if(sum === target) {
        temp.sort((a,b) => a - b);
        map.set(temp.join(''), [...temp]);
        return;
    }

    temp.push(candidates[index])
    findCombination(candidates, index+1, map, temp, sum+candidates[index], target)
    temp.pop()
    findCombination(candidates, index+1, map, temp, sum, target)
}

combinationSum2([2,5,2,1,2], 5)