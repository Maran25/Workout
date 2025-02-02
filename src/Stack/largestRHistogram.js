/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let max = 0;

    for(let i=0; i<heights.length; i++) {
        let lcount = 0;
        let rcount = 0;

        while(heights[i-lcount-1] >= heights[i]) lcount++
        while(heights[i+rcount+1] >= heights[i]) rcount++;

        lcount = lcount > 0 ? lcount+1 : lcount
        rcount = rcount > 0 ? rcount+1 : rcount

        if(!lcount && !rcount) max = Math.max(max, heights[i]);
        else if(lcount && rcount) max = Math.max(max, heights[i] * (lcount+rcount-1))
        else max = Math.max(max, heights[i] * (lcount+rcount))
    }
    return max;
};

largestRectangleArea([2, 1, 2])