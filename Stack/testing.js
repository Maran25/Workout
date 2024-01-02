class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    } 

    push(val) {
        const node = new Node(val);
        if(!this.first) {
            this.first = node;
            this.last = node
        }

        const lastFirst = this.first;
        node.next = node;
        this.first = node;
        node.next = lastFirst;
    }
}