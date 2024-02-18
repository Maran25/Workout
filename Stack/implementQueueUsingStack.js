
var MyQueue = function() {
    this.queue = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.helper = [];
    while (!this.empty()) {
        let num = this.queue.pop() 
        this.helper.push(num);
    }

    let removedValue = this.helper.pop();

    while(this.helper.length >= 1) {
        let num = this.helper.pop();
        this.queue.push(num);
    }

    return removedValue;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.queue[this.queue.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.queue.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const obj = new MyQueue();
obj.push(1); // push queue: [1]
obj.push(2)
obj.push(3);

console.log(obj.peek())
console.log(obj.empty())
console.log(obj)
var param_2 = obj.pop(); // pop queue:[1,2], return
console.log(param_2)// 3
console.log(obj)