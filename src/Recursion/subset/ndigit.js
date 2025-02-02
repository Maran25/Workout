function increasingNumbers(N) {
  let list = [];
  let first = generateNum(N);

  helper(N, first, 2, list);
  return list;
}

function helper(N, start, prev, list) {
  if(Math.floor(start/Math.pow(10, N-1)) === N) return;

  for(let i=start; i<=9; i++) {
    list.push(i);
  }
  let numToAdd = generateOne(prev)
  helper(N, start + numToAdd, prev, list)
}

function generateOne(n) {
  let ans = 0;
  for(let i=1; i<=n; i++) {
    ans = ans * 10 + 1
  }
  return ans;
}
function generateNum(n) {
  let ans = 1;
  for(let i=2; i<=n; i++) {
    ans = ans * 10 + i
  }
  return ans;
}

console.log(increasingNumbers(2));


// function increasingNumbers(N) {
//   let list = [];
//   helper(N, 0, Math.pow(10, N - 1), list);
// }

// function helper(N, index, prev, list) {
//   if (index >= Math.pow(10, N)) return;
//   if (Math.log10(prev) > N) return;

//   for (let i = index; i <= 9; i++) {
//     list.push(prev + i);
//   }
//   helper(N, index + 1, prev, list);
// }


// function increasingNumbers(N) {
//     let list = [];
//     for (let i = Math.pow(10, (N - 1)); i < Math.pow(10, N); i++) {
//         if (i >= 10) {
//             if (isIncreasing(i)) {
//                 list.push(i);
//             }
//         } else {
//             list.push(i);
//         }
//     }
//     return list;
// }

// function isIncreasing(n) {
//     let num = n.toString();
//     for (let i = 0; i < num.length - 1; i++) {
//         if (num.charAt(i) > num.charAt(i + 1)) return false;
//     }
//     return true;
// }
