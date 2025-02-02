/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */
var buildMatrix = function (k, rowConditions, colConditions) {
  let matrix = Array.from({ length: k }, () => new Array(k).fill(0));
  const rowOrder = topoSort(rowConditions, k);
  const colOrder = topoSort(colConditions, k);
  let map = new Map();

  if (!rowOrder.length || !colOrder.length) return [];

  for (let i = 0; i < k; i++) {
    map.set(rowOrder[i], { ...map.get(rowOrder[i]), row: i });
    map.set(colOrder[i], { ...map.get(colOrder[i]), col: i });
  }

  for (let [key, pair] of map) {
    const { row, col } = pair;
    matrix[row][col] = key;
  }

  return matrix;
};

function topoSort(edges, k) {
  let indegree = new Array(k + 1).fill(0);
  let adj = Array.from({ length: k + 1 }, () => new Array());

  for (let [u, v] of edges) adj[u].push(v);

  for (let i = 1; i <= k; i++) {
    for (let it of adj[i]) {
      indegree[it]++;
    }
  }

  let queue = [];
  for (let i = 1; i <= k; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  let order = [];
  while (queue.length) {
    let node = queue.shift();
    order.push(node);
    for (let it of adj[node]) {
      indegree[it]--;
      if (indegree[it] === 0) queue.push(it);
    }
  }
  return order;
}

buildMatrix(
  5,
  [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 3],
    // [1, 3],
    // [4, 2],
  ],
  [[2, 1]]
);
