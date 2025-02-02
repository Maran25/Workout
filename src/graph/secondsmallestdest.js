/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} time
 * @param {number} change
 * @return {number}
 */
var secondMinimum = function (n, edges, time, change) {
    let result = bfs(n, edges, time, change);

    if (result.length === 1) {
        let newedge = [...edges, [n, n + 1], [n + 1, n + 2]]
        result = bfs(n + 2, newedge, time, change);
    }

    result.sort((a, b) => a - b);
    let small = result[0];
    let i = 1;

    if (result.length === 1) return result[0]
    while (result[i] === result[0]) i++

    return result[i]
};

function bfs(n, edges, time, change) {
    let adj = Array.from({ length: n + 1 }, () => new Array());

    for (let [u, v] of edges) {
        adj[u].push(v)
    }

    let queue = [[1, 0, [1]]];
    let result = [];

    while (queue.length) {
        let [node, timetaken, path] = queue.pop();
        if (node === n) {
            result.push(timetaken);
            continue;
        }

        let isred = Math.floor(timetaken / change) % 2 === 0 ? false : true
        let waittime = isred ? change - timetaken % change : 0

        for (let it of adj[node]) {
            if (!path.includes(it)) {
                queue.push([it, timetaken + waittime + time, [...path, it]]);
            }
        }
    }
    console.log({ result })
    return result
}

secondMinimum(5, [[1,2],[1,3],[1,4],[3,4],[4,5]], 3, 5)