class PQ {
  constructor() {
    this.collection = [];
  }

  enqueue(element) {
    if (this.isEmpty()) {
      this.collection.push(element);
    } else {
      let added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (element[1] < this.collection[i][1]) {
          // Checking priorities
          this.collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(element);
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.collection.shift();
  }

  isEmpty() {
    return this.collection.length === 0;
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  let map = {};

  let adj = Array.from({ length: n }, () => new Array());

  for (let [u, v, weight] of edges) {
    adj[u].push([v, weight]);
    adj[v].push([u, weight]);
  }
  console.log(adj);

  for (let i = 0; i < n; i++) {
    let queue = new PQ();
    queue.enqueue([i, 0]);
    let vis = new Array(n).fill(0);
    vis[i] = 1;
    let count = 0;

    while (!queue.isEmpty()) {
      const [node, weight] = queue.dequeue();

      for (let [it, w1] of adj[node]) {
        if (!vis[it] && weight + w1 <= distanceThreshold) {
          vis[it] = 1;
          queue.enqueue([it, weight + w1]);
          count++;
        }
      }
    }

    map[count] = i;
    console.log(map);
  }

  return map[Object.keys(map)[0]];
};

findTheCity(
  5,
  [
    [0, 1, 2],
    [0, 4, 8],
    [1, 2, 3],
    [1, 4, 2],
    [2, 3, 1],
    [3, 4, 1],
  ],
  2
);
