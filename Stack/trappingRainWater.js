/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let stack = [];
    let count = 0;

    for(let i=0; i<height.length; i++) {
        if(i > 0 && height[i] < height[i-1]) {
            stack.push({index: i-1, height: height[i-1]});
        } 
        if(i > 0 && height[i] > height[i-1]) {
            if(stack.length && stack[stack.length-1].height <= height[i]) {
                count += (i - stack[stack.length-1].index - 1) * (stack[stack.length-1].height - height[i-1]);
                stack.pop();
            }
            if(stack.length && stack[stack.length-1].height >= height[i]) {
                count += (i - stack[stack.length-1].index - 1) * (stack[stack.length-1].height - height[i]);
            }
        }
    }
    return count;
};

trap([4,2,0,3,2,5])