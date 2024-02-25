function subset(arr, i, temp, n) {
    if(n === i) {
        console.log(temp);
        return;
    }

    temp.push(arr[i]);
    subset(arr, i+1, temp, n);
    temp.pop();
    subset(arr, i+1, temp, n);
}

subset([3, 1, 2], 0, [], 3)