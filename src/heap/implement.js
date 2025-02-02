class MinPriorityQueue {
  constructor() {
    this.arr = [];
  }

  insert(val) {
    this.arr.push(val);
    let len = this.arr.length;

    while (len >= 0 && val < this.arr[len >> 1]) {
      [this.arr[len], this.arr[len >> 1]] = [this.arr[len >> 1], this.arr[len]];
      len = len >> 1;
    }
  }

  delete() {
    let result = this.arr[0];
    this.arr[0] = this.arr.pop();
    let len = this.arr.length;
    let i = 0;
    while (i < len) {
      let left = (i << 1) | 1;
      let right = (i << 1) | 2;
      let smallest = i;
      if (left < len && this.arr[left] < this.arr[smallest]) {
        smallest = left;
      }
      if (right < len && this.arr[right] < this.arr[smallest]) {
        smallest = right;
      }
      if (smallest != i) {
        [this.arr[i], this.arr[smallest]] = [this.arr[smallest], this.arr[i]];
        i = smallest;
      }
    }
    return result;
  }
}

const mp = new MinPriorityQueue();
mp.insert(4)
mp.insert(6)
mp.insert(2)
mp.insert(1);
console.log(mp.delete())
console.log(mp.delete())