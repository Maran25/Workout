class Solution {
    /**
     * @param {number[]} arr
     * @param {number} start
     * @param {number} end
     * @return {number}
     */
    minimumMultiplications(arr, start, end) {
        // code here
        let dist = new Array(100000).fill(Infinity);
        let queue = [[start, 0]];
        dist[start] = 0;
        
        while(queue.length) {
            const [node, steps] = queue.shift();
            
            if(node === end) return steps;
            
            for(let it of arr) {
                let num = (node * it) % 100000;
                if(dist[num] > steps+1) {
                    dist[num] = steps + 1;
                    queue.push([num, steps+1])
                }
            }
        }
        return -1;
    }
}

const d = new Solution();
d.minimumMultiplications([2,5,7], 3, 30)