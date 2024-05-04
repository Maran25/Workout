function graph(n, edges) {
    let arr = [];

    for(let i = 0; i < n; i++)
        arr[i] = [];

    for(let i = 0; i < edges.length; i++) {
        arr[edges[i][0]].push(edges[i][1]);
        arr[edges[i][1]].push(edges[i][0]);
    }

    return arr;
}

function dfs(node, vis, adj, list) {
    vis[node] = true;
    list.push(node);

    for(let it of adj[node]) {
        if(!vis[it]) {
            dfs(it, vis, adj, list)
        }
    } 
}

function traversel(n, edges) {
    const node = graph(n, edges);
    let vis = new Array(n).fill(false);
    let list = [];
    dfs(0, vis, node, list)
    return list;

}

traversel(3, [[0,1],[1,2],[2,0]]);