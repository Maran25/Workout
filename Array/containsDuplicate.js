var containsDuplicate = function (nums) {
  let object = {};

  for (let i = 0; i < nums.length; i++) {
    if (!object[nums[i]]) {
      object[nums[i]] = true;
    } else {
      return false;
    }
  }
  return true;
};

// console.log(containsDuplicate([1, 2, 3, 1]))

var twoSum = function (nums, target) {
  let object = new Map();
  for (let i = 0; i < nums.length; i++) {
    object.set(nums[i], i);
  }
  for (let key of object.keys()) {
    let remaining = target - key;
    if (object.has(remaining)) {
      return [object.get(remaining), object.get(key)];
    }
  }
  return [-1, -1];
};

// console.log(twoSum([2, 7, 11, 15], 9))

// var groupAnagrams = function (strs) {
//   let object = new Map();
//   for (let i = 0; i < strs.length; i++) {
//     let sorted = strs[i].split('').sort().join('');
//     if(object.has(sorted)) {
//         object.get(sorted).push(strs[i]);
//     } else {
//         object.set(sorted, [strs[i]])
//     }
//   }

//   let result = [];
//   for (let value of object.values()) {
//     result.push(value);
//   }
//   return result;
// };

function groupAnagrams(strs) {
  const anagramGroups = {};
  for (const str of strs) {
    const charCount = Array(26).fill(0);
    for (const char of str) {
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    const key = charCount.join("-");
    if (!anagramGroups[key]) {
      anagramGroups[key] = [];
    }
    anagramGroups[key].push(str);
  }
  return Object.values(anagramGroups);
}

// console.log(groupAnagrams(["reed", "", "tops", "reed", "opts", ""]));
// console.log(isAnagram('tea', 'ate'))

function productExceptSelf(nums) {
  const n = nums.length;
  const output = new Array(n);
  const prefixProducts = new Array(n);
  const suffixProducts = new Array(n);

  let product = 1;
  for (let i = 0; i < n; i++) {
    prefixProducts[i] = product;
    product *= nums[i];
  }
  product = 1;
  for (let i = n - 1; i >= 0; i--) {
    suffixProducts[i] = product;
    product *= nums[i];
  }
  for (let i = 0; i < n; i++) {
    output[i] = prefixProducts[i] * suffixProducts[i];
  }

  return output;
}

// console.log(productExceptSelf([1,2,3,4]))

var longestConsecutive = function (nums) {
  let max = 0;
  let obj = {};

  for (let num of nums) {
    obj[num] = num;
  }
  console.log(obj);

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let count = 1;
    while (obj[num + 1]) {
      count++;
      num++;
    }
    max = Math.max(max, count);
  }
  return max;
};

// console.log(longestConsecutive([4, -1, 3, 2]));

// var twoSum = function(numbers, target) {
//   for(let i=0; i<numbers.length; i++) {
//       let num = numbers[i];
//       let pair = binarySearch(i+1, numbers.length, numbers, target-num)
//       console.log("NUM:",num);
//       console.log("PAIR:",pair);
//       if(num+numbers[pair] === target) return [i, pair]
//   }
//   return [-1, -1]
// };

// function binarySearch(start, end, numbers, target) {
//   if(start > end) return -1;
//   let mid = Math.floor((start+end)/2)
//   if(numbers[mid] === target) {
//       return mid;
//   } else if (numbers[mid] > target) {
//       binarySearch(start, mid-1, numbers, target);
//   } else {
//       binarySearch(mid+1, end, numbers, target);
//   }
// }

var twoSum = function (numbers, target) {
  start = 0;
  end = numbers.length - 1;

  while (start > end) {
    let sum = numbers[start] + numbers[end];
    if (sum > target) {
      end--;
    } else if (sum < target) {
      start++;
    } else if (sum === target) {
      return [start + 1, end + 1];
    }
  }
  return [-1, -1];
};

// console.log(twoSum([2, 7, 11, 15], 9))
// console.log(binarySearch(1, 4, [2, 7, 11, 15], 7))

