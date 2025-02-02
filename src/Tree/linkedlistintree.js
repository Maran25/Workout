const { createLinkedList, insertLevelOrder } = require("./createnode");

/**
 * @param {ListNode} head
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSubPath = function (head, root) {
    return dfs2(root, head)
};

function dfs(root, node) {
    if (!root) return false;
    if (!node || (node.val === root.val && !node.next)) return true;

    if (root.val === node.val) node = node.next;

    return dfs(root?.left, node) || dfs(root?.right, node);
}

function dfs2(root, head) {
    if(!root) return false;
    let res1 = false;
    let res2 = false;
    let res3 = false;
    if(root.val === head.val) res1 = dfs(root, head);
    if(root.left) res2 = dfs2(root.left, head);
    if(root.right) res3 = dfs2(root.right, head);
    return res1 || res2 || res3
}

let arr = [1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3];
let root = insertLevelOrder(arr, null, 0);
let head = createLinkedList([1,4,2,6])
isSubPath(head, root)