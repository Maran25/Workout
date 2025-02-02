function sumZero(arr) {
  let i = 0;
  let j = arr.length;

  while (i < j) {
    if (arr[i] + arr[j] === 0) {
      return [arr[i], arr[j]];
    } else if (arr[i] + arr[j] < 0) {
      i++;
    } else {
      j--;
    }
  }
}

function countUniqueValues(arr) {
  if (arr.length === 0) return [];
  let i = 0;
  let j = 1;
  let count = 0;

  while (i < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
    }
    i++;
    j++;
  }
  return count;
}

function maxSubarraySum(arr, sequence) {
  if (arr.length === 0) return null;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let temp = 0;
    for (let j = i; j < i + sequence; j++) {
      temp += arr[j];
    }
    if (temp > sum) sum = temp;
  }
  return sum;
}

function maxSubarraySum1(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 6, 5]));
// console.log(countUniqueValues([-2, -1, -1, 0, 1]));
// console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 2));
console.log(maxSubarraySum1([1, 2, 5, 2, 8, 1, 5], 4));
