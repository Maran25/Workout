class Solution {
  // Function to find the maximum profit and the number of jobs done.
  JobScheduling(jobs, n) {
    // Sort jobs in descending order of profit
    jobs.sort((a, b) => b.profit - a.profit);

    // Find the maximum deadline
    let maxDate = jobs.reduce((acc, cur) => Math.max(acc, cur.dead), 0);

    // Initialize the DSU array where each slot is its own parent
    let dsu = new Array(maxDate + 1).fill(0).map((_, i) => i);

    // DSU find function with path compression
    const find = (x) => {
      if (dsu[x] === x) return x;
      return (dsu[x] = find(dsu[x]));
    };

    // DSU union function
    const union = (x, y) => {
      dsu[x] = y;
    };

    let profit = 0;
    let taken = 0;

    for (let i = 0; i < n; i++) {
      // Find the latest available slot for the job
      let availableSlot = find(jobs[i].dead);

      // If a valid slot is found (greater than 0), schedule the job
      if (availableSlot > 0) {
        // Assign the job to the found slot
        union(availableSlot, availableSlot - 1);
        profit += jobs[i].profit;
        taken++;
      }
    }

    return [taken, profit];
  }
}

const d = new Solution();
d.JobScheduling(
  [
    [1, 2, 100],
    [2, 1, 19],
    [3, 2, 27],
    [4, 1, 25],
    [5, 1, 15],
  ],
  5
);

/**
 * Explanation
DSU Array (dsu): Each index represents a time slot, and it stores the latest available slot for that index.
find function: Recursively finds the root parent of the current slot, applying path compression to optimize future queries.
union function: Updates the DSU structure by linking the current slot to its previous available slot after scheduling a job.
Advantages
The DSU approach optimizes the scheduling by removing the need for an inner loop, leading to a more efficient solution, especially for larger inputs. This solution runs in 
𝑂(𝑛 log 𝑛)
O(nlogn) time due to sorting and efficient 
𝑂(log𝑛)
O(logn) operations for DSU operations, which is faster than the 
𝑂(𝑛2)
O(n 2 ) time complexity with the inner loop.
 */