class DisjointUnion {
    size = [];
    parent = [];
    constructor(n) {
        this.size = new Array(n+1).fill(1);
        this.parent = new Array(n+1).fill(0).map((_, i) => i);
    } 

    findUPair(node) {
        if (this.parent[node] === node) return node;
        return this.parent[node] = this.findUPair(this.parent[node]);
    }

    uniounBySize(u, v) {
        let ulp_u = this.parent[u];
        let ulp_v = this.parent[v];

        if(ulp_u === ulp_v) return;
        if(this.size[ulp_u] < this.size[ulp_v]) {
            this.parent[ulp_u] = ulp_v;
            this.size[ulp_v] += this.size[ulp_u];
        } else {
            this.parent[ulp_v] = ulp_u;
            this.size[ulp_u] += this.size[ulp_v];
        }
    }
}

const d = new DisjointUnion(7)

d.uniounBySize(1, 2)
d.uniounBySize(2, 3)
d.uniounBySize(4, 5)
d.uniounBySize(6, 7)
d.uniounBySize(5, 6)

console.log(d.findUPair(3) === d.findUPair(7));
d.uniounBySize(3, 7)
console.log(d.findUPair(3) === d.findUPair(7));