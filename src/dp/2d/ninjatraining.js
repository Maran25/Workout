function maximumPoints(arr, n) {
  // your code here
  let m = arr[0].length;
  let dp = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    let max = 0;
    for (let j = 0; j < m; j++) {
      if (i !== j) max = Math.max(max, arr[0][j]);
    }
    dp[0][i] = max;
  }

  for (let i = 1; i < n; i++) {
    for (let last = 0; last < m; last++) {
      let max = 0;
      for (let j = 0; j < m; j++) {
        if (last !== j) max = Math.max(max, arr[i][j] + dp[i - 1][j]);
      }
      dp[i][last] = max;
    }
  }

  return Math.max(...dp[n - 1]);

  // let map = new Map()
  // return dfs(arr, n, 0, -1, map)
}

function dfs(arr, n, i, last, map) {
  if (i === n - 1) {
    let max = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (j !== last) {
        max = Math.max(max, arr[i][j]);
      }
    }
    return max;
  }
  let key = `${i}:${last}`;
  if (map.has(key)) return map.get(key);
  let max = 0;

  for (let j = 0; j < arr[i].length; j++) {
    if (j !== last) {
      max = Math.max(max, arr[i][j] + dfs(arr, n, i + 1, j, map));
    }
  }

  map.set(key, max);
  return max;
}
