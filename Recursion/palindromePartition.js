function palindromPartition(str) {
  let result = [];
  let path = [];
  findPartition(0, str, path, result);
  return result;
}

function findPartition(index, str, path, result) {
  if (index === str.length) {
    result.push(path.slice());
    return;
  }

  for (let i = index; i < str.length; ++i) {
    if (isPalindrome(str, index, i)) {
      path.push(str.substring(index, i + 1));
      findPartition(i + 1, str, path, result);
      path.pop();
    }
  }
}

function isPalindrome(str, start, end) {
  while (start <= end) {
    if (str.charAt(start++) !== str.charAt(end--)) {
      return false;
    }
    return true;
  }
}

console.log(palindromPartition('aabb'))