var smallerNumbersThanCurrent = function (nums) {
  let sortedNums = quickSort(nums);
  let result = {};
  result[sortedNums[0]] = 0;
  for (let i = 1; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i - 1]) {
      result[sortedNums[i]] = result[sortedNums[i]];
    } else {
      result[sortedNums[i]] = i;
    }
  }
  let ans = [];
  for (let num of nums) {
    ans.push(result[num]);
  }
  return ans;
};

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let mid = arr[0];
  let lesser = [];
  let larger = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < mid) {
      lesser.push(arr[i]);
    } else {
      larger.push(arr[i]);
    }
  }
  return [...quickSort(lesser), mid, ...quickSort(larger)];
}

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))

var createTargetArray = function (nums, index) {
  let target = [];

  for (let i = 0; i < nums.length; i++) {
    if (target[index[i]] === undefined) {
      target[index[i]] = nums[i];
    } else {
      let right = target.slice(index[i]);
      target[index[i]] = nums[i];
      target = right;
    }
  }
  return target;
};

// console.log(createTargetArray([0,1,2,3,4], [0,1,2,2,1]))

var checkIfPangram = function (sentence) {
  const alphabet = new Array(26).fill(0);
  for (let i = 0; i < sentence.length; i++) {
    let index = sentence[i].charCodeAt() - 97;
    if (alphabet[index]) {
      alphabet[index] += 1;
    } else {
      alphabet[index] = 1;
    }
  }
  for (let char of alphabet) {
    if (char === 0) return false;
  }
  return true;
};

// console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))

var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    if (i % 2 !== 0) {
      for (let j = 0; j < image.length; j++) {
        if (image[i][j]) {
          image[i][j] = 0;
        } else {
          image[i][j] = 1;
        }
      }
    } else {
      image[i].reverse();
      for (let j = 0; j < image.length; j++) {
        if (image[i][j]) {
          image[i][j] = 0;
        } else {
          image[i][j] = 1;
        }
      }
      // let start = 0;
      // let end = image.length-1;
      // while (start <= end) {
      //     let left = image[i][start] ? 0 : 1;
      //     let right = image[i][end] ? 0 : 1;
      //     image[i][start] = left
      //     image[i][end] = right;
      //     start++;
      //     end--
      // }
    }
  }
  return image;
};

// console.log(flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]))

var diagonalSum = function (mat) {
  let sum = 0;

  for (let i = 0; i < mat.length / 2; i++) {
    let start = 0;
    let end = mat[0].length - 1;
    while (start < end) {
      sum += mat[i][start] + mat[i][end];
      sum += mat[mat.length - 1 - i][start] + mat[mat.length - 1 - i][end];
      start++;
      end--;
    }
  }
  return sum;
};

// console.log(
//   diagonalSum([
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//     [1, 1, 1, 1],
//   ])
// );

var luckyNumbers = function (matrix) {
  let minInRow = [];
  let maxInColumn = [];

  for (let i = 0; i < matrix.length; i++) {
    let min = Number.MAX_VALUE;
    for (let j = 0; j < matrix[i].length; j++) {
      min = Math.min(min, matrix[i][j]);
    }
    minInRow.push(min);
  }
  for (let i = 0; i < matrix[0].length; i++) {
    let max = Number.MIN_VALUE;
    for (let j = 0; j < matrix.length; j++) {
      max = Math.max(max, matrix[j][i]);
    }
    maxInColumn.push(max);
  }
  return minInRow.filter((x) => maxInColumn.includes(x));
};

// console.log(luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]))

var maximumPopulation = function (logs) {
  let max = Number.MIN_VALUE;
  let year = [];

  for (let log of logs) {
    let sum = Math.abs(log[0] - log[1]);
    if (sum > max) {
      max = sum;
      year.push(log[0]);
    } else if (sum === max) {
      year.push(log[0]);
    }
  }
  console.log(year);
  return year;
};

// console.log(maximumPopulation([[1982,1998],[2013,2042],[2010,2035],[2022,2050],[2047,2048]]))

