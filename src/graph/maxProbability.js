/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let adj = Array.from({ length: n }, () => new Array());
    for(let i=0; i<edges.length; i++) {
        const [u, v] = edges[i];
        adj[u].push([v, succProb[i]])
        adj[v].push([u, succProb[i]])
    }

    let vis = new Array(n).fill(0);
    let queue = [[start_node, 0.10]];

    while(queue.length) {
        let [node, weight] = queue.shift();
        if(node === end_node) return weight;

        for(let [it, iweight] of adj[node]) {
            let newweight = weight * iweight;
            if(vis[it] < newweight) {
                vis[it] = newweight;
                queue.push([it, newweight])
            }
        }
    }
    return vis[end_node-1]
};

maxProbability(3, [[0,1],[1,2],[0,2]], [0.5,0.5,0.2], 0, 2)