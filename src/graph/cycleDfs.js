function findCycle(n, adj) {
  let parent = new Array(n + 1).fill(-1);
  let vis = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    if (!vis[i]) {
      let cycle = dfs(i, -1, parent, vis, adj);
      if (cycle) return true;
    }
  }
  return false;
}

function dfs(node, parent, parentarr, vis, adj) {
  if (parentarr[node] === parent) return true;
  vis[node] = 1;
  parentarr[node] = parent;

  for (let it of adj[node]) {
    if (!vis[it]) {
      if (dfs(it, node, parentarr, vis, adj)) return true;
    }
  }
  vis[node] = 0;
  return false;
}

let adj = [[], [2], [3, 8], [4, 7], [5], [6], [], [5], [9, 10, 8], [10], [8, 8]];

console.log(findCycle(10, adj))