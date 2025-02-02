function topoSort(V, adj) {
    let indegree = new Array(V).fill(0);
        
    for(let list of adj) {
        for(let it of list) {
            indegree[it]++;
        }
    }
    
    let queue = [];
    let result = [];
    
    for(let i=0; i<V; i++) {
        if(indegree[i] === 0) queue.push(i);
    }
    
    while(queue.length) {
        let node = queue.shift();
        result.push(node);
        
        for(let it of adj[node]) {
            indegree[it]--;
            if(indegree[it] === 0)  {
                queue.push(it)
            }
        }
    }
    return result;
}

topoSort(5, [[], [3], [3], [], [0,1], [0,2]])