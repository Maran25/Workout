class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    shift() {
        if(!this.head) return;
        const temp = this.head;
        this.head.next = temp;
        delete this.head 
        return this.head;
    }
}