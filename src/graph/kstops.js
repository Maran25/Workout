/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let adj = Array.from({ length: n }, () => new Array());
    let dist = new Array(n).fill(Infinity);
    // let pq = new MinPriorityQueue({ priority: x => x[1]});
    let pq = [[src, 0, 0]]

    for(let [u,v,price] of flights) {
        adj[u].push([v, price]);
    }

    // pq.enqueue([src, 0, 0]);
    dist[src] = 0;

    // while(!pq.isEmpty()) {
    while(pq.length) {
        // let [node, price, remStops] = pq.dequeue().element;
        let [node, price, remStops] = pq.shift();

        // if(node === dst) return price;

        for(let [it, nprice] of adj[node]) {
            if(remStops > k) continue;
            if(dist[it] > price + nprice) {
                dist[it] = price + nprice;
                // pq.enqueue([it, dist[it], remStops+1])
                pq.push([it, dist[it], remStops+1])
            }
        }
        pq.sort((a,b) => a[1] - b[1])
    }
    return dist[dst] !== Infinity ? dist[dst] : -1;
};

findCheapestPrice(5, [[0,1,5],[1,2,5],[0,3,2],[3,1,2],[1,4,1],[4,2,1]], 0, 2, 2)