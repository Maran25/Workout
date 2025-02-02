/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    let adj = graph(n, edges);
    let result = []
    let min = n + 1;

    for (let i = 0; i < n; i++) {
        let vis = new Array(n).fill(false);
        let val = dfs(i, adj, vis, 1)
        if(min === val) result.push(i);
        else if(min > val) {
            min = Math.min(min, val);
            result = [i];
        }
    }
    result.push(min)
    return result
};

function dfs(n, adj, vis, count) {
    vis[n] = true;
    let max = count;

    for (let it of adj[n]) {
        if (!vis[it]) {
            let val = dfs(it, adj, vis, count + 1)
            max = Math.max(val, max)
        }
    }
    return max;
}

function graph(n, edges) {
    let adj = [];

    for (let i = 0; i < n; i++) adj[i] = []

    for (let i = 0; i < edges.length; i++) {
        adj[edges[i][0]].push(edges[i][1])
        adj[edges[i][1]].push(edges[i][0])
    }
    return adj
}

findMinHeightTrees(6, [[3,0],[3,1],[3,2],[3,4],[5,4]])