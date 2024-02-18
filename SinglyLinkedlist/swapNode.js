/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let arr1 = [];
  let arr2 = [];
  let temp = head;
  let count = 0;
  let ans = new ListNode();
  let result = ans;

  while (temp) {
    if (count % 2 === 0) {
      arr1.push(temp);
    } else {
      arr2.push(temp);
    }
    count++;
    temp = temp.next;
  }
  count = 0;
  while (arr1.length || arr2.length) {
    if (count % 2 === 0) {
      let val = arr2.shift();
      count++;
      if (val) {
        result.next = val;
        result = result.next;
      } else continue;
    } else {
      let val = arr1.shift();
      count++;
      if (val) {
        result.next = val;
        result = result.next;
      } else continue;
    }
  }
  result.next = null;
  return ans.next;
};

var swapPairsV2 = function (head) {
  if (!head || !head.next) return head;
  let cur = head;
  let next = head.next;

  while (next) {
    let temp = next.next;
    cur.next = temp;
    next.next = cur;
    cur = temp;
    next = temp.next;
  }
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

console.log(swapPairsV2(node));
