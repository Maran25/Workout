class DS {
  size = [];
  parent = [];
  constructor(size) {
    this.size = new Array(size + 1).fill(1);
    this.parent = new Array(size + 1).fill(0).map((_, i) => i);
  }

  findUPar(node) {
    if (this.parent[node] === node) return node;
    return this.parent[node] = this.findUPar(this.parent[node]);
  }

  unionBySize(u, v) {
    let uparU = this.parent[u];
    let uparV = this.parent[v];
    if (uparU === uparV) return;
    if (this.size[uparU] < this.size[uparV]) {
      this.parent[uparU] = uparV;
      this.size[uparV] += this.size[uparU];
    } else {
      this.parent[uparV] = uparU;
      this.size[uparU] += this.size[uparV];
    }
  }
}

function numberOfIsland2(m, n, positions) {
  let result = [];
  let ds = new DS(m * n);
  let matrix = Array.from({ length: m }, () => new Array(n).fill(0));
  let count = 0;

  for (let position of positions) {
    let [x, y] = position;
    if (matrix[x][y] === 1) {
      result.add(count);
      continue;
    }
    matrix[x][y] = 1;
    count++;
    let dr = [-1, 0, 1, 0];
    let dc = [0, 1, 0, -1];
    for (let i = 0; i < 4; i++) {
      let nx = x + dr[i];
      let ny = y + dc[i];
      if (nx >= 0 && nx < n && ny >= 0 && ny < m && matrix[nx][ny] === 1) {
        let nodeNo = m * x + y;
        let adjNo = m * dr[i] + dc[i];
        if (ds.findUPar(nodeNo) !== ds.findUPar(adjNo)) {
          ds.unionBySize(nodeNo, adjNo);
          count--;
        }
      }
    }
    result.push(count);
  }
  return result;
}

console.log(
  numberOfIsland2(3, 3, [
    [0, 0],
    [0, 1],
    [1, 2],
    [2, 1],
  ])
);
