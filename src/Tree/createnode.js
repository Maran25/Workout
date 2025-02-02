function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

function insertLevelOrder(arr, root, i) {
    // Base case for recursion
    if (i < arr.length) {
        let temp = null;
        if (arr[i] !== null) {
            temp = new TreeNode(arr[i]);
            root = temp;

            // insert left child
            root.left = insertLevelOrder(arr, root.left, 2 * i + 1);

            // insert right child
            root.right = insertLevelOrder(arr, root.right, 2 * i + 2);
        }
    }
    return root;
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
}

function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let val of arr) {
        if (val !== null) {
            current.next = new ListNode(val);
            current = current.next;
        }
    }

    return dummy.next;
}

let arr = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
let root = insertLevelOrder(arr, null, 0);

module.exports = {
    createLinkedList,
    insertLevelOrder
}