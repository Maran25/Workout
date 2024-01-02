function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

let head = new ListNode(4);
head.next = new ListNode(2);
head.next.next = new ListNode(8);

let root = new TreeNode(1);
root.left = new TreeNode(4);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(1);
root.right = new TreeNode(4);
root.right.left = new TreeNode(2);
root.right.left.left = new TreeNode(6);
root.right.left.right = new TreeNode(8);
root.right.left.right.left = new TreeNode(1);
root.right.left.right.right = new TreeNode(3);

// var isSubPath = function (head, root) {
//     if (!root) return false;

//     if (head === null) return true;

//     if (head.val === root.val) {
//         isSubPath(head.next, root.left);
//         isSubPath(head.next, root.right);
//     } else {
//         isSubPath(head, root.left)
//         isSubPath(head, root.right)
//     }
//     return false;
// };

var isSubPath = function (head, root) {
  if (!root) return false;
  if (isSame(head, root)) return true;

  return isSubPath(head, root.left) || isSubPath(head, root.right);
};

const isSame = (head, root) => {
  if (!head) return true;
  if (!root) return false;

  if (head.val !== root.val) return false;
  return isSame(head.next, root.left) || isSame(head.next, root.right);
};

// console.log(isSubPath(head, root))

//PATH SUM 111

var pathSum = function (root, targetSum) {
  if (!root) return 0;
  let paths = 0;
  let nodes = [];

  function preorder(root) {
    if (!root) return null;
    nodes.push(root);
    if(root.left) preorder(root.left);
    if(root.right) preorder(root.right);
  }
  preorder(root);

  function dfs(root, remaining, max) {
    if (root === null) return 0;

    if (remaining === root.val) return 1;

    let left = dfs(root.left, remaining - root.val, max);
    let right = dfs(root.right, remaining - root.val, max);

    max = Math.max(max, left + right);
    paths += max;
  }
  nodes.forEach((node) => dfs(node, targetSum, 0));
  return paths;
};

function dfs(root, sum) {
  if (root === null) return 0;
  sum += root.val
  return dfs(root.left, sum) + dfs(root.right, sum)
}

let pnode = new TreeNode(10);
pnode.left = new TreeNode(5);
pnode.left.right = new TreeNode(2);
pnode.left.right.right = new TreeNode(1);
pnode.left.left = new TreeNode(3);
pnode.left.right = new TreeNode(-2);
pnode.left.left.left = new TreeNode(3);
pnode.right = new TreeNode(-3);
pnode.right.right = new TreeNode(11);

// console.log(pathSum(pnode, 8));

var maxProduct = function (root) {
  if (!root) return 0
  let result = 0
  let rootSum = sumNodes(root);

  function maximumProduct(root, rootSum) {
      if (!root) return 0;
      let sum = 0;
      sum += maximumProduct(root.left, rootSum)
      sum += maximumProduct(root.right, rootSum)
      sum += root.val;
      if (sum * (rootSum - sum) > result) {
          result = sum * (rootSum - sum);
      }
      return sum
  }

  maximumProduct(root, rootSum, result);
  return result % 1000000007
};

function sumNodes(root) {
  if (root === null) return 0;
  return sumNodes(root.left) + sumNodes(root.right) + root.val
}

const mnode = new TreeNode(1)
mnode.left = new TreeNode(2)
mnode.left.left = new TreeNode(4)
mnode.left.right = new TreeNode(5)
mnode.right = new TreeNode(3)
mnode.right.left = new TreeNode(6)
console.log(maxProduct(mnode));