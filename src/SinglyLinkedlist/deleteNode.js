/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let slow = head;
    let fast = head.next;

    while(fast && fast.next) {
        if(slow.val === fast.val) {
            while(slow.val === fast.val) fast = fast.next;
            slow.next = fast.next;
        } else {
            slow.next = fast;
        }
        fast = fast.next;
        slow = slow.next;
    }
    console.log({ fast, slow, head })
    return null;
};

var deleteDuplicatesV2 = function (head) {
    if(!head || !head.next) return head;

    let prev = new ListNode();
    prev.next = head;
    let temp = prev;
    let slow = head;
    let fast = head.next;

    while (fast) {
        if (slow.val === fast.val) {
            while (fast && slow.val === fast.val) fast = fast.next;
            temp.next = fast;
            slow = fast
            fast = fast.next;
        } else {
            fast = fast.next;
            temp = slow;
            slow = slow.next;
        }
    }
    temp = temp.next;
    // console.log({ fast, slow, head, temp })
    return prev.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

const node = new ListNode(1)
node.next = new ListNode(1)
// node.next = new ListNode(2)
// node.next.next = new ListNode(3)
// node.next.next.next = new ListNode(3)
// node.next.next.next.next = new ListNode(4)
// node.next.next.next.next.next = new ListNode(4)
// node.next.next.next.next.next.next = new ListNode(5)

console.log(deleteDuplicatesV2(node))