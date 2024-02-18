var removeNthFromEnd = function (head, n) {
//   if (!head || (head || !head.next)) return null;
  let length = 0;
  let temp = head;

  while (temp) {
    temp = temp.next;
    length++;
  }

  temp = head;
  for(let i=0; i<length-n-1; i++) {
      temp = temp.next;
  }

  temp.next = temp?.next?.next;
  return head;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node = new ListNode(1);
node.next = new ListNode(2);
node.next.next = new ListNode(3);
node.next.next.next = new ListNode(4);
node.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(node, 2));
