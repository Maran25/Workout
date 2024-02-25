function findItem(arr, target) {
  return helper(arr, target, 0);
}

function helper(arr, target, i) {
  if (i === arr.length) return false;
  return arr[i] === target || helper(arr, target, i + 1);
}

function search(arr, target, i) {
  let result = [];
  if (i === arr.length) return result;
  if (arr[i] === target) result.push(i);
  let brah = search(arr, target, i + 1);
  result.push(...brah);
  return result
}

console.log(search([1, 4, 6, 6, 7, 8, 45, 34], 6, 0));
