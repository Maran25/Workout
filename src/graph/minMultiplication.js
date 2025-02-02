function minMultiplicationToReachEnd(arr, start, end) {
    let queue = [];
    queue.push([start, 0]);
    let dist = new Array(1e5).fill(Infinity);
    dist[start] = 0

    while(queue.length) {
        const [node, steps] = queue.pop();

        for(let num of arr) {
            let nextNode = (node * num) % 1e5;
            if(steps+1 < dist[nextNode]) {
                if(nextNode === end) return steps+1;
                queue.push([nextNode, steps+1])
                dist[nextNode] = steps + 1;
            }
        }
    }
    return -1;
}

console.log(minMultiplicationToReachEnd([3,4,65], 7, 66175))