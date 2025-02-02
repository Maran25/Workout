/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
    let adj = Array.from({ length: n }, () => new Array());
    let city = {};

    for(let [u,v,w] of edges) {
        adj[u].push([v,w]);
        adj[v].push([u,w]);
    }

    for(let i=0; i<n; i++) {
        city[neighbourCity(n, i, adj, distanceThreshold)] = i;
    }
    return Object.values(city)[0];
};

function neighbourCity(n, node, adj, distanceThreshold) {
    let dist = new Array(n).fill(Infinity);
    let queue = []

    queue.push([node, 0]);
    dist[node] = 0;
    let count = 0;

    while(queue.length) {
        let [node, distance] = queue.shift();

        if(distance > distanceThreshold) continue;

        for(let [it, edist] of adj[node]) {
            if(distance + edist <= distanceThreshold) {
                queue.push([it, distance + edist]);
                dist[it] = distance + edist;
                count++;
            }
        }
    }
    return count;
}

findTheCity(4, [[0,1,3],[1,2,1],[1,3,4],[2,3,1]], 4)