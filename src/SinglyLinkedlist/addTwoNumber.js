var addTwoNumbers = function(l1, l2) {
    let revOfL1 = (l1)
    let revOfL2 = (l2)
    let result = new ListNode();
    let current = result;
    let rem = 0;

    while(revOfL1 && revOfL2) {
        let sum = rem + revOfL1.val + revOfL2.val;
        current.next = new ListNode(sum%10)
        rem = Math.floor(sum/10);
        revOfL1 = revOfL1.next;
        revOfL2 = revOfL2.next;
        current = current.next;
    }

    return result.next;
};

function reverseLinkedlist(head) {
     if(!head) return head;
    let prev = null;
    let cur = head;
    let next = head.next;

    while(cur) {
        cur.next = prev;
        prev = cur;
        cur = next;
        if(next) next = next.next;
    }
    return prev;
}

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));