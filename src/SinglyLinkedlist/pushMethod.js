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

    deleteDuplicates() {
        let temp = this.head;
    
        while(!temp.next) {
            if(temp.val === temp.next.val) {
                const deleteNode = temp.next;
                temp.next = deleteNode.next;
            } else {
                temp = temp.next
            }
        }
    
        return head
    };
}

let listOne = new SinglyLinkedlist();
listOne.push(1)
// listOne.push(5)
// listOne.push(6)
listOne.push(2)

let listTwo = new SinglyLinkedlist();
listTwo.push(7)
listTwo.push(7)
listTwo.push(7)
listTwo.push(7)
// listTwo.push(4)
// listTwo.push(7)
// listTwo.push(7)
// listTwo.push(7)
// listTwo.push(7)
// listTwo.push(5)
// listTwo.push(6)

function ListNode(val, next) {
   this.val = (val===undefined ? 0 : val)
   this.next = (next===undefined ? null : next)
}

var mergeTwoSortedList = function (list1, list2) {
    let dummy = new ListNode();
    let result = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val > list2.val) {
            result.next = new ListNode(list2.val);
            list2 = list2.next;
        } else {
            result.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        result = result.next;
    }

    result.next = list1 ? list1 : list2

    return dummy.next;
};

// console.log(mergeTwoSortedList(listOne.head, listTwo.head))
// console.log(list.delete(3))
// console.log(list.get(3))

var removeElements = function (head, val) {
    let cur = head;
    if(!cur) return head;

    while (cur) {
        if (cur && cur.next && cur.next.val === val) {
            let temp = cur.next;
            while(temp && temp.val === val) temp = temp.next;
            cur.next = temp;
        } else {
            cur = cur.next;
        }
    }
    return head;
};

console.log(removeElements(listTwo.head, 7))