function minSteps(n) {
  let count = 0;
  let total = 0;
  //code here
  for (let i = 1; i <= n*n; i++) {
    if (total === n) return count;
    else if (total+i <= n) total += i;
    else if (total+i >= n) total -= i;
    count++;
  }
}

minSteps(5)
