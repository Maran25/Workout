function countPath(size) {
  return count(size, size);
}

function count(row, col) {
  if (row === 1 && col === 1) return 1;
  let result = 0;

  if (row > 1) {
    result += count(row - 1, col);
  }

  if (col > 1) {
    result += count(row, col - 1);
  }

  return result;
}

function countV2(row, col) {
  if (row === 1 || col === 1) return 1;

  let left = count(row - 1, col);
  let right = count(row, col - 1);

  return left + right;
}

console.log(countPath(3));
