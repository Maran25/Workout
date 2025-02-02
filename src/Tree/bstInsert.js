class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (newNode.value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        } else {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    if (this.root && this.root.value === value) {
      return true;
    } else {
      let current = this.root;
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            return false;
          } else {
            if (current.right.value === value) {
              return true;
            } else {
              current = current.right;
            }
          }
        } else {
          if (current.left === null) {
            return false;
          } else {
            if (current.left.value === value) {
              return true;
            } else {
              current = current.left;
            }
          }
        }
      }
    }
  }

  delete(value) {
    if(this.root === null) {
      return this;
    }
    let current = this.root;
    let temp = current;
    while(true) {
      if(value > this.root.value) {
        if(current.value === value) {
          temp = current.left;
          current.right = temp;
          return this;
        } else {
          current = current.right;
        }
      } else {
        if(current.value === value) {
          temp = current.right;
          current.left = temp;
          return this;
        } else {
          current = current.left;
        }
      }
    }
  }

  max() {
    if(this.root === null) return this;
    let current = this.root;
    let max = Number.MIN_VALUE;

    while(true) {
      if(current.value > max) {
        max = current.value;
        if(current.right === null) {
          if(max > this.root.value) {
            return max;
          } else {
            return this.root.value;
          }
        }
      } else {
        current = current.right;
      }
    }
  }

  min() {
    if(this.root === null) return this;
    let current = this.root;
    let min = Number.MAX_VALUE;

    while(true) {
      if(current.value < min) {
        min = current.value;
        if(current.left === null) {
          if(min < this.root.value) {
            return min;
          } else {
            return this.root.value;
          }
        }
      } else {
        current = current.left;
      }
    }
  }
}

const bst = new BinarySearchTree();
bst.insert(12);
bst.insert(20);
bst.insert(21);
bst.insert(72);
bst.insert(73);
bst.insert(90);
bst.insert(80);



console.log(bst)
