var guessNumber = function (n) {
  let sortedArr = Array.from({ length: n }, (_, index) => index + 1);
  return binarySearch(sortedArr, 0, n);
};

function binarySearch(arr, start, end) {
  if (start > end) return -1;

  let mid = arr[Math.floor((start + end) / 2)];
  let target = guess(arr[mid]);

  if (target === 0) {
    return arr[mid];
  } else if (target === 1) {
    return binarySearch(arr, mid + 1, end);
  } else if (target === -1) {
    return binarySearch(arr, start, mid - 1);
  }
}

// console.log(guessNumber(1))

function isBadVersion(n) {
  return n >= 1;
}

var solution = function (isBadVersion) {
  return binarySearch(isBadVersion, 0, 4, 0);
};

function binarySearch(isBadVersion, start, end, prev) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (isBadVersion(mid) && !isBadVersion(prev)) {
    return mid;
  } else if (isBadVersion(mid)) {
    return binarySearch(isBadVersion, start, mid - 1, mid);
  } else {
    return binarySearch(isBadVersion, mid + 1, end, mid);
  }
}

// console.log(solution(isBadVersion));

function ceilingOfNumber(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (target === arr[mid]) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    }
  }
  return start;
}

// console.log(ceilingOfNumber([2, 3, 5, 9, 14, 16, 18], 4))

var mySqrt = function (x) {
  let start = 0;
  let end = x - 1;
  let count = 0;

  while (start != end) {
    let mid = Math.floor((end + start) / 2);
    end = mid;
    count++;
  }
  return count;
};

// console.log(mySqrt(8));

///IMPORTANT REMEMBER TO DEBUG THIS WHEN YOU RETURN
//NO 1608
/**
 * @param {number[]} nums
 * @return {number}
 */
var specialArray = function (nums) {
  let arr = quickSort(nums);
  for (let i = 0; i <= arr[arr.length - 1]; i++) {
    let val = bs(arr, i);
    if (arr.length - val === i) return i;
  }
  return -1;
};

// function binarySearch(nums, target, start, end) {
//     if (start > end) return end;
//     let mid = Math.floor((end + start) / 2);

//     if (nums[mid] >= target) {
//         return binarySearch(nums, target, start, mid-1)
//     } else {
//         return binarySearch(nums, target, mid + 1, end)
//     }
// }
function bs(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] >= target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

function quickSort(nums) {
  if (nums.length <= 1) return nums;

  let lesser = [];
  let greater = [];
  let pivot = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (pivot > nums[i]) {
      lesser.push(nums[i]);
    } else {
      greater.push(nums[i]);
    }
  }
  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}

// console.log(specialArray([0,4,3,0,4]))

var search = function (nums, target) {
  let divide = findPeak(nums);
  if (divide === -1) {
    return binarySearch(nums, target, 0, nums.length - 1);
  }

  if (nums[divide] === target) return divide;

  if (target >= nums[0]) {
    return binarySearch(nums, target, 0, divide - 1);
  }
  return binarySearch(nums, target, divide + 1, nums.length - 1);
};

function binarySearch(arr, target, start, end) {
  if (start > end) return false;

  const mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return true;
  } else if (arr[mid] < target) {
    return binarySearch(arr, target, mid + 1, end);
  } else {
    return binarySearch(arr, target, start, mid - 1);
  }
}

var findPeak = function (arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > arr[mid + 1] || arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1], 2));
// console.log(search([3,1], 3));

var singleNonDuplicate = function (nums) {
  const ans = findsingle(nums, 0, nums.length - 1);
  return ans;
};

function findsingle(arr, start, end) {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);
  
  if (arr[mid - 1] !== arr[mid] && arr[mid + 1] !== arr[mid]) {
      return arr[mid]
  } else if (arr[mid - 1] === arr[mid]) {
      if ((mid - start) % 2 !== 0) {
          return findsingle(arr, mid + 1, end)
      } else {
          return findsingle(arr, start, mid-2)
      }
  } else if (arr[mid + 1] === arr[mid]) {
       if ((end - mid) % 2 !== 0) {
          return findsingle(arr, start, mid-1)
      } else {
          return findsingle(arr, mid + 2, end)
      }
  }
}

var searchInsert = function(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while(start <= end) {
      let mid = Math.floor((start+end)/2);

      if(nums[mid] === target) {
          return mid;
      } else if(nums[mid] > target) {
          end = mid - 1;
      } else {
          start = mid + 1;
      }
  }
  return end + 1;
};

console.log(searchInsert([1,3,5,6], 2))
