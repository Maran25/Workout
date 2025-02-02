/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const adj = graph(n, edges);
    let result = [];
    
    for(let i=1; i<n; i++) {
        let vis = new Array(n).fill(false);
        result[i] = dfs(i, vis, adj, 0) + n - 1;
    }
    return result;
};

function dfs(node, vis, adj, depth) {
    vis[node] = true;
    let val = 0;

    for(let it of adj[node]) {
        if(!vis[it]) {
            val += depth + dfs(it, vis, adj, depth+1);
        }
    }
    return val;
}

function graph(n, edges) {
    let adj = [];
    for(let i=0; i<n; i++) {
        adj[i] = [];
    }
    for(let i=0; i<edges.length; i++) {
        adj[edges[i][1]].push(edges[i][0])
        adj[edges[i][0]].push(edges[i][1])
    }
    return adj;
}

console.log(sumOfDistancesInTree(6, [[0,1],[0,2],[2,3],[2,4],[2,5]]))
// console.log(sumOfDistancesInTree(2, [[1,0]]))