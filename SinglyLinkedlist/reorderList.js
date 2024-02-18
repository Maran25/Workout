/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let mid = getMid(head);
  let rev = reverse(mid);
  let temp = new ListNode();
  let count = 1;

  while (rev) {
    if (count % 2 === 0) {
      temp.next = rev;
      rev = rev.next;
    } else {
      temp.next = head;
      head = head.next;
    }
    temp = temp.next;
  }
  head = temp.next;
};

function getMid(head) {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

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
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(4);
l1.next.next.next.next = new ListNode(5);


console.log(reorderList(l1));
