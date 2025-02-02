/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
  if (position.length < m) return -1;

  position.sort((a, b) => a - b);
  let start = position[0];
  let end = position[position.length - 1];
  let arr = new Array(end).fill(0);
  for (let pos of position) arr[pos - 1] = pos;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (isPossible(arr, mid, m)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

maxDistance([5, 4, 3, 2, 1, 1000000000], 2);

function isPossible(arr, force, m) {
  let count = 0;

  for (let i = 0; i < arr.length; i += force) {
    if (arr[i] !== 0) {
      count++;
    }
  }
  // maxForce += Math.floor(count / m);
  return count <= m;
}

function minAndMax(nums) {
  let min = Infinity;
  let max = -Infinity;

  for (let num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  return { min, max };
}
