
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var balanceBST = function(root) {
    let arr = [];
    inorder(root, arr);
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start+end)/2);
    const node = new TreeNode(arr[mid]);
    insertMid(node, arr, 0, mid-1);
    insertMid(node, arr, mid+1, end);
    return node
};

function insertMid(root, arr, start, end) {
    if(root === null) return;
    let mid = Math.floor((start+end)/2);
    insert(root, arr[mid]);
    insertMid(root, arr, start, mid-1)
    insertMid(root, arr, mid+1, end)
}

function insert(root, value) {
    if(root === null) return new TreeNode(value);
    if(root.val > value) root.left = insert(root.left, value);
    else root.right = insert(root.right, value) 
    return root;
}

function inorder(root, arr) {
    if(root === null) return;
    inorder(root.left, arr);
    arr.push(root.val)
    inorder(root.right, arr);
}

const node = new TreeNode(1);
node.right = new TreeNode(2);
node.right.right = new TreeNode(3);
node.right.right.right = new TreeNode(4)

balanceBST(node)