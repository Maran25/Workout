var findMin = function (nums) {
  let start = 0;
  let end = nums.length - 1;

  if (nums.length <= 1) return nums[0];
  if (nums[nums.length - 1] > nums[0]) return nums[0];

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    // console.log(nums[mid+1])
    // console.log(nums[mid])
    if (nums[mid + 1] < nums[mid]) return nums[mid + 1];
    if (nums[mid] < nums[mid - 1] && nums[0] > nums[mid]) {
      return nums[mid];
    } else if (nums[mid] > nums[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

// console.log(findMin([5,1,2,3,4]))

var reachNumber = function (target) {
  let i = 1;
  let mid = 0;
  while (true) {
    if (mid + i === target) {
      return i;
    } else if (mid + i > target) {
      mid -= i;
    } else {
      mid += i;
    }
    i++;
  }
};

// console.log(reachNumber(2))

function lowerBound(arr, x, n) {
  if (x == 0) return 0;
  let start = 0;
  let end = arr.length - 1;

  while (start !== end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] > x) {
      end = mid - 1;
    } else if (arr[mid] < x) {
      start = mid + 1;
    } else if (arr[mid] <= x) {
      if (arr[mid - 1] === x) {
        start = mid + 1;
      } else {
        return mid;
      }
    }
  }

  return arr[n - 1] < x ? n : end;
}

// console.log(lowerBound([1, 2, 4, 3, 3, 3, 3, 5, 6, 7, 9, 10 , 12], 3, 13))
// console.log(lowerBound([1, 2, 2, 3], 4, 4))

function numberOfRotation(arr) {
  let start = 0;
  let end = arr.length - 1;
  if (arr[start] <= arr[end]) return 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid - 1] > arr[mid]) {
      return mid;
    } else if (arr[mid] >= arr[0]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// console.log(numberOfRotation([9, 1, 5, 6, 7]))

function nthRoot(n, m) {
  let start = 0;
  let end = m - 1;
  let ans = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let power = Math.pow(n, n);
    if (power <= m) {
      ans = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return ans;
}

// console.log(nthRoot(3, 27))

var minEatingSpeed = function(piles, h) {
  let start = 1;
  let end = findMax(piles);
  let ans = -1;

  while(start <= end) {
      let mid = Math.floor((start+end)/2);
      const timeTaken = findTime(piles, mid);

      if(timeTaken <= h) {
          ans = mid;
          end = mid - 1;
        } else {
        start = mid + 1;
      }
  }
  return ans;
};

function findTime(arr, k) {
  let ans = 0;
  for(let i=0; i<arr.length; i++) {
      ans += Math.ceil(arr[i]/k);
  }
  return ans;
}

function findMax(arr) {
  let ans = -1;

  for(let i=0; i<arr.length; i++) {
      if(arr[i] > ans) {
          ans = arr[i];
      }
  }
  return ans;
}


var peakIndexInMountainArray = function(arr) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
      let mid = Math.floor((start+end)/2);

      if(arr[mid] > arr[start+1]) {
          start = mid + 1;
      } else if(arr[mid] > arr[start+1]) {
          end = mid - 1;
      }
  }
  return start
};

  // console.log(peakIndexInMountainArray([1, 0, 1]))


  function findPeakV2(arr) {
    let start = 0;
    let end = arr.length - 1;

    while(start <= end) {
        let mid = Math.floor((start+end)/2);

        if(arr[mid] < arr[mid-1]) {
            return mid;
        } else if(arr[mid] > arr[mid-1]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let peakIndex = findPeak(nums);
  let isFound = bs(nums, target, 0, peakIndex);

  if(!isFound) {
      return bs(nums, target, peakIndex+1, nums.length-1)
  }
  return isFound;
};

function bs(arr, target, start, end) {
  if(start > end) return false;
  let mid = Math.floor((start+end)/2)

  if(arr[mid] === target) {
      return true;
  } else if(arr[start] === arr[mid] && arr[mid] === arr[end]) {
      start++;
      end--;
  } else if(arr[mid] > target) {
      return bs(arr, target, start, mid - 1)
  } else {
      return bs(arr, target, mid+1, end)
  }
}

function findPeak(arr) {
  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {
      let mid = Math.floor((start+end)/2);

      if(arr[start] === arr[mid] && arr[mid] === arr[end]) {
        start++;
        end--;
        continue;
      }

      if(arr[mid] > arr[mid+1]) {
          return mid;
      } else if(arr[mid] >= arr[0]) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return -1;
}

console.log(search([1,0,1,1,1], 0))