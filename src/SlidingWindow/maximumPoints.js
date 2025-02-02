/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
    let leftSum = 0; 
    let rightSum = 0;
    let max = 0;

    for(let i=0; i<k; i++) {
        leftSum += cardPoints[i]
    }
    max = leftSum;

    let j=cardPoints.length-1;

    for(let i=k-1; i>=0; i--) {
        leftSum -= cardPoints[i];
        rightSum += cardPoints[j];
        max = Math.max(max, leftSum + rightSum)
        j--;
    }
    return max;
};

maxScore([2,2,2], 2)