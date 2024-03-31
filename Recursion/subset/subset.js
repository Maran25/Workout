function subset(arr, i, temp, n, target, sum) {
    if(sum > target) return;
    if(n === i) {
        if(sum === target) console.log(temp);
        return;
    }

    temp.push(arr[i]);
    subset(arr, i+1, temp, n, target, sum+arr[i]);
    temp.pop();
    subset(arr, i+1, temp, n, target, sum-arr[i]);
}

function subsetPrintOne(arr, i, temp, n, target, sum) {
    if(sum > target) return false;
    if(n === i) {
        if(sum === target) console.log(temp);
        return true;;
    }

    temp.push(arr[i]);
    if(subsetPrintOne(arr, i+1, temp, n, target, sum+arr[i])) return true;
    temp.pop();
    if(subsetPrintOne(arr, i+1, temp, n, target, sum)) return true;

    return false;
}

function subsetCount(arr, i, temp, n, target, sum) {
    if(sum > target) return 0;
    if(n === i) {
        if(sum === target) return 1;
        return 0;
    }

    temp.push(arr[i]);
    let left = subsetCount(arr, i+1, temp, n, target, sum+arr[i]);
    temp.pop();
    let right = subsetCount(arr, i+1, temp, n, target, sum);

    return left + right;
}

console.log(subsetCount([3, 1, 2], 0, [], 3, 3, 0))