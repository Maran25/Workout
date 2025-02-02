class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);  // Push element to stack1
    }

    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                throw new Error("Queue is empty");
            }
            // Move elements from stack1 to stack2
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();  // Pop element from stack2
    }
}

let queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // Output: 1
queue.enqueue(4);
queue.dequeue(); // Output: 2
queue.dequeue(); // Output: 3
queue.dequeue(); // Output: 4

