/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let map = {};
    let max = 0
    let i = 0;
    let j = 0;

    while (j < fruits.length) {
        map[fruits[j]] = j;
        if (Object.keys(map).length > 2) {
            i = map[fruits[j-1]];
            while(fruits[i-1] === fruits[map[fruits[j-1]]]) i--
            map = {};
            map[fruits[j-1]] = j-1;
        } else j++
        max = Math.max(max, j - i)
    }
    return max;
};

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruitV2 = function (fruits) {
    let map = {};
    let max = 0
    let i = 0;
    let j = 0;

    while (j < fruits.length) {
        map[fruits[j]];
        if (Object.keys(map).length > 2) {
            map[fruits[i]]--;
            if(map[fruits[i]] === 0) delete map[fruits[i]]
            i++;
        }
        if(Object.keys(map).length <= 2) max = Math.max(max, j - i + 1);
        j++
    }
    return max;
};

totalFruitV2([1,2,3,2,2])