class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {number[]}
 */
//[1, 7, 5, 1, 9, 2, 5, 1]
var nextLargerNodes = function (head) {
    let rev = reverse(head);
    let stack = [rev];
    let result = [0]
    rev = rev.next;

    while (rev) {
        while (stack.length && stack[stack.length-1].val <= rev.val) stack.pop()
        if (!stack.length) result.push(0);
        else result.push(stack[stack.length-1].val);
        stack.push(rev);
        rev = rev.next;
    }
    return result.reverse();
};

function reverse(head) {
    let prev = null;
    let cur = head;
    let next = head.next;

    while (cur) {
        cur.next = prev;
        prev = cur;
        cur = next;
        if (next) next = next.next;
    }
    return prev;
}

function createLinkedListFromArray(array) {
    if (array.length === 0) return null;
    let head = new Node(array[0]);
    let current = head;
    for (let i = 1; i < array.length; i++) {
        current.next = new Node(array[i]);
        current = current.next;
    }
    return head;
}

// const array = [1, 7, 5, 1, 9, 2, 5, 1];
const array = [3,3];
const linkedList = createLinkedListFromArray(array);

console.log(nextLargerNodes(linkedList))