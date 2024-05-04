/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
    let max = 0;
    max = largestRectangleArea(matrix[0]);
    let temp = matrix[0];
  
    for (let i = 1; i < matrix.length; i++) {
      let curTemp = [];
      for (let j = 0; j < matrix[0].length; j++) {
        curTemp[j] = +matrix[i][j] === 0 ? 0 : +matrix[i][j] + +temp[j];
      }
      let curMax = largestRectangleArea(curTemp);
      temp = curTemp;
      max = Math.max(max, curMax);
    }
    return max;
  };
  
  var largestRectangleArea = function (heights) {
    let n = heights.length;
    let leftMax = [];
    let rightMax = [];
    let st = [];
  
    for (let i = 0; i < n; i++) {
      while (st.length && heights[st[st.length - 1]] >= heights[i]) st.pop();
      if (!st.length) leftMax[i] = 0;
      else leftMax[i] = st[st.length - 1] + 1;
      st.push(i);
    }
  
    st = [];
  
    for (let i = n - 1; i >= 0; i--) {
      while (st.length && heights[st[st.length - 1]] >= heights[i]) st.pop();
      if (!st.length) rightMax[i] = n - 1;
      else rightMax[i] = st[st.length - 1] - 1;
      st.push(i);
    }
  
    let max = 0;
  
    for (let i = 0; i < n; i++) {
      max = Math.max(max, (rightMax[i] - leftMax[i] + 1) * heights[i]);
    }
    return max;
  };
  
  maximalRectangle([
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"],
  ]);
  