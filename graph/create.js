export function graph(n, edges) {
    let arr = [];

    for(let i = 0; i < n; i++)
        arr[i] = [];

    for(let i = 0; i < edges.length; i++) {
        arr[edges[i][0]].push(edges[i][1]);
        arr[edges[i][1]].push(edges[i][0]);
    }

    return arr;
}

graph(3, [[0,1], [1,2], [2,0]]);
