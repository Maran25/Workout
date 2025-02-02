class DisjointSet {
  size = [];
  parent = [];

  constructor(n) {
    this.size = new Array(n).fill(1);
    this.parent = new Array(n).fill(0).map((_, i) => i);
  }

  findUParent(node) {
    if (node === this.parent[node]) return node;
    return (this.parent[node] = this.findUParent(this.parent[node]));
  }

  union(u, v) {
    const V = this.parent[v];
    const U = this.parent[u];

    if (V === U) return;
    if (this.size[V] > this.size[U]) {
      this.size[V] += this.size[U];
      this.parent[U] = V;
    } else {
      this.size[U] += this.size[V];
      this.parent[V] = U;
    }
  }
}

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
  let map = new Map();
  let ds = new DisjointSet(10000);

  for (let i = 0; i < accounts.length; i++) {
    for (let j = 1; j < accounts[i].length; j++) {
      if (map.has(accounts[i][j])) {
        ds.union(i, map.get(accounts[i][j]));
      } else {
        map.set(accounts[i][j], i);
      }
    }
  }

  let arr = new Array(accounts.length).fill(new Array());
  for (let [key, val] of map) {
    let ultParent = ds.findUParent(val);
    console.log({ ultParent, key, val, arr });
    arr[ultParent].push(key);
  }

  console.log(arr);
};

accountsMerge([
  ["John", "johnsmith@mail.com", "john_newyork@mail.com"],
  ["John", "johnsmith@mail.com", "john00@mail.com"],
  ["Mary", "mary@mail.com"],
  ["John", "johnnybravo@mail.com"],
]);
