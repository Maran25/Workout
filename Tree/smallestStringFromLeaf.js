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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
    let arr = []
    function helper(root, path) {
        if(!root) return 0;

        let char = String.fromCharCode(root.val + 97);
        if (root && root.left === null && root.right === null) {
            arr.push(char + path)
            return 0;
        }
        helper(root.left, char + path);
        helper(root.right, char + path);
    }
    helper(root, '')

    return arr.reduce((acc, cur) => acc > cur ? cur : acc, arr[0])
};



const node = new TreeNode(25);
node.left = new TreeNode(1);
node.right = new TreeNode(3);
node.right.left = new TreeNode(0);
node.right.right = new TreeNode(2);
node.left.right = new TreeNode(3);
node.left.left = new TreeNode(1);
// node.left.right.left = new TreeNode(0);

console.log(smallestFromLeaf(node)); // Output: 25 12+13