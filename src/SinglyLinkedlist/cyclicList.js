class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function createLinkedListWithCycle() {
  // Create nodes from 1 to 8
  const head = new Node(1);
  let current = head;

  for (let i = 2; i <= 8; i++) {
    current.next = new Node(i);
    current = current.next;
  }

  // Make the last node (8) point to the node with value 4
  let temp = head;
  while (temp.next !== null) {
    temp = temp.next;
  }
  temp.next = head.next.next.next; // 8 points to 4

  return head;
}

// Example usage
const linkedListWithCycle = createLinkedListWithCycle();

function startOfCycle(head) {
  let f = head;
  let s = head;
  let length = 0;

  while (s !== null && f !== null && f.next !== null) {
    s = s.next;
    f = f.next.next;
    if (s === f) {
      do {
        s = s.next;
        length++;
      } while (s !== f);
      break;
    }
  }

  s = head;
  while (s !== f) {
    s = s.next;
    f = f.next;
  }
  if (!length) return null;
  return s;
}

console.log("Start of cycle: ", startOfCycle(linkedListWithCycle))