var isPalindrome = function (head) {
  if (head && !head.next) return true;
  let mid = getMid(head);
  let tempRev = reverseLinkedlist(mid);
  let left = head;
  let right = tempRev;
  while (left && right) {
    if (left.val !== right.val) break;
    left = left.next;
    right = right.next;
  }

  reverseLinkedlist(tempRev);
  if (!left || !right) return true;
  return false;
};

function getMid(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow.next;
}

function reverseLinkedlist(head) {
  let prev = null;
  let cur = head;
  let next = head.next;

  while (cur !== null) {
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

const node = new ListNode(1);
node.next = new ListNode(0);
node.next.next = new ListNode(1);
//  node.next.next.next = new ListNode(1);

console.log(node);
console.log(isPalindrome(node));
