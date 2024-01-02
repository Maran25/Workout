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

    push(val) {
        let node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.length++;
        }
    }

    pop() {
        if(!this.head) return undefined;

        let current = this.head;
        let secondLast = current;
        while(current.next) {
            secondLast = current;
            current = current.next;
        }
        this.tail = secondLast;
        this.tail.next = null;
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        return temp;
    }

    unshift(val) {
        const head = new Node(val);
        if(!this.head) {
            this.head = head;
            this.tail = this.head;
        } else {
            head.next = this.head;
            this.head = head
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) return null;
        
        let counter = 0;
        let returnVal = this.head;
        while(counter !== index) {
            returnVal = returnVal.next;
            counter++;
        }
        return returnVal;
    }
    
    set(index, val) {
        var foundNode = this.get(index);
        if(foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);
        let current = new Node(val);
        let oneBefore = this.get(index - 1);
        let temp = oneBefore.next;
        oneBefore.next = current;
        current.next = temp;
        this.length++;
        return true;
    }

    delete(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();

        let oneBefore = this.get(index - 1);
        let temp = oneBefore.next;
        oneBefore.next = temp.next;
        this.length--;
        return temp;
    }

    reverse() {
        let next;
        let prev;
        let node = this.head;

        while(node.next) {
            next = node;
            
        }
    }
}

let list = new SinglyLinkedlist();
list.push(20)
list.push(21)
list.push(22)
list.push(32)
list.push(52)
list.push(64)
list.push(128)
console.log(list.delete(3))
console.log(list.get(3))