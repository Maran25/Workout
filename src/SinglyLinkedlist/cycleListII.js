var detectCycle = function(head) {
  let fast = head;
  let slow = head;

  do {
      fast = fast.next.next;
      slow = slow.next;
  } while(slow.val !== fast.val);

  fast = head;
  let length = 0;
  while(slow.val !== fast.val) {
      slow = slow.next;
      fast = fast.next;
      length++
  }
  return length;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const head = new ListNode(3);
const node2 = new ListNode(2);
const node0 = new ListNode(0);
const nodeMinus4 = new ListNode(-4);

head.next = node2;
node2.next = node0;
node0.next = nodeMinus4;
nodeMinus4.next = node2; 

console.log(detectCycle(head));