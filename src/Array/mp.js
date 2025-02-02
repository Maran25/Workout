import { MinPriorityQueue } from 'datastructures-js';

// Create a MinPriorityQueue with a priority callback
let minHeap = new MinPriorityQueue({
    priority: (x) => x[0]  // Ensure this correctly reflects your priority logic
  });

// Enqueue items
minHeap.enqueue([2, 'b']);
minHeap.enqueue([1, 'a']);

// Get the front item of the queue
console.log(minHeap.front()); // Outputs: { element: [1, 'a'], priority: 1 }