var findRotation = function (mat, target) {
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat.length; j++) {
      let a = target[j][i];
      let b = mat[mat.length - 1 - i][j];
      if (a !== b) return false;
    }
  }
  return true;
};

// console.log(findRotation([[2, 3], [4, 5]], [[4, 2], [5, 3]]))

var transpose = function (mat) {
  return mat[0].map((_, colIndex) => mat.map((row) => row[colIndex]));
};

// console.log(transpose([[1,2,3],[4,5,6],[7,8,9]]))

var matrixReshape = function (mat, r, c) {
  let result = [];
  mat.forEach((arr) => result.push(...arr));
  let index = 0;
  let ans = [];

  for (let i = 0; i < r; i++) {
    ans.push([]);
    for (let j = 0; j < c; j++) {
      ans[i][j] = result[index];
      index++;
    }
  }
  return ans;
};

// console.log(matrixReshape([[1,2],[3,4]],2, 4))

var spiralOrder = function (matrix) {
  let i = 0;
  let j = 0;
  let result = [];
  let rowLength = matrix[0].length - 1;
  let colLength = matrix.length - 1;
  let isRight = true;

  while (true) {
    if (isRight) {
      if (i > colLength || j > rowLength) {
        isRight = false;
        i--;
        continue;
      }
      if (j < rowLength) {
        let value = matrix[i][j];
        result.push(value);
        j++;
      }
      if (j === rowLength) {
        let value = matrix[i][j];
        result.push(value);
        i++;
      }
    } else {
      if (i < 0 || j < 0) {
        isRight = true;
        continue;
      }
      if (i === colLength) {
        let value = matrix[i][j];
        result.push(value);
        j--;
      }
      if (j === 0) {
        let value = matrix[i][j];
        result.push(value);
        i--;
      }
    }
  }
  return result;
};

// console.log(
//   spiralOrder([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ])
// );

var generateMatrix = function (n) {
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let count = 1;
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(new Array(n).fill(0));
  }

  while (left <= right && top <= bottom) {
    result.push([]);
    for (let i = left; i <= right; i++) {
      result[top][i] = count;
      count++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = count;
      count++;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result[bottom][i] = count;
        count++;
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = count;
        count++;
      }
      left++;
    }
  }
  return result;
};

// console.log(generateMatrix(3))

var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  let arr = Array.from({ length: rows }, () => Array.from({ length: cols }));

  let left = cStart,
    right = cStart,
    top = rStart,
    bottom = rStart
    result = [];

  while (result.length < rows * cols) {
    for (let i = left; i <= right; i++) {
      if(i > cols) break;
      if(top >= 0 && i >= 0 && i <= cols-1) {
        arr[top][i] = [top, i];
        result.push([top, i])
      }
    }
    right++;
    
    for (let i = top; i <= bottom; i++) {
      if(i > rows) break;
      if(right <= cols-1 && i >= 0 && i <= rows-1) {
        arr[i][right] = [i, right];
        result.push([i, right])
      }
    }
    bottom++;
    
    for (let i = right; i >= left; i--) {
      if(i < 0) break;
      if(i <= cols-1 && bottom <= rows-1) {
        arr[bottom][i] = [bottom, i];
        result.push([bottom, i])
      }
    }
    left--;
    
    for (let i = bottom; i >= top; i--) {
      if(i < 0) break;
      if(left >= 0 && i <= rows-1) {
        arr[i][left] = [i, left];
        result.push([i, left])
      }
    }
    top--;
  }
  return result;
};

// console.log(spiralMatrixIII(1, 4, 0, 0));

var setZeroes = function(matrix) {
  let zeroIndex = [];

  for(let i=0; i<matrix.length; i++) {
      for(let j=0; j<matrix[i].length; j++) {
          if(matrix[i][j] === 0) {
              zeroIndex.push([i, j])
          }
      }
  }

  for(let z=0; z<zeroIndex.length; z++) {
      const [row, col] = zeroIndex.pop();
      z--

      for(let i=0; i<matrix[0].length; i++) {
          matrix[row][i] = 0;
      }

      for(let i=0; i<matrix.length; i++) {
          matrix[i][col] = 0;
      }
  }
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));