function findRotateSteps(ring, key) {
    function helper(r, k) {
        if(k === key.length) return 0;

        let min = Infinity;

        for(let i=r; i<ring.length; i++) {
            if(ring[i] === key[k]) {
                let dif = Math.abs(i - r);
                let minPath = Math.min(dif, ring.length - dif)
                min = Math.min(min, minPath + 1 + helper(i, k+1))
            }
        }
        return min;
    }
    return helper(0, 0)
}