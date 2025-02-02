/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
    let length = 0;
    let current = head;

    while (current) {
        length++;
        current = current.next;
    }

    if (k > length || k <= 0) {
        return head; 
    }

    let firstKPrev = null;
    let firstK = head;
    for (let i = 1; i < k; i++) {
        firstKPrev = firstK;
        firstK = firstK.next;
    }

    let secondKPrev = null;
    let secondK = head;
    for (let i = 0; i < length - k; i++) {
        secondKPrev = secondK;
        secondK = secondK.next;
    }

    if (firstKPrev) {
        firstKPrev.next = secondK;
    } else {
        head = secondK;
    }

    if (secondKPrev) {
        secondKPrev.next = firstK;
    } else {
        head = firstK;
    }

    let temp = firstK.next;
    firstK.next = secondK.next;
    secondK.next = temp;

    return head;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }

 const node = new ListNode(1);
 node.next = new ListNode(2);
 node.next.next = new ListNode(3);
 node.next.next.next = new ListNode(4);
 node.next.next.next.next = new ListNode(5);

console.log(swapNodes(node, 2)); // [1] -> [2] -> [3] -> [5] -> [4]