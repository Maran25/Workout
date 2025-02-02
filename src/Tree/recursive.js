class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const insertHelper = (value, node) => {
      if (node === null) {
        return new Node(value);
      }

      if (node.value > value) {
        node.left = insertHelper(value, node.left);
      } else {
        node.right = insertHelper(value, node.right);
      }
      return node;
    };
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      return insertHelper(value, this.root);
    }
  }

  find(value) {
    const findHelper = (value, node) => {
      if (node === null) return false;

      if (node.value === value) {
        return true;
      } else if (node.value > value) {
        return findHelper(value, node.left);
      } else {
        return findHelper(value, node.right);
      }
    };
    return findHelper(value, this.root);
  }

  min() {
    const minHelper = (node) => {
      while (node.left !== null) {
        node = node.left;
      }
      return node.value;
    };
    return minHelper(this.root);
  }

  max() {
    const maxHelper = (node) => {
      while (node.right !== null) {
        node = node.right;
      }
      return node.value;
    };
    return maxHelper(this.root);
  }

  traverse() {
    let node = this.root;
    let queue = [node];
    let arr = [];
    while (queue.length > 0) {
      let firstNode = queue.shift();
      if (firstNode.left !== null) {
        queue.push(firstNode.left);
      }
      if (firstNode.right !== null) {
        queue.push(firstNode.right);
      }
      arr.push(firstNode.value);
    }
    return arr;
  }

  traverseOne() {
    let node = this.root;
    let queue = [node];
    let arr = [];
    while (queue.length > 0) {
      let levelSize = queue.length;
      let array = [];
      for (let i = 0; i < levelSize; i++) {
        let firstNode = queue.shift();
        array.push(firstNode.value);
        if (firstNode.left !== null) {
          queue.push(firstNode.left);
        }
        if (firstNode.right !== null) {
          queue.push(firstNode.right);
        }
      }
      arr.push(array);
    }
    return arr;
  }

  findSuccessor(key) {
    let node = this.root;
    if (node === null) return null;
    let queue = [node];

    while (queue.length > 0) {
      const firstNode = queue.shift();

      if (firstNode.left !== null) {
        queue.push(firstNode.left);
      }
      if (firstNode.right !== null) {
        queue.push(firstNode.right);
      }
      if (key === firstNode.value && firstNode.value !== null) {
        let ans = queue.shift();
        return ans?.value || null;
      }
    }
    return null;
  }

  reverse() {
    let node = this.root;
    let queue = [node];
    let arr = [];

    while (queue.length > 0) {
      let levelSize = queue.length;
      let array = [];
      for (let i = 0; i < levelSize; i++) {
        let firstNode = queue.shift();
        array.push(firstNode.value);
        if (firstNode.left !== null) {
          queue.push(firstNode.left);
        }
        if (firstNode.right !== null) {
          queue.push(firstNode.right);
        }
      }
      arr.unshift(array);
    }
    return arr;
  }

  zigzag() {
    let arr = [];
    const root = this.root;
    if (root === null) return arr;
    let queue = [root];
    let isRev = false;

    while (queue.length > 0) {
      let array = [];
      let levelSize = queue.length;

      for (let i = 0; i < levelSize; i++) {
        if (!isRev) {
          let firstNode = queue.shift();
          array.push(firstNode.value);
          if (firstNode.left !== null) {
            queue.push(firstNode.left);
          }
          if (firstNode.right !== null) {
            queue.push(firstNode.right);
          }
        } else {
          let lastNode = queue.pop();
          array.push(lastNode.value);
          if (lastNode.right !== null) {
            queue.unshift(lastNode.right);
          }
          if (lastNode.left !== null) {
            queue.unshift(lastNode.left);
          }
        }
      }
      arr.push(array);
      isRev = !isRev;
    }
    return arr;
  }

  rightView() {
    let node = this.root;
    let queue = [node];
    let arr = [];
    while (queue.length > 0) {
      let levelSize = queue.length;
      let array = [];
      for (let i = 0; i < levelSize; i++) {
        let firstNode = queue.shift();
        array.push(firstNode.value);
        if (firstNode.right !== null) {
          queue.push(firstNode.right);
        }
      }
      arr.push(array.pop());
    }
    return arr;
  }

  isCousine(x, y) {
    const node = this.root;
    let queue = [node];
    if (node === null) return [];
    let track = {};
    let level = 1;

    while (queue.length > 0) {
      let length = queue.length;
      let arr = [];

      for (let i = 0; i < length; i++) {
        const n = queue.shift();
        if (n.value === x) {
          track[n.value] = level;
        }
        if (n.value === y) {
          track[n.value] = level;
        }
        arr.push(n.value);
        if (n.left !== null) queue.push(n.left);
        if (n.right !== null) queue.push(n.right);
      }
      level++;
    }

    const [key1, key2] = Object.keys();
    if (key1 !== key2) return false;
  }

  preorder() {
    let node = this.root;
    let result = [];

    const preorderHelper = (node, result) => {
      if (node === null) return;
      result.push(node.value);
      preorderHelper(node.left, result);
      preorderHelper(node.right, result);
    };

    preorderHelper(node, result);
    return result;
  }

  inorder() {
    let node = this.root;
    let result = [];

    const inorderHelper = (node, result) => {
      if (node === null) return;
      inorderHelper(node.left, result);
      result.push(node.value);
      inorderHelper(node.right, result);
    };

    inorderHelper(node, result);
    return result;
  }

  postorder() {
    let node = this.root;
    let result = [];

    const postorderHelper = (node, result) => {
      if (node === null) return;
      postorderHelper(node.left, result);
      postorderHelper(node.right, result);
      result.push(node.value);
    };

    postorderHelper(node, result);
    return result;
  }

  iterativePreorder() {
    let node = this.root;
    let stack = [node];
    let result = [];

    while (stack.length > 0) {
      const n = stack.pop();
      result.push(n.value);
      if (n.right !== null) stack.push(n.right);
      if (n.left !== null) stack.push(n.left);
    }
    return result;
  }

  iterativeInorder() {
    let node = this.root;
    let stack = [];
    let result = [];

    let currentNode = node;
    while (currentNode || stack.length > 0) {
      while (currentNode) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }

      currentNode = stack.pop();
      result.push(currentNode.value);
      currentNode = currentNode.right;
    }
    return result;
  }

  iterativePostorder() {
    let node = this.root;
    let result = [];
    let stack = [node];

    while (stack.length > 0) {
      const n = stack.pop();
      result.unshift(n.value);
      if (n.left !== null) stack.push(n.left);
      if (n.right !== null) stack.push(n.right);
    }
    return result;
  }

  isSymmetric() {
    const root = this.root;
    let queue = [root];
    let level = 0;
    let count = 1;

    while (queue.length > 0) {
      let arr = [];
      let length = queue.length;

      for (let i = 0; i < length; i++) {
        const n = queue.shift();
        if (n !== "#") {
          arr.push(n.value);
        } else {
          arr.push(n);
          continue;
        }

        n.left !== null ? queue.push(n.left) : queue.push("#");
        n.right !== null ? queue.push(n.right) : queue.push("#");
      }
      const middleIndex = ((arr.length - 1) / 2).toFixed(0);
      const firstHalf = arr.slice(0, middleIndex).toString();
      const secondHalf = arr
        .slice(middleIndex, arr.length)
        .reverse()
        .toString();

      if (firstHalf === secondHalf) count++;
      level++;
    }

    if (count === level) return true;
    return false;
  }

  flatten() {
    let root = this.root;
    let queue = [];
    const helper = (root, queue) => {
      if (root === null) return;
      queue.push(root);
      if (root.left !== null) helper(root.left, queue);
      if (root.right !== null) helper(root.right, queue);
      return root;
    };
    helper(root, queue);
    let node = queue.shift();
    while (queue.length > 0) {
      node.left = null;
      let temp = queue.shift();
      node.right = temp;
      node = temp;
    }
    console.log(this.root);
  }

  SerializeDeserialize() {
    const serialize = (root) => {
      if (root === null) return " null";

      const leftSerialized = serialize(root.left);
      const rightSerialized = serialize(root.right);

      return " " + root.value + leftSerialized + rightSerialized;
    };
    console.log(serialize(this.root));
    // list = list.reverse().join(" ");

    // const deserialize = (list) => {
    //     const element = list.split(" ").pop();
    //     if(element === 'null') return null;
    //     const node = new Node(parseInt(element));
    //     node.left = deserialize(list);
    //     node.right = deserialize(list);
    //   }
    // deserialize(list);
  }

  boundary() {
    function leftTraverse(node, stack) {
      let cur = node;
      while (cur !== null) {
        if (cur.left !== null && cur.right !== null) stack.push(cur.value);
        if (cur.left !== null) cur = cur.left;
        else cur = cur.right;
      }
    }

    function rightTraverse(node, stack) {
      let cur = node;
      let temp = [];
      while (cur !== null) {
        if (cur.left !== null && cur.right !== null) stack.push(cur.value);
        if (cur.right !== null) cur = cur.right;
        else cur = cur.left;
      }
      while (temp.length > 0) {
        stack.push(temp.pop());
      }
    }

    function leavesTraverse(node, stack) {
      if (node.left === null && node.right === null) {
        stack.push(node.value);
        return;
      }
      if (node.left !== null) leavesTraverse(node.left, stack);
      if (node.right !== null) leavesTraverse(node.right, stack);
    }

    let stack = [];
    let root = this.root;
    if (root.left !== null && root.right !== null) stack.push(root.value);
    leftTraverse(root, stack);
    leavesTraverse(root, stack);
    rightTraverse(root, stack);
    return stack;
  }

  verticalLevelOrderTraversal() {
    const root = this.root;
    const map = {};
    let queue = [[root, 0]];

    while (queue.length > 0) {
      const [node, level] = queue.shift();

      if (!map[level]) {
        map[level] = [node.value];
      } else {
        map[level].push(node.value);
      }

      if (node.left !== null) queue.push([node.left, level - 1]);
      if (node.right !== null) queue.push([node.right, level + 1]);
    }
    return Object.keys(map).map((k) => map[k]);
  }

  verticalLevelOrderTraversalRecursive() {
    let map = {};

    const traverse = (root, level) => {
      if(root === null) return null;

      if(!map[level]) {
        map[level] = [root.value];
      } else {
        map[level].push(root.value);
      }

      traverse(root.left, level - 1);
      traverse(root.right, level + 1);
    }
    
    traverse(this.root, 0)
    return Object.keys(map).sort((a, b) => a-b).map((k) => map[k])
  }
}

const bst = new BST();
bst.insert(20);
bst.insert(24);
bst.insert(25);
bst.insert(12);
bst.insert(15);
bst.insert(23);
bst.insert(26);
bst.insert(16);
bst.insert(11);

console.log(bst.verticalLevelOrderTraversal());
