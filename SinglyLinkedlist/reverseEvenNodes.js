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
var reverseEvenLengthGroups = function (head) {
  if (!head || !head.next) return head;
  let length = getLength(head);
  if (length === 2) return reverse(head);
  let level = 2;
  let stepsTaken = 1;

  let prev = head;
  let temp = head.next;

  while (level + stepsTaken <= length) {
    if (level % 2 === 0) {
      let eos = getNode(temp, level, stepsTaken, length);
      let eosNext = eos.next;
      eos.next = null;
      let rev = reverse(temp);
      prev.next = rev;
      let revtemp = rev;
      while (revtemp && revtemp.next) revtemp = revtemp.next;
      revtemp.next = eosNext;
      temp = eosNext;
      prev = revtemp;
    } else {
      prev = getNode(temp, level, stepsTaken, length);
      temp = prev.next;
    }
    stepsTaken += level;
    level++;
  }

  if ((length - stepsTaken) % 2 === 0) {
    let rev = reverse(temp);
    prev.next = rev;
  }

  return head;
};

function getNode(head, level, stepstaken, length) {
  if (level + stepstaken > length) {
    level = length - stepstaken;
  }
  level -= 1;
  for (let i = 0; i < level; i++) {
    head = head.next;
  }
  return head;
}

function getLength(head) {
  let length = 0;

  while (head) {
    head = head.next;
    length++;
  }
  return length;
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

// Create the linked list
const l1 = new ListNode(1);
l1.next = new ListNode(1);
l1.next.next = new ListNode(0);
l1.next.next.next = new ListNode(6);
l1.next.next.next.next = new ListNode(5);
// l1.next.next.next.next.next = new ListNode(1);
// l1.next.next.next.next.next.next = new ListNode(7);
// l1.next.next.next.next.next.next.next = new ListNode(3);
// l1.next.next.next.next.next.next.next.next = new ListNode(8);
// l1.next.next.next.next.next.next.next.next.next = new ListNode(4);

reverseEvenLengthGroups(l1);
