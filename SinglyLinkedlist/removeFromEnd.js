/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if ((head && !head.next) && n === 1) return null
    head = reverse(head);
    let temp1 = head

    for(let i=1; i<n-1; i++) {
        temp1 = temp1.next
    }

    temp1.next = temp1.next.next;
    head = reverse(head)
    return head;
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


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

const l1 = new ListNode(1);
l1.next = new ListNode(2);
// l1.next.next = new ListNode(3);
// l1.next.next.next = new ListNode(4);
// l1.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(l1, 1));