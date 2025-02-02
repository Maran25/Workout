/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head1 = l1;
    let head2 = l2;
    let result = new ListNode();
    let current = result;
    let stack1 = [];
    let stack2 = [];
    let stack3 = [];

    while(head1) {
        stack1.push(head1.val);
        head1 = head1.next;
    }

    while(head2) {
        stack2.push(head2.val);
        head2 = head2.next;
    }

    let rem = 0;

    while(stack1.length && stack2.length) {
        let sum = rem + stack1.pop() + stack2.pop();
        stack3.push(sum%10)
        rem = Math.floor(sum/10);
    }

    while(stack1.length) {
        let sum = rem + stack1.pop();
        stack3.push(sum%10)
        rem = Math.floor(sum/10);
    }

    while(stack2.length) {
        let sum = rem + stack2.pop();
        current.next = new ListNode(sum%10);
        rem = Math.floor(sum/10);
        stack3.push(sum)
        current = current.next;
    }

    while(stack3.length) {
        current.next = new ListNode(stack3.pop());
        current = current.next;
    }

    return result.next;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }

const l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));