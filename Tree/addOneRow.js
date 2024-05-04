function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function (root, val, depth) {
  function helper(root, val, depth, prevroot, isleft) {
    if (depth === 0) return 0;

    if (depth === 1) {
      let node = new TreeNode(val);
      let temp = root;
      if (isleft) {
        if(prevroot) prevroot.left = node;
        node.left = temp;
        root = node;
      } else {
        if(prevroot) prevroot.right = node;
        node.right = temp;
        root = node;
      }
    }
    if (!root) return 0;
    helper(root.left, val, depth - 1, root, true);
    helper(root.right, val, depth - 1, root, false);
    return root;
  }
  return helper(root, val, depth, null, true);
};

const node = new TreeNode(4);
node.left = new TreeNode(2);
node.left.left = new TreeNode(3);
node.left.right = new TreeNode(1);
node.right = new TreeNode(6);
node.right.left = new TreeNode(5);

addOneRow(node, 1, 1);
