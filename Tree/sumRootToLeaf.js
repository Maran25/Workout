function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root) {
    function helper(root, sum) {
      if(root === null) return sum;
      if(root.right === null && root.left === null) return sum + root.val;
      return +helper(root.left, sum + root.val) + +helper(root.right, sum + root.val);
    }
    return helper(root, "");
  };  


const node = new TreeNode(1);
node.left = new TreeNode(0);

console.log(sumNumbers(node)); // Output: 25 12+13