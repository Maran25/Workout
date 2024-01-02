class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findLeavesNode(node) {
  let result = {};

  function dfs(node) {
    if (node === null) return 0;

    let left = dfs(node.left);
    let right = dfs(node.right);

    depth = Math.max(left, right);

    if (!result[depth]) {
      result[depth] = [node.value];
    } else {
      result[depth].push(node.value);
    }
    return depth + 1;
  }
  dfs(node);
  return Object.values(result);
}

const node = new Node(1);
node.left = new Node(2);
node.left.left = new Node(4);
node.left.right = new Node(5);
node.right = new Node(3);

// console.log(findLeavesNode(node));

// Longest Consecutive Path

function LongestConsecutivePath(node) {
  let count = 0;
  let prev = -Infinity;
  let max = -Infinity;

  function dfs(node, count, prev) {
    if (node === null) return 0;

    if (node.value - 1 === prev) {
      count++;
    } else {
      count = 1;
    }
    max = Math.max(max, count);

    dfs(node.left, count, node.value);
    dfs(node.right, count, node.value);
  }
  dfs(node, count, prev);
  return max;
}

const nodeLCP = new Node(1);
nodeLCP.right = new Node(3);
nodeLCP.right.left = new Node(2);
nodeLCP.right.right = new Node(4);
nodeLCP.right.right.right = new Node(5);

// console.log(LongestConsecutivePath(nodeLCP))

// Find the lonely nodes

function findLonelyNodes(node) {
  let result = [];

  function dfs(node) {
    if (node === null) return 0;

    if (node.left !== null && node.right === null) {
      result.push(node.left.value);
    }
    if (node.right !== null && node.left === null) {
      result.push(node.right.value);
    }
    dfs(node.left);
    dfs(node.right);
    return node;
  }
  dfs(node);
  return result;
}

function findLonelyNodes1(node) {
  let result = [];
  let queue = [node];

  while (queue.length) {
    let n = queue.shift();
    if (n === null) continue;

    if (n.left !== null && n.right === null) {
      result.push(n.left.value);
    }
    if (n.right !== null && n.left === null) {
      result.push(n.right.value);
    }
    queue.push(n.left);
    queue.push(n.right);
  }
  return result;
}
const nodeFLN = new Node(7);
nodeFLN.left = new Node(1);
nodeFLN.left.left = new Node(6);
nodeFLN.right = new Node(4);
nodeFLN.right.left = new Node(5);
nodeFLN.right.right = new Node(3);
nodeFLN.right.right.right = new Node(2);

// console.log(findLonelyNodes(nodeFLN));

function findGoodNodes(root) {
  let max = root.value;
  let count = 0;

  function dfs(root, max) {
    if (root === null) return 0;

    if (root.value >= max) {
      count = count + 1;
    }
    max = Math.max(max, root.value);

    dfs(root.left, max);
    dfs(root.right, max);
  }
  dfs(root, max);
  return count;
}

const gNode = new Node(3);
gNode.left = new Node(1);
gNode.left.left = new Node(3);
gNode.right = new Node(4);
gNode.right.left = new Node(1);
gNode.right.right = new Node(5);

const gNode2 = new Node(3);
gNode2.left = new Node(3);
gNode2.left.left = new Node(4);
gNode2.left.right = new Node(2);

// console.log(findGoodNodes(gNode2));

var distanceK = function (root, target, k) {
  let result = new Map();
  let queue = [root];

  while (queue.length > 0) {
    let n = queue.shift();
    if (n.left !== null) {
      result.set(n.left, n);
      queue.push(n.left);
    }
    if (n.right !== null) {
      result.set(n.right, n);
      queue.push(n.right);
    }
  }

  let values = [];
  let visited = new Map();
  queue = [{ node: target, distance: 0 }];

  while (queue.length > 0) {
    let { node, distance } = queue.shift();

    visited.set(node, 1);
    if (distance === k) {
      values.push(node.value);
      continue;
    }

    if (node.left && !visited.has(node.left)) {
      queue.push({ node: node.left, distance: distance + 1 });
    }
    if (node.right && !visited.has(node.right)) {
      queue.push({ node: node.right, distance: distance + 1 });
    }
    if (result.has(node) && !visited.has(result.get(node))) {
      queue.push({ node: result.get(node), distance: distance + 1 });
    }
  }
  return values;
};

const dkNode = new Node(3);
dkNode.left = new Node(5);
dkNode.left.right = new Node(2);
dkNode.left.left = new Node(6);
dkNode.left.right.left = new Node(4);
dkNode.left.right.right = new Node(7);
dkNode.right = new Node(1);
dkNode.right.left = new Node(0);
dkNode.right.right = new Node(8);

// console.log(distanceK(dkNode, dkNode.left, 2));

//Minimum Time taken to burn the tree

function timeToBurnTree(root, target) {
  let m = new Map();
  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    if (node.left) {
      m.set(node.left, node);
      queue.push(node.left);
    }
    if (node.right) {
      m.set(node.right, node);
      queue.push(node.right);
    }
  }

  let count = 0;
  let visited = new Map();
  queue = [{ node: target, distance: 0 }];

  while (queue.length > 0) {
    let { node, distance } = queue.shift();

    count = Math.max(count, distance);
    visited.set(node, 1);

    if (node.left && !visited.has(node.left)) {
      queue.push({ node: node.left, distance: distance + 1 });
    }
    if (node.right && !visited.has(node.right)) {
      queue.push({ node: node.right, distance: distance + 1 });
    }
    if (m.has(node) && !visited.has(m.get(node))) {
      queue.push({ node: m.get(node), distance: distance + 1 });
    }
  }
  return count;
}

const tnode = new Node(1);
tnode.left = new Node(2);
tnode.left.left = new Node(4);
tnode.left.left.right = new Node(7);
tnode.right = new Node(3);
tnode.right.left = new Node(5);
tnode.right.right = new Node(6);

// console.log("BURN!!!", timeToBurnTree(tnode, tnode.left));

//Longest Univalue Path

function longestUniValuePath(root) {
  let max = 0;
  function dfs(root, prev) {
    if (root === null) return 0;

    let left = dfs(root.left, root.value);
    let right = dfs(root.right, root.value);

    max = Math.max(max, left + right);

    return root.value === prev ? Math.max(left, right) + 1 : 0;
  }
  dfs(root, 0);
  return max;
}

const uninode = new Node(5);
uninode.left = new Node(4);
uninode.left.left = new Node(1);
uninode.left.right = new Node(1);
uninode.right = new Node(5);
uninode.right.right = new Node(5);

console.log(longestUniValuePath(uninode));
