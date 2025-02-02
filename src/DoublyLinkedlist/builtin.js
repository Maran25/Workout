class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data;
            if (current.next) {
                result += "<->";
            }
            current = current.next;
        }
        console.log(result);
    }
}

const dll = new DoublyLinkedList();
const values = [2, 2, 10, 8, 4, 2, 5, 2];

values.forEach(value => dll.append(value));

dll.display();


function  deleteAllOccurOfX(head_ref, key) {
    let node = head_ref;
    while(node) {
        if(node.data === key) {
            let prev = node.prev;
            let next = node.next;
            if(prev) prev.next = next;
            next.prev = prev;
            node = next;
        } else {
            node = node.next;
        }
    }
    return head_ref;
}

console.log(deleteAllOccurOfX(dll, 2))