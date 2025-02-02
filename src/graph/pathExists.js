function validPath(n, edges, source, destination) {
    let adj = graph(n, edges);
    let vis = new Array(n).fill(false);
    return dfs(source, destination, vis, adj);
}

function dfs(node, destination, vis, adj) {
    if(node === destination) return true;

    vis[node] = true;
    let res = false;

    for(let it of adj[node]) {
        if(!vis[it]) {
            res = dfs(it, destination, vis, adj);
            if(res) return res
        }
    }
    return res;
}

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

validPath(10, [[0,7],[0,8],[6,1],[2,0],[0,4],[5,8],[4,7],[1,3],[3,5],[6,5]], 7, 5);
