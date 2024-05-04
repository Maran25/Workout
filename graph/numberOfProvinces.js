function numberOfProvinces(n, edges) {
  let adj = graph(n, edges);
  let vis = new Array(n).fill(false);
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (!vis[i]) {
      count++;
      dfs(i, vis, adj);
    }
  }
  return count;
}

function dfs(n, vis, adj) {
  vis[n] = true;
  for (let it of adj[n]) {
    if (!vis[it]) {
      dfs(it, vis, adj);
    }
  }
}

function graph(n, edges) {
  let arr = [];

  for (let i = 0; i < n; i++) arr[i] = [];

  for (let i = 0; i < edges.length; i++) {
    arr[edges[i][0]].push(edges[i][1]);
    arr[edges[i][1]].push(edges[i][0]);
  }

  return arr;
}

console.log(
  numberOfProvinces(6, [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ])
);
