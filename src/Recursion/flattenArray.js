function flattenArray(nestedList, i, result) {
  if (i > nestedList.length - 1) return;
  let n = nestedList[i];
  let m = Array.isArray(nestedList[i]);
  if (Array.isArray(nestedList[i])) {
    flattenArray(nestedList[i], 0, result);
  } else {
    result.push(nestedList[i]);
  }
  flattenArray(nestedList, i + 1, result);
}

let result = [];
flattenArray([ 1, [4,[6]] ], 0, result);